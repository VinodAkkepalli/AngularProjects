import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { Bug } from '../models/Bug'

@Component({
    selector: 'app-bug-stats',
    templateUrl: './bugStats.Component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent {

    @Input('data')
    bugs : Bug[] = [];
    
    getCurrentTime() {
        return new Date();
    }
}