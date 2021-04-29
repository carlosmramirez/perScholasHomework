const suits = ['S', 'C', 'H', 'D'];
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

  isEmpty() {
    return !this.deck.length;
  }
}

class BlackJack {
  constructor() {
    this.deck = new Deck(suits, values);
    this.playerHand = [];
    this.dealerHand = [];
    this.isUserWinner = false;
    this.isDraw = false;
    this.isDealerStand = false;
    this.isPlayerStand = false;
    this.playerBust = false;
    this.dealerBust= false;
    this.playerScore = 0;
    this.dealerScore = 0;
  }

  replaceDeck() {
    console.log(this.deck.deck.length)
    if (this.deck.isEmpty()) {
      this.deck = new Deck(suits, values);
      this.deck.getDeck();
      console.log("New Deck")
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

  dealTwo() {
    for (let i = 0; i < 2; i++) {
      const card = this.deck.deal()
      this.playerHand.push(card);
    }

    for (let i = 0; i < 2; i++) {
      const card = this.deck.deal();
      if (this.dealerHand.length == 0) {
        card.isFirstCard = true;
        this.dealerHand.push(card);
      } else {
        this.dealerHand.push(card);   
      }
    }
  }

  hitMe() {
    this.playerHand.push(this.deck.deal());
  
    this.getScores();
  }

  stand() {
    this.isPlayerStand = true;
    if (!this.playerBust || !this.playerBust) {
      delete this.dealerHand[0].isFirstCard;
      this.finishDealerHand();
      this.determineWinner();
    }
  }

  finishDealerHand() {
    while (this.dealerScore < 17) {
      this.dealerHand.push(this.deck.deal());
      this.getScores();
    } 
    this.isDealerStand = true;
  }
  
  isBust() {
    if (this.playerScore > 21) {
      delete this.dealerHand[0].isFirstCard;
      this.playerBust = true;
      this.isUserWinner = false;
    }
    if (this.playerScore === this.dealerScore) {
      this.isDraw = true;
    }
    if (this.dealerScore > 21 && !this.playerBust) {
      delete this.dealerHand[0].isFirstCard;
      this.dealerBust = true;
      this.isUserWinner = true;
    }
  }

  determineWinner() {
    if (this.playerScore > this.dealerScore) {
      this.isUserWinner = true;
    } else if (this.playerScore === this.dealerScore) {
      this.isDraw = true;
    } else {
      this.isUserWinner = false;
    }
  }

  reset() {
    this.playerHand = [];
    this.dealerHand = [];
    this.isDealerStand = false;
    this.isPlayerStand = false;
    this.playerBust = false;
    this.dealerBust= false;
    this.playerScore = 0;
    this.dealerScore = 0;
  }
}



