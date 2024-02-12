class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame extends Player {
  constructor(player1, player2) {
    super();
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const randomNums = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return {
      health: randomNums(0, 10),
      power: randomNums(0, 10),
    };
  }

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      this.player1.showStatus();
      this.player2.showStatus();

      let itemPlayer1 = this.getRandomItem();
      let itemPlayer2 = this.getRandomItem();

      this.player1.useItem(itemPlayer1);
      this.player2.useItem(itemPlayer2);

      this.player1.hit(this.player2.power);
      this.player2.hit(this.player1.power);
    }

    if (this.player1.health > 0) {
      this.player2.health = 0;
      this.player1.showStatus();
      this.player2.showStatus();
      return `${this.player2.name} died, ${this.player1.name} is The Winner`;
    } else {
      this.player1.health = 0;
      this.player1.showStatus();
      this.player2.showStatus();
      return `${this.player1.name} died, ${this.player2.name} is The Winner`;
    }
  }
}
let playerOne = new Player("Budi");
let playerTwo = new Player("Slamet");

const game1 = new ShootingGame(playerOne, playerTwo);

console.log(game1.start());
