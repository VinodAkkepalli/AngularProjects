import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { BugStatsComponent } from './bugTracker/views/bugStats.Component';
import { BugAddComponent } from './bugTracker/views/bugAdd.Component';
import { BugStorageService } from './bugTracker/services/BugStorage.service';
import { UtilsModule } from './utils/utils.module';
import { BugServerService } from './bugTracker/services/BugServer.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
