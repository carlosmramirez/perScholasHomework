const suits = ['spades', 'clubs', 'hearts', 'diamonds'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'];

class Deck {
  constructor(suits, values) {
    this.suits = suits;
    this.values = values;
    this.deck = [];
  }

  getDeck() {
    for (let suit = 0; suit < suits.length; suit++) {
      for (let value = 0; value < values.length; value++) {
        let weight;
        if (values[value] === 'J' || values[value] === 'Q' || values[value] === 'K') {
          weight = 10;
        } else if (values[value] === 'A') {
          weight = 11;
        } else {
          weight = parseInt(values[value]);
        }
        const card = {
          suit: this.suits[suit],
          value: this.values[value],
          weight: weight
        }
        this.deck.push(card);
      }
    }
  }
}

const deck1 = new Deck(suits, values);
deck1.getDeck();

