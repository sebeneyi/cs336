import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleGame';

  guessNum: number;
  sqrtNum: number;
  percent: number;
  correctNum: number;
  guessCount: number = 0;

  feedback: string[] = [];
  feedbackString: string;

  isCorrect: boolean = false;

  randomNum(): void {
    this.sqrtNum = Math.floor(Math.random() * (250 - 50) + 50);
  }

  tryAgain(): void {
    this.feedback.splice(0, this.feedback.length);
    this.isCorrect = false;
    this.guessNum = undefined;
    this.sqrtNum = undefined;
    this.percent = undefined;
  }

  submit(): void {
    this.guessCount++;

    const correctNum = Math.sqrt(this.sqrtNum);
    const guess = Number(this.guessNum);

    if (Math.abs(guess - correctNum) / correctNum <= this.percent / 100) {
      // answer is close enough.
      this.feedbackString = " is close enough!";
      this.feedback.push(this.guessNum + this.feedbackString);
      this.feedback.push("You got it in " + this.guessCount + " tries!");
      this.isCorrect = true;
      this.guessNum = undefined;
    } else if (guess < correctNum) {
      // code
      this.feedbackString = " is too low. Try again!";
      this.feedback.push(this.guessNum + this.feedbackString);
      this.guessNum = undefined;
    } else {
      this.feedbackString = " is too high. Try again!";
      this.feedback.push(this.guessNum + this.feedbackString);
      this.guessNum = undefined;
    }
  }
}
