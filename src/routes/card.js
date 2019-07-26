import React, { useEffect, useState } from "react";

import CardView from '../components/card-view';
import { ThemeConsumer } from '../context/theme';
import View from '../components/view';
import { connect } from 'react-redux';
import { fetchCard } from "../actions";

function Board({ boards, cards, dispatch, match }) {
  const cardId = match.params.id;
  const [columnIndex, setColumnIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCard(cardId));
  }, []);
  
  const card = cards.find(c => `${c.id}` === cardId );

  return (
    <ThemeConsumer>
      {theme =>
        <View background={theme.background} hasHeader={false}>
          <CardView card={card} />
        </View>
      }
    </ThemeConsumer>
  );
}

const mapStateToProps = ({ data }) => ({
  boards: data.boards,
  cards: data.cards
});

export default connect(mapStateToProps)(Board);
