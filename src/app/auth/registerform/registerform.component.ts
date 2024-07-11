import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  errorMessage:String = '';
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    this.registerForm = this.fb.group(
			{
				username: ['', Validators.required],
				emailAdrress: ['', [Validators.required, Validators.email]],
				password: ['', [Validators.required]],
				confirmPassword: ['', Validators.required],
			},
			{
				validators: this.matchValidator('password', 'confirmPassword'),
			},
		);
  }

  ngOnInit(): void {
  }

//   ngDoCheck() {
// 		const isDirt = this.registerForm.dirty;
// 		if (isDirt) {
// 			this.authService.checkRegisteration(this.registerForm.value.username, this.registerForm.value.emailAdrress, this.registerForm.value.password);
// 		}
// 	}
  formSubmitHandler() {
		this.submitted = true;
		if (this.registerForm.valid) {
			const val = this.registerForm.value;
			this.authService.checkRegisteration(val.username, val.emailAdrress, val.password)
			.subscribe(
				data => {
					this.router.navigate(['/login']);
				},
				error => {
					this.errorMessage = error;
				}
			)
			// Show The Submitted Data In Console
			console.log(this.registerForm.getRawValue);
		}
	}

  private matchValidator(control1: string, control2: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const formGroup = control as FormGroup;
			const control1Val = formGroup.get(control1)?.value;
			const control2val = formGroup.get(control2)?.value;
			if (control1Val === control2val) {
				return null;
			} else {
				return { valuesNotMatched: true };
			}
		};
	}
}
