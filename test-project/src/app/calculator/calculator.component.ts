import { Component } from '@angular/core';

import {CalculatorModel} from './CalculatorModel'
//import {CalculatorResult} from './CalculatorResult'

@Component({
  selector: 'calculator-root',
  templateUrl: './calculator-2.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  operator: string = 'add';
   model: CalculatorModel = new CalculatorModel();
}
