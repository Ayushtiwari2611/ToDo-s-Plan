function Plan(props){
    return<>
    <li className=" my-2 col-sm-9">{props.value}</li>
    <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>{props.sendData(props.id)}}>×</button>
    </>
}

export default Plan;