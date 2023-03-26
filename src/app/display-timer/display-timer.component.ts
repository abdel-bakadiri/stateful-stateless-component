import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss'],
})
export class DisplayTimerComponent implements OnInit, OnChanges {
  @Input() time!: number;
  minutes!: number;
  secondes!: number;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const counter = changes['time'].currentValue;
    if (counter) {
      this.minutes = Math.trunc(counter / 60);
      this.secondes = counter - this.minutes * 60;
    }
  }

  ngOnInit(): void {}
}
