import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { TrimTextPipe } from './bugTracker/pipes/TrimTextPipe'
import { SortBugPipe } from './bugTracker/pipes/SortBugPipe'
import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { ClosedCountPipe } from './bugTracker/pipes/closedCountPipe';
import { BugStatsComponent } from './bugTracker/views/bugStats.Component';
import { BugAddComponent } from './bugTracker/views/bugAdd.Component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortBugPipe,
    ClosedCountPipe,
    BugStatsComponent,
    BugAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
