import { Component } from '@angular/core';
import {Bug} from './models/Bug'
import {BugOperationsService} from './services/BugOperations.service'

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
    this.bugList = this.bugOperations.getAll();
  }

  onNewBugCreated(newBug: Bug){
    this.bugList.push(newBug);
  }

  onBugClick(bugToToggle : Bug){
    let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugList = this.bugList.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  removeClosedBugs(){
    this.bugList.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));
		this.bugList = this.bugOperations.getAll();
  }
}
