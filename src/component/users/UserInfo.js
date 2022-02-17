import React from 'react';
import { useParams } from 'react-router-dom';

function UserInfo(props) {

    let params = useParams();   
    window.onload = ()=>props.getParam(params.login);
    
    return (
        <div></div>
    )
}

export default UserInfo