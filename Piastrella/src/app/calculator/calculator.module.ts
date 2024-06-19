import { NgModule } from "@angular/core";
import { CalculatorRoutingModule } from "./calculator-routing.module";
import { CalculatorComponent } from "./calculator.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[CalculatorComponent],
    imports:[CalculatorRoutingModule,SharedModule],
    exports:[CalculatorComponent]
})
export class CalculatorModule{}