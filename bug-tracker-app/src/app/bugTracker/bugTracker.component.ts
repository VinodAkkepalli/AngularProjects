import { Component } from '@angular/core';
import {Bug} from './models/Bug'
import {BugOperationsService} from './services/BugOperations.service'
import axios from 'axios'

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bugTracker.component.html',
  styleUrls: ['./bugTracker.component.css']
})
export class BugTrackerComponent {
  bugList: Bug[] = [];
  sortBugBy: string = 'name';
  sortBugDescending: boolean = false;
  
  constructor(private bugOperations : BugOperationsService){
    this.bugOperations.getAll()
    .then(bugs => this.bugList = bugs)
  }

  onNewBugCreated(newBug: Bug){
    this.bugList.push(newBug);
  }

  onBugClick(bugToToggle : Bug){
      this.bugOperations
			.toggle(bugToToggle)
      .then(toggledBug => 
        this.bugList = this.bugList.map(bug => bug === bugToToggle ? toggledBug : bug));
  }

  removeClosedBugs(){
    this.bugList
    .filter(bug => bug.isClosed)
    .forEach(closedBug => this.bugOperations
    .remove(closedBug)
    .then(Response => this.bugList = this.bugList.filter(
      bug => bug.id !== closedBug.id)))
  }
}