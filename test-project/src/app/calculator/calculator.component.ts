import { Component } from '@angular/core';

import {CalculatorModel} from './CalculatorModel'

@Component({
  selector: 'app-calculator',
  //templateUrl: './calculator.component.html',
  //Changing just UI needs Changes to just html file as below
  templateUrl: './calculator-2.component.html', 
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  operator: string = 'add';
   model: CalculatorModel = new CalculatorModel();
}
