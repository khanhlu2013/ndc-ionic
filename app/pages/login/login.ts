import {Page, NavController} from 'ionic-angular';
import {Auth} from './../../auth/auth';
import {ViewController} from 'ionic-angular';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  constructor(public nav: NavController,private _auth:Auth, private _viewCtrl:ViewController) {}

  login(){
	  this._auth.login(true).then(
	  	response => {
	  		this._viewCtrl.dismiss();
	  	}
  	);
  }

  close(){
    // this.nav.pop();
    this._viewCtrl.dismiss();
  }

}
