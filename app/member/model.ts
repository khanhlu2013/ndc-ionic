export class Member {
	constructor(
        private _id: string,		
		private _first_name: string,
        private _last_name: string,
        private _ndc_old_id: string,
        private _create_date: Date,
        private _phone: string,
        private _email: string
	) {

	}

	get first_name() { return this._first_name; }
	get last_name() { return this._last_name; }
	get full_name() { return this._first_name + ' ' + this._last_name; }
	get ndc_old_id() { return this._ndc_old_id; }
	get phone() { return this._phone; }
	get email() { return this._email; }



	static build(json): Member {
		return new Member(
			json.id,
			json.first_name,
			json.last_name,
			json.ndc_old_id,
			json.create_date,
			json.phone,
			json.email
		)
	}
}