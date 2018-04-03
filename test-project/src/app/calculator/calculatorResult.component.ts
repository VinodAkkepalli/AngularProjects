import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculatorResult.component.html',
  styleUrls: ['./calculatorResult.component.css']
})
export class CalculatorResultComponent{

  //below annotation is needed to indicate that 'data' is passed as input
  @Input()
  data : number = 0;
};
