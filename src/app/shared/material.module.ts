import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';

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
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
