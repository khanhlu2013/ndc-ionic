import {Page} from 'ionic-angular';
import {AboutPage} from './../about/about';
import {NavController} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';
import {MemberPage} from './../member/member';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [PeopleService]
})
export class HomePage {
	public name;
	public people: any;
	aboutPage = AboutPage;
	constructor(private _nav: NavController, public peopleService: PeopleService) {
	  this.name = 'Khanh Tran';
	  this.loadPeople();
  }

  goToAboutPage(){
	  this._nav.push(AboutPage);
  }

  goToMemberPage(){
	  this._nav.push(MemberPage);
  }

  loadPeople() {
	  this.peopleService.load()
		  .then(data => {
			  this.people = data;
		  });
  }
}
