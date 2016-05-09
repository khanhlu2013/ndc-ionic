import { Injectable } from 'angular2/core';
import { Member } from './model';
import { Response, Headers, RequestOptions } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import { AuthHttp } from './../angular2-jwt';
import { NavController } from 'ionic-angular';

@Injectable()
export class MemberDaoService {
	private member_lst_url = 'http://127.0.0.1:8000/member_api/members/';
	constructor(private _http: AuthHttp) {

	}
	get_member_lst(nav: NavController) {
		this._http.setNav(nav);
		return this._http.get(this.member_lst_url)
			.map(res => <Member[]>res.json().map(Member.build))
			.toPromise();
	}
}