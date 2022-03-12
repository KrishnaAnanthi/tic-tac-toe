import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  boxes: string[];
  winner: string;
  xIsNext = true;
  isGameOver = false;
  // moveCount = 0;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.boxes = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.isGameOver = false;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.boxes[idx]) {
      this.boxes.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    if (this.boxes.every((element) => element !== null)) {
      console.log(this.boxes.every((element) => element !== null));
      this.isGameOver = true;
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.boxes[a] &&
        this.boxes[a] === this.boxes[b] &&
        this.boxes[a] === this.boxes[c]
      ) {
        this.isGameOver = true;
        return this.boxes[a];
      }
    }
    return null;
  }
}
