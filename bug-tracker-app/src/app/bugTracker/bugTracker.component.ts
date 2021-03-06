import { Component, OnInit } from '@angular/core';
import {Bug} from './models/Bug'
import {BugOperationsService} from './services/BugOperations.service'
import axios from 'axios'

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bugTracker.component.html',
  styleUrls: ['./bugTracker.component.css']
})
export class BugTrackerComponent implements OnInit{
	bugList : Bug[] = [];
	sortBugBy : string = 'name';
	sortBugDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){ }

	ngOnInit(){
    this.bugOperations
    .getAll()
    .subscribe(bugs => this.bugList = bugs)
	}
	
	onNewBugCreated(newBug:Bug){
		this.bugList = [...this.bugList, newBug];
	}

	onBugClick(bugToToggle : Bug){
    this.bugOperations
			.toggle(bugToToggle)
      .subscribe(toggledBug => 
        this.bugList = this.bugList.map(bug => bug === bugToToggle ? toggledBug : bug));
  }

	removeClosedBugs(){
    this.bugList
    .filter(bug => bug.isClosed)
    .forEach(closedBug => this.bugOperations
    .remove(closedBug)
    .subscribe(Response => this.bugList = this.bugList.filter(
      bug => bug.id !== closedBug.id)))
	}
}
/*  Using Promises with Async await and ngOnInit()
export class BugTrackerComponent implements OnInit{
	bugList : Bug[] = [];
	sortBugBy : string = 'name';
	sortBugDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){ }

	async ngOnInit(){
		this.bugList = await this.bugOperations.getAll()
	}
	
	onNewBugCreated(newBug:Bug){
		this.bugList = [...this.bugList, newBug];
	}

	async onBugClick(bugToToggle : Bug){
		let toggledBug = await this.bugOperations.toggle(bugToToggle);
		this.bugList = this.bugList.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	removeClosedBugs(){
		this.bugList
			.filter(bug => bug.isClosed)
			.forEach(async closedBug => {
				let result = await this.bugOperations.remove(closedBug);
				this.bugList = this.bugList.filter(bug => bug.id !== closedBug.id);
			});
		
	}
}*/

/*  Using Promises
export class BugTrackerComponent implements OnInit{
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
*/