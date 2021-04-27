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

  deal() {
    return this.deck.pop();
  }
}

class BlackJack {
  constructor() {
    this.deck = new Deck(suits, values);
    this.playerHand = [];
    this.dealerHand = []
    this.playerScore = 0;
    this.dealerScore = 0;
  }

  dealTwo() {
    for (let i = 0; i < 2; i++) {
      const card = this.deck.deal()
      const newCard = document.createElement('div');
      const playerHand = document.getElementsByClassName('hand')[0];
    
      this.playerHand.push(card);
      newCard.innerHTML = JSON.stringify(card);
      playerHand.appendChild(newCard);
    }

    for (let i = 0; i < 2; i++) {
      const card = this.deck.deal();
      const newCard = document.createElement('div');
      const playerHand = document.getElementsByClassName('hand')[1];
    
      this.dealerHand.push(card);
      newCard.innerHTML = JSON.stringify(card);
      playerHand.appendChild(newCard);
    }
  }
}



