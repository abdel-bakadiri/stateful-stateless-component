import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss'],
  providers: [TimerService],
})
export class TimerContainerComponent implements OnInit, OnDestroy {
  @Input() initialCounter!: number;
  constructor(public timeService: TimerService) {}

  ngOnInit(): void {
    this.timeService.startCountDown(this.initialCounter);
  }
  handleToggleTimer() {
    this.timeService.isPaused = !this.timeService.isPaused;
  }

  handleResetTimer() {
    this.timeService.onDestroy();
    this.timeService.isPaused = true;
    this.timeService.countDown = 100;
    this.timeService.startCountDown();
  }

  ngOnDestroy(): void {}
}
