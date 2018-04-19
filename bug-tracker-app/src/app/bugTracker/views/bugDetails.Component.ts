import { Component, OnInit } from "@angular/core";
import { Bug } from '../models/Bug'
import { BugServerService } from "../services/BugServer.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'bug-details',
    templateUrl: './bugDetails.Component.html'
})
export class BugDetailsComponent implements OnInit{
    
    bug: Bug;
    
    constructor(private bugServer : BugServerService,
                private route: ActivatedRoute){
	}

    ngOnInit(): void {
        this.route.params
			.map((p:Bug) => p.id)
			.subscribe(id => this.bugServer.get(id).subscribe(bug => this.bug = bug));
    }

    
}