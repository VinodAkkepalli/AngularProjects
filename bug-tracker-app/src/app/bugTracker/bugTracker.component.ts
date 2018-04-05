import { Component } from '@angular/core';
import {Bug} from './models/Bug'

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bugTracker.component.html',
  styleUrls: ['./bugTracker.component.css']
})
export class BugTrackerComponent {
  bugList: Bug[] = [];

  onBugAdd(bugName){
    let newBug : Bug = {
      name : bugName,
      isClosed : false
    };
    this.bugList.push(newBug);
  }

  onBugClick(bug : Bug){
    bug.isClosed = !bug.isClosed;
    this.getClosedCount();
  }

  getClosedCount() {
    let closedCount = 0;
    for(var i=this.bugList.length-1; i > -1 ; i--){
      if(this.bugList[i].isClosed){
        ++closedCount;
      }
    }
    return closedCount;
  }

  removeClosedBugs(){
    for(var i=this.bugList.length-1; i > -1 ; i--){
      if(this.bugList[i].isClosed){
        console.log("removing closed bug#: " + i );
        
        this.bugList.splice(i,1);
      }
    }

  }
}