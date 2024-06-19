import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit{
  risultato : number = 0;
  lato1 : number = 0;
  lato2 : number = 0;
  mq : number = 0;
  
  ngOnInit(): void {
    
  }

  calcola(){
    if (this.lato1 > 0 && this.lato2 > 0) {
      this.risultato = (this.mq * 10000)/(this.lato1 * this.lato2)
    }else{
      this.risultato = 0;
    }
  }
}
