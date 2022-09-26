import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoadingController } from '@ionic/angular';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // credentials: FormGroup;

  // constructor(
  //   private fb: FormBuilder,
	// 	private loadingController: LoadingController,
	// 	private authService: AuthService,
	// 	private router: Router,
  // ) { }

  // get email() {
	// 	return this.credentials.get('email');
	// }

	// get password() {
	// 	return this.credentials.get('password');
	// }
  // async register() {
	// 	const loading = await this.loadingController.create();
	// 	await loading.present();

	// 	const user = await this.authService.register(this.credentials.value);
	// 	await loading.dismiss();

	// 	if (user) {
	// 		this.router.navigateByUrl('/home', { replaceUrl: true });
	// 	} else {
	// 	}
	// }


  ngOnInit() {
    // this.credentials = this.fb.group({
		// 	email: ['', [Validators.required, Validators.email]],
		// 	password: ['', [Validators.required, Validators.minLength(6)]]
		// });
  
  }

}
