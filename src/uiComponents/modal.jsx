import React,{useEffect,useState} from 'react';

function Modal(props) {

    const [periodData,setPeriodData]=useState()
    let periods=props.periods
    useEffect(()=>{
        let periodData=[]
        if(periods){
            periods.map((obj,key)=>{
                periodData.push(
                    <tr key={key}>
                        <th>{key+1}</th>
                        <th>{obj.start_time}</th>
                        <th>{obj.end_time}</th>
                    </tr>
                )
                return obj;
            })
        }
        setPeriodData(periodData)
    },[periods])

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={()=>{props.closeModal()}}>&times;</span>
                    <h2>{props.selectedUser && props.selectedUser.real_name}</h2>
                </div>
                <div className="modal-body">
                    <input 
                        type="date"
                        onChange={(e)=>{props.onDateChange(e)}}
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Peroid No</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {periodData}
                        </tbody>
                    </table>
                </div>
          </div>
        </div>
    );
}

export default Modal;



 