import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from  '@angular/http'

//Routing
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { BugStatsComponent } from './bugTracker/views/bugStats.Component';
import { BugAddComponent } from './bugTracker/views/bugAdd.Component';
import { BugStorageService } from './bugTracker/services/BugStorage.service';
import { UtilsModule } from './utils/utils.module';
import { BugServerService } from './bugTracker/services/BugServer.service';
import { BugDetailsComponent } from './bugTracker/views/bugDetails.Component';

//Routing
let routes : Routes = [
  {path : 'bugs', component : BugTrackerComponent},
  {path : '', redirectTo : '/bugs', pathMatch : 'full'},
  {path : 'add', component : BugAddComponent},
  {path : 'details/:id', component : BugDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugAddComponent,
    BugDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
