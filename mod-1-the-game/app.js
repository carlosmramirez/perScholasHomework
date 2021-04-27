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
    this.dealerHand = [];
    this.isDealerStand = false;
    this.isPlayerStand = false;
    this.playerScore = 0;
    this.dealerScore = 0;
  }

  dealTwo() {
    for (let i = 0; i < 2; i++) {
      const card = this.deck.deal()
      this.playerHand.push(card);
    }

    for (let i = 0; i < 2; i++) {
      const card = this.deck.deal();
      this.dealerHand.push(card);   
    }
  }

  getScores() {
    this.playerScore = this.playerHand.reduce((acc,val) => {
      return acc + val.weight;
    }, 0);

    this.dealerScore = this.dealerHand.reduce((acc,val) => {
      return acc + val.weight;
    }, 0);
  }

  hitMe() {
    this.playerHand.push(this.deck.deal());
    
    if (this.dealerScore > 21) {
      alert("Dealer Bust")
    } else if (this.dealerScore < 17) {
      this.dealerHand.push(this.deck.deal());
    } else {
      this.isDealerStand = true;
    }

    this.getScores();
  }

  isBust() {
    if (this.playerScore > 21) {
      alert('Player Bust');
    }

    if (this.dealerScore > 21) {
      alert('Dealer Bust');
    }
  }

  stand() {
    this.isBust();
    console.log(this.playerScore + ' ' + this.dealerScore)
    if (this.playerScore > this.dealerScore) {
      alert("User Wins!");
    } else if (this.playerScore = this.dealerScore) {
      alert("Draw!");
    } else {
      alert("Dealer Wins!");
    }
  }
}



