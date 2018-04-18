import { Bug } from '../models/Bug';
import axios from 'axios';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

// using http and Observables
@Injectable()
export class BugServerService {
    private baseUrl : string = 'http://localhost:3000/bugs';

	constructor(private http : Http){
	}

    getAll() : Observable<Bug[]>{
		return this.http
			.get(this.baseUrl)
			.map(response => response.json());
	}

	addNew(newBugData : Bug) : Observable<Bug>{
		return this.http
			.post(this.baseUrl, newBugData)
			.map(response => response.json());
	}

	save(bugData : Bug) : Observable<Bug> {
		return this.http
			.put(`${this.baseUrl}/${bugData.id}`, bugData)
			.map(response => response.json());
	}
    
    remove(bug : Bug) : Observable<any> {
		return this.http
			.delete(`${this.baseUrl}/${bug.id}`)
			.map(response => response.json());
	}
}
/* Using Promises
export class BugServerService {
    private baseUrl : string = 'http://localhost:3000/bugs';

    getAll() : Promise<Bug[]>{
		return axios
			.get(this.baseUrl)
			.then(response => response.data);
	}

	addNew(newBugData : Bug) : Promise<Bug>{
		return axios
			.post(this.baseUrl, newBugData)
			.then(response => response.data);
	}

	save(bugData : Bug) : Promise<Bug> {
		return axios
			.put(`${this.baseUrl}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
    
    remove(bug : Bug) : Promise<any> {
		return axios
			.delete(`${this.baseUrl}/${bug.id}`)
			.then(response => response.data);
	}
}*/