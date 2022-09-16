import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider} from '@angular/fire/auth'
import { User } from 'src/app/shared/user';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = {
   email: ''
  }

  public loginStateSource = new BehaviorSubject<boolean>(!this.checkLS());

  constructor(private fireAuth: AngularFireAuth) { }

    async login(email: string, password: string) {
    const res = await this.fireAuth.signInWithEmailAndPassword(email, password);
    if (res.user?.uid && res.user?.email) {
      this.setUserData(res.user?.email);
    }
    return res;
  }

  getCurrentUser(): User {
    let lsData = localStorage.getItem('userInfo');
    if (lsData !== null) {
      const userData = JSON.parse(lsData);
      return userData;
    }
    return {email: ''};
  }

  async register(email: string, password:string) {
    const res = await this.fireAuth.createUserWithEmailAndPassword(email, password);
    if (res.user?.uid && res.user?.email) {
      this.setUserData(res.user?.email);
    }
    return res;
  }

  async logout(): Promise<void> {
    await this.fireAuth.signOut();
    localStorage.removeItem('userInfo');
    this.loginStateSource.next(true);
  }

  async googleSignIn() {
    const res = await this.fireAuth.signInWithPopup(new GoogleAuthProvider);
    if (res.user?.uid && res.user?.displayName) {
      this.setUserData(res.user?.displayName);
    }
    return res;
  }

  async signInFacebook() {
    const res = await this.fireAuth.signInWithPopup(new FacebookAuthProvider);
    if (res.user?.uid && res.user?.displayName) {
      this.setUserData(res.user?.displayName);
    }
    return res;
  }

  async signInGithub() {
    const res = await this.fireAuth.signInWithPopup(new GithubAuthProvider);
    if (res.user?.uid && res.user?.displayName) {
      this.setUserData(res.user?.displayName);
    }
    return res;
  }

  checkLS(): boolean {
    if (localStorage.getItem('userInfo')) {
      return true;
    }
    return false;
  }

  setUserData(email: string): void {
    this.user.email = email;
    localStorage.setItem('userInfo', JSON.stringify(this.user));
    this.loginStateSource.next(false);
  }

  handleError(err: any): string {
    let errorCode = err.code;
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'The password is invalid';
      case 'auth/user-not-found':
        return 'The user with this email was not found.';
      case 'auth/too-many-requests':
        return 'Access to this account has been temporarily disabled due to many failed login attempts.';
      case 'auth/email-already-in-use':
        return 'The email address is already in use by another account';
      case 'auth/account-exists-with-different-credential':
        return 'An account already exists with the same email address';
      case 'auth/popup-closed-by-user':
        return '';
      default:
        return `Unknown error: ${errorCode}`;
    }
  }
}
