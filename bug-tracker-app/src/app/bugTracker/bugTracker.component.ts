import { Component } from '@angular/core';
import {Bug} from './models/Bug'

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bugTracker.component.html',
  styleUrls: ['./bugTracker.component.css']
})
export class BugTrackerComponent {
  list: string[] = [];

  onBugAdd(bugName){
    let newBug : Bug = {
      name : bugName,
      isClosed : false
    };
    this.list.push(newBug);
  }

  onBugClick(bug : Bug){
    bug.isClosed = !bug.isClosed;
  }

  getClosedCount() {
    return 1;
  }

  removeClosedBugs(){

  }
}
