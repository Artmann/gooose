import React, { useEffect } from "react";

import CardView from '../components/card-view';
import { ThemeConsumer } from '../context/theme';
import View from '../components/view';
import { connect } from 'react-redux';
import { find } from "../actions";

function Card({ cards, dispatch, match }) {
  console.log('CARDS', cards);

  const cardId = parseInt(match.params.id, 10);

  useEffect(() => {
    dispatch(find('card', cardId));
  }, []);

  const card = cards.find(c => c.id === cardId);

  console.log('DISPLAYING CARD', card);

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
  cards: data.cards
});

export default connect(mapStateToProps)(Card);
