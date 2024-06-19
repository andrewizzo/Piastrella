import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations:[],
    imports:[CommonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule
    ],
    exports:[]
})
export class SharedModule{}