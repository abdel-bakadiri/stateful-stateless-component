import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  initialCounter: number = 100;
  countDown!: number;
  progress!: number;
  isPaused = true;
  countDownRef: any;
  constructor() {}

  startCountDown(init?: number) {
    if (init) {
      this.initialCounter = init;
    }
    this.countDownRef = setInterval(() => {
      if (this.countDown) {
        this.initialCounter = this.countDown;
      }
      if (this.isPaused) {
        this.countDown = this.initialCounter - 1;
        this.progress = this.countDown;
      }
    }, 1000);
  }

  onDestroy() {
    this.clearTimeOut();
  }
  private clearTimeOut() {
    if (this.countDownRef) {
      clearTimeout(this.countDownRef);
      this.countDownRef = null;
    }
  }
}
