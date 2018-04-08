import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { TrimTextPipe } from './bugTracker/pipes/TrimTextPipe'
import { SortBugPipe } from './bugTracker/pipes/SortBugPipe'
import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { ClosedCountPipe } from './bugTracker/pipes/closedCountPipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortBugPipe,
    ClosedCountPipe
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
