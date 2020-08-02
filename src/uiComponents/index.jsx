import React,{useState,useEffect} from 'react';
import Modal from './modal';
import {connect} from 'react-redux'
import { GetUsersData, GetActivity } from '../actions';


function MainComponent(props) {
    const [userList,setUserList]=useState()
    const [selectedUser,setSelectedUser]=useState()
    const [selectedDate,setDate]=useState()

    useEffect(()=>{
        props.dispatch(GetUsersData())
    })

    let usersData=props.usersData
    useEffect(()=>{
        if(usersData){
            let userListArray=[];
            usersData.map((obj,key)=>{
                userListArray.push(<span key={key} className="App-link" onClick={()=>{setSelectedUser(obj); props.dispatch({ type:"GOT_ACTIVITY_DATA", payload: obj.activity_periods }) }}>{obj.real_name}</span>)
                return obj
            })
            setUserList(userListArray)
        }
    },[usersData,props])

    function closeModal(){
        setSelectedUser(null)
    }

    function onDateChange(e){
        setDate(e.target.value)
        let params={};
        params.id=selectedUser&&selectedUser.id
        params.date=e.target.value
        props.dispatch(GetActivity(params))
    }

    return(
        <>
            <div className="">
                <span className="heading">Full Throttle Labs </span>
            </div>
            <div className="body">
                <p className="label"> List of Users </p> 
                {userList}
            </div>
            {selectedUser && 
                <Modal 
                    selectedUser={selectedUser}
                    closeModal={()=>closeModal()}
                    selectedDate={selectedDate}
                    onDateChange={(e)=>onDateChange(e)}
                    periods={props.periods||[]}
                />
            }
        </>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {dispatch:dispatch }
}

const mapStateToProps = (state,props)=>{
    return {
        usersData: state.reducer.usersData,
        periods: state.reducer.periods
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)

 