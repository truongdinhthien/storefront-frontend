import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckoutInformation } from '../../checkout.types';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss',
})
export class CheckoutFormComponent {
  @Output() checkoutSubmit = new EventEmitter<CheckoutInformation>();
  fb = inject(FormBuilder);

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', [Validators.required], Validators.minLength(6)],
    creditCard: ['', [Validators.required, Validators.minLength(16)]],
  });

  get fullName() {
    return this.form.get('fullName');
  }

  get address() {
    return this.form.get('address');
  }

  get creditCard() {
    return this.form.get('creditCard');
  }

  onSubmit() {
    console.log(this.form.invalid);
    if (this.form.invalid) {
      this.form.updateValueAndValidity();
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.value as CheckoutInformation;
    this.checkoutSubmit.emit(value);
  }

  invalidForm(path: string) {
    const field = this.form.get(path);
    return field?.invalid && (field?.dirty || field?.touched);
  }
}
