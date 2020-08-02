var intialState = {
};
    
export default function reducer(state=intialState,action){
    switch (action.type) {
        case 'GOT_USERS_DATA':
            return {...state, usersData: action.payload }
        case 'GOT_ACTIVITY_DATA':
            return {...state, periods: action.payload }
        default: 
        	break;
    }
    return state
}



