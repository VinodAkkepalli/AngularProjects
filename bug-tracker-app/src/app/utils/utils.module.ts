import { NgModule } from '@angular/core';

import { SortBugPipe } from './pipes/sortBugPipe';
import { TrimTextPipe } from './pipes/trimTextPipe';
import { ElapsedTimePipe } from './pipes/elapsedPipe';
import { ClosedCountPipe } from './pipes/closedCountPipe';

@NgModule({
    declarations: [
        SortBugPipe,
        TrimTextPipe,
        ElapsedTimePipe,
        ClosedCountPipe
    ],
    providers: [],
    imports: [],
    exports: [
        SortBugPipe,
        TrimTextPipe,
        ElapsedTimePipe,
        ClosedCountPipe
    ]
})
export class UtilsModule {

}