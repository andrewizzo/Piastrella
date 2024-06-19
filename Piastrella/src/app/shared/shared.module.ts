import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { CalculatorComponent } from "../calculator/calculator.component";

@NgModule({
    declarations:[],
    imports:[CommonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
    ],
    exports:[FormsModule]
})
export class SharedModule{}