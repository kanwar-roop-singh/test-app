import { USER_DATA } from '../data';

export const GetUsersData = (param) =>{
	return(
		dispatch =>{
			let users=[];
			users=USER_DATA.members
			dispatch({type:'GOT_USERS_DATA',payload: users });
		}
	)
}


export const GetActivity = (param) =>{
	return(
		dispatch =>{
			let peroids=[];
			USER_DATA.members && USER_DATA.members.map((obj1)=>{
				if(obj1.id===param.id){

					if(!param.date){
						peroids=obj1.activity_periods;
						return obj1;
					}
					obj1.activity_periods.map((obj2)=>{
						let date=new Date(param.date)
						let startDate=new Date(obj2.start_time)
						let endDate=new Date(obj2.end_time)
						if(date.getFullYear() === startDate.getFullYear() && date.getMonth() === startDate.getMonth() && date.getDate() === startDate.getDate()){
							peroids.push(obj2)
						}
						else if(date.getFullYear() === endDate.getFullYear() && date.getMonth() === endDate.getMonth() && date.getDate() === endDate.getDate()){
							peroids.push(obj2)
						}
						return obj2;
					})
				}
				return obj1;
			})  
			dispatch({type:'GOT_ACTIVITY_DATA',payload: peroids });
		}
	)
}


