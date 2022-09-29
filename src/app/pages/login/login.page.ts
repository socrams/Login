import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
	credentials: FormGroup;

	constructor(
		private fb: FormBuilder,
		private loadingController: LoadingController,
		private alertController: AlertController,
		private authService: AuthService,
		private router: Router
	) {}

	
	get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}

	ngOnInit() {
		this.credentials = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	async register() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.register(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/home', { replaceUrl: true });
		} else {
			this.showAlert('Registration failed', 'Please try again!');
		}
	}

	async login() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.login(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/home', { replaceUrl: true });
		} else {
			this.showAlert('Login failed', 'Please try again!');
		}
	}

	async showAlert(header, message) {
		const alert = await this.alertController.create({
			header,
			message,
			buttons: ['OK']
		});
		await alert.present();
	}
	reg(){
		this.router.navigateByUrl('/register', { replaceUrl: true });
	  }
}

// //login with ionic?
// {
//   success: (obj) => {
//     //success
//   },
//   error: (err) => {
//     //Error
//   }
// }


// login(account) {
// let CBUser = new CB.CloudUser();
// CBUser.set('username', account.username);
// CBUser.set('password', account.password);
// return new Promise((resolve, reject) =>{
//   CBUser.logIn({
//     success: (user) => {
//       //Login successful
//       resolve(user)
//     },
//     error: (error) => {
//       reject(error)
//       //Error in user login.
//     }
//   })
//  })
// }


// this.user.login(this.account).then( user => {
//   //login successful
//   this.navCtrl.push(MainPage);
// }).catch( err => {
//   this.navCtrl.push(MainPage);
//   // Unable to log in
//   let toast = this.toastCtrl.create({
//     message: this.loginErrorString,
//     duration: 3000,
//     position: 'top'
//   });
//   toast.present();
// });


