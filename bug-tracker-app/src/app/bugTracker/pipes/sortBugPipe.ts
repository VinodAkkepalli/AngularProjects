import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug'

interface Comparer{
	(item1 : any, item2 : any) : number
}

@Pipe({
  name : 'sortBug',
	pure : true
})
export class SortBugPipe implements PipeTransform {

  private compareMethod(attributeName : string) : Comparer{
    return function(b1, b2){
      if(b1[attributeName] > b2[attributeName]) return 1;
      if(b1[attributeName] < b2[attributeName]) return -1;
      return 0;
    }
  }

  private getDescendingComparerFor(comparer): Comparer{
  		return function(item1, item2){
  			return comparer(item1, item2) * -1;
  		}
  	}

  transform(data: any[] = [], attrName: string, isDecending: boolean ) : any[]{
    console.log('sort.transform triggered');
    let comparer = this.compareMethod(attrName);
		if (isDecending)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
  }
}
