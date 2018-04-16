import { Component, EventEmitter, Output } from '@angular/core'
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
    
    constructor(private bugOperations : BugOperationsService){
	}

    onBugAdd() {
        let newBug = this.bugOperations.createNew(this.newBugName);
        this.created.emit(newBug);
        console.log(newBug);
        this.newBugName = "";
    }
}