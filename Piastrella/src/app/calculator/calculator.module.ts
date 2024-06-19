import { NgModule } from "@angular/core";
import { CalculatorRoutingModule } from "./calculator-routing.module";
import { CalculatorComponent } from "./calculator.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[CalculatorComponent],
    imports:[CalculatorRoutingModule,CommonModule,SharedModule],
    exports:[CalculatorComponent]
})
export class CalculatorModule{}