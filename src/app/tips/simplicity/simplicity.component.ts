import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-simplicity',
  templateUrl: './simplicity.component.html',
  styleUrls: ['./simplicity.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
        showError: true,
        displayDefaultIndicatorType: false
      }
    }
  ] 
})
export class SimplicityComponent {
    step1: FormGroup;
    step2: FormGroup;
    completed = false;

  constructor(builder: FormBuilder)  {
  this.step1 = builder.group(
    {
      isNotEmpty: [
        '',
        Validators.compose(
          [Validators.required]
        )
      ]
     }
  );
   this.step2 = builder.group(
    {
      isNotEmpty: [
        '',
        Validators.compose(
          [Validators.required]
        )
      ]
     }
  );
}

}

