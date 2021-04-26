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

  shuffle() {
    for (let i = 0; i < 1000; i++) {
      let index1 = Math.floor(Math.random() * this.deck.length);
      let index2 = Math.floor(Math.random() * this.deck.length);
      let temp = this.deck[index1];

      this.deck[index1] = this.deck[index2];
      this.deck[index2] = temp;
    } 
  }
}

const deck1 = new Deck(suits, values);
deck1.getDeck();
deck1.shuffle();
console.log(deck1.deck)

