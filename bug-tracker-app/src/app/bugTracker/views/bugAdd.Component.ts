import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router';
import { Bug } from '../models/Bug'
import { BugOperationsService } from '../services/BugOperations.service'

@Component({
    selector: 'app-bug-add',
    templateUrl: './bugAdd.Component.html'
})
export class BugAddComponent {

    /* We Emit the event with data we want to pass to outer components */
    @Output()
    created : EventEmitter<Bug> = new EventEmitter<Bug>();
    newBugName: string = "";
    newBugDesc: string = "";
    
    constructor(private bugOperations : BugOperationsService,
                private router: Router){
	}

    onBugAdd() {
        let newBug = this.bugOperations
        .createNew(this.newBugName, this.newBugDesc)
        .subscribe(newBug => { 
            //this.created.emit(newBug);    
            this.router.navigate(['bugs'])
        })
    }
}