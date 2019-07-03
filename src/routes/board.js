import React, { createRef, useEffect, useLayoutEffect, useState } from "react";
import { fetchBoard, fetchCards, moveCard } from '../actions';
import media, { isTablet } from "../styled-components/media";

import Column from "../components/column.js";
import { Link } from 'react-router-dom'
import Swipe from 'react-easy-swipe';
import { ThemeConsumer } from '../context/theme';
import View from '../components/view';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Columns = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  ${media.desktop`
    display: flex;
  `}
`;

const AddCardButton = styled(Link)`
  background: #15cd72;
  bottom: 1rem;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  line-height: 1rem;
  padding: 1rem;
  position: fixed;
  right: 1rem;
  z-index: 100;
`;

let swipeOffset = 0;

function getRelativeIndex(index, referenceIndex) {
  return index - referenceIndex;
}

function getColumnOffset(index, currentColumnIndex, ignoreSwipe = false) {
  return window.outerWidth * getRelativeIndex(index, currentColumnIndex) + (ignoreSwipe ? 0 : swipeOffset);
}

function setElementOffset(element, offset) {
  //element.style.transform = `translate(${offset}px, 0px)`;
  element.style.left = `${offset}px`;
}

function Board({ boards, cards, dispatch, match }) {
  const boardId = match.params.id;
  const [columnIndex, setColumnIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchBoard(boardId));
    dispatch(fetchCards());
  }, []);

  if (boards.length === 0) {
    return <div>Loading...</div>;
  }

  const board = boards.find(b => `${b.id}` === boardId );
  const currentColumn = board.columns[columnIndex];
  const title = isTablet() ? currentColumn.name : board.name;
  const columns = board.columns.map(column => ({
    ...column,
    ref: createRef()
  }));
  const moveColumns = () => {
    columns.forEach(({ ref }, index) => {
      const { current: element } = ref;
      
      if (!element) {
        return;
      }

      const offset = getColumnOffset(index, columnIndex);

      // console.log(index, offset, element.style.left, element.style.top);
      
      setElementOffset(element, offset);
    });  
  };
  const animateColumns = referenceIndex => {
    const animations = columns.map(({ ref }, index) => {
      const { current: element } = ref;
      
      if (!element) {
        return;
      }

      const offset = getColumnOffset(index, referenceIndex, true);

      console.log('animate', offset);

      ///console.log(index, offset, element.style.left, element.style.top);
      
      setElementOffset(element, offset);
    });  
  };

  let isSwiping = false;
  let startPosition, endPosition;

  const onSwipeStart = () => {
    isSwiping = false;
  };

  const onSwipeMove = position => {
    if (isSwiping) {
      endPosition = position;
    } else {
      startPosition = position;
    }

    swipeOffset = position.x;
    moveColumns();
    //console.log('swipeOffset', swipeOffset);

    isSwiping = true;
  };

  const onSwipeEnd = () => {
    const diff = startPosition.x - endPosition.x;

    const index = diff > 0 ?
      Math.min(columnIndex + 1, board.columns.length - 1) :
      Math.max(0, columnIndex - 1);

    animateColumns(index);

    swipeOffset = 0;
   // if (Math.abs(diff) > 50) {
   //   setColumnIndex(index);
   // }
  };

  const onCardMoved = (column, card, index) => {
    dispatch(moveCard(column, card, index));
  };
  
  return (
    <Swipe
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}
      >
      <ThemeConsumer>
        {theme =>
          <View background={theme.background} title={title} >
              <Columns>
                {columns.map((column, index) => (
                  <Column
                    column={column}
                    currentColumn={currentColumn}
                    key={index}
                    number={index}
                    cards={cards}
                    ref={column.ref}
                    onCardMoved={onCardMoved}
                  />
                ))}
              </Columns>

              <AddCardButton to={ `/boards/${board.id}/cards/new` }>
                <i className="fas fa-plus"></i>
              </AddCardButton>
          </View>
        }
      </ThemeConsumer>
    </Swipe>
  );
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards,
  cards: data.cards
});

export default connect(mapStateToProps)(Board);
