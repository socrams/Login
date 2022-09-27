import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private auth: Auth) {}

	async register({ email, password }) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}
	// login ({email,password}){
	// 	const user = signInWithEmailAndPassword(this.auth,email,password).then();
	// }
	 async login({ email, password }) {
	 	try {
	 		const user = await signInWithEmailAndPassword(this.auth, email, password);
	 		return user;
	 	} catch (e) {
	 		return null;
	 	}
	 }

	logout() {
		return signOut(this.auth);
	}
}
