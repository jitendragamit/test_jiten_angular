export class Users {
	public Id: number;
	public username: string;
	public pwd:string;
	//public email:string;
	public nickname:string;
	public user_type:string;

	constructor(Id:number,username:string, pwd:string, nickname:string, user_type:string,) {
		this.Id = Id;
		this.username = username;
		this.nickname = nickname;
		this.pwd = pwd;
		this.user_type = user_type;
		//this.email = email;
		
	}
}