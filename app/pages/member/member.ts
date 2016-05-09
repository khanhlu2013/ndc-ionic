import { Page, NavController } from 'ionic-angular';
import { MemberDaoService } from './../../member/dao';
import { Member } from './../../member/model';
import { LoginPage } from './../login/login';
import { Modal } from 'ionic-angular';
/*
  Generated class for the MemberPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/member/member.html',
  providers: [MemberDaoService]
})
export class MemberPage {
  	private _members: Member[];
  	constructor(public nav: NavController,public _dao:MemberDaoService) {}
  //   onPageLoaded() {
		// 	this.getMembers();
		// }
    onPageLoaded() {
      // this.nav.push(LoginPage);

      let modal = Modal.create(LoginPage);
      modal.onDismiss(data => {
        console.log('login modal is dismissed');
      });
      this.nav.present(modal);
    }    
		getMembers() {
      this._dao.get_member_lst(this.nav).then(
        members => {
          this._members = members;
          console.log(this.nav);
        }
      )
		}  	
    test(){
      let modal = Modal.create(LoginPage);
      modal.onDismiss(data => {
        console.log('login modal is dismissed');
      });
      this.nav.present(modal);      
    }
}