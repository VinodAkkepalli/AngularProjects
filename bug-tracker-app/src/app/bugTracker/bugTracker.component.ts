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
  newBugName: string = "";

  constructor(private bugOperations : BugOperationsService){
    this.bugList.push(this.bugOperations.createNew('Server communications failure'));
		this.bugList.push(this.bugOperations.createNew('Application not responding'));
		this.bugList.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugList.push(this.bugOperations.createNew('Data integrity checks failed'));

    console.log(Promise);
  }

  onBugAdd(){
    // let newBug : Bug = {
    //   name : bugName,
    //   isClosed : false
    // };
    let newBug = this.bugOperations.createNew(this.newBugName);
    // this.bugList.push(newBug);
    this.bugList = [...this.bugList, newBug];
    this.newBugName = "";
  }

  onBugClick(bugToToggle : Bug){
    let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugList = this.bugList.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  getClosedCount() {
    console.log('getClosedCount triggered');
    let closedCount = 0;
    for(var i=this.bugList.length-1; i > -1 ; i--){
      if(this.bugList[i].isClosed){
        ++closedCount;
      }
    }
    return closedCount;
  }

  removeClosedBugs(){
    this.bugList = this.bugList.filter(bug => !bug.isClosed);
  }
}
