export class Users {
	public Id: number;
	public username: string;
	public pwd:string;
	public nickname:string;
	public user_type:string;
	public time_taken:string;
	public score:number;

	constructor(Id:number,  
	         username:string, 
			 pwd:string, 
			
 			 nickname:string, 
			 user_type:string, 
	         time_taken:string,
			 score:number
			 ) {
		
		this.Id = Id;
		this.username = username;
		this.nickname = nickname;
		
		this.pwd = pwd;
		this.user_type = user_type;
		this.time_taken = time_taken;
		this.score = score;
	}
}