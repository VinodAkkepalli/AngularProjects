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
    this.bugList.push(this.bugOperations.createNew('Server communications failure'));
		this.bugList.push(this.bugOperations.createNew('Application not responding'));
		this.bugList.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugList.push(this.bugOperations.createNew('Data integrity checks failed'));

    console.log(Promise);
  }

  onNewBugCreated(newBug: Bug){
    this.bugList.push(newBug);
  }

  onBugClick(bugToToggle : Bug){
    let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugList = this.bugList.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  removeClosedBugs(){
    this.bugList = this.bugList.filter(bug => !bug.isClosed);
  }
}
