import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatStepperModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class MaterialModule { }
