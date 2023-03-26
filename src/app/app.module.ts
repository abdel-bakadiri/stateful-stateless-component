import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerContainerComponent } from './timer-container/timer-container.component';
import { TimerService } from './timer.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    DisplayTimerComponent,
    TimerContainerComponent,
  ],
  imports: [BrowserModule],
  // providers: [TimerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
