import { Bug } from '../models/Bug'
import { Injectable } from '@angular/core';
import { BugServerService } from './BugServer.service'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BugOperationsService{

	constructor(private bugServer : BugServerService){
	}

	getAll() : Observable<Bug[]> {
		return this.bugServer.getAll();
	}

	remove(bug : Bug): Observable<any>{
		return this.bugServer.remove(bug);
	}

	createNew(bugName : string, bugDescription : string) : Observable<Bug> {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			description : bugDescription,
			isClosed : false,
			createdAt : new Date
		};
		return this.bugServer.addNew(newBugData);
	}

	toggle(bug : Bug) : Observable<Bug> {
		let toggledBug = {...bug, isClosed : !bug.isClosed};
		return this.bugServer.save(toggledBug);
	}
}
/*export class BugOperationsService{

	constructor(private bugServer : BugServerService){
	}

	getAll() : Promise<Bug[]> {
		return this.bugServer.getAll();
	}

	remove(bug : Bug): Promise<any>{
		return this.bugServer.remove(bug);
	}

	createNew(bugName : string) : Promise<Bug> {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date
		};
		return this.bugServer.addNew(newBugData);
	}

	toggle(bug : Bug) : Promise<Bug> {
		let toggledBug = {...bug, isClosed : !bug.isClosed};
		return this.bugServer.save(toggledBug);
	}
}*/