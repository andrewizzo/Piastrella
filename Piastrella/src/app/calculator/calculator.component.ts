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
  lato1 : any
  lato2 : any;
  mq : any;

  ngOnInit(): void {
    this.calcola()
    console.log(this.risultato);
    
  }

  calcola(){
    if (this.lato1 > 0 && this.lato2 > 0 && this.risultato == 0 ) {
      this.risultato = (this.mq * 10000)/(this.lato1 * this.lato2)
      console.log(this.risultato);
    }else{
      this.risultato = 0;
    }
  }

  resetForm(){
    this.lato1 = null;
    this.lato2 = null;
    this.mq = null;
    this.risultato = 0;
  }
}
