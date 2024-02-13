import React from 'react'
import ConnectingButton from './ConnectingButton'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const ConnectingButtons = () => {
    let history = useHistory();
    const  pushToJoinRoomPage = ()=>{
        history.push('/join-room')
    }
    const pushToJoinRoomPageAsHost = ()=>{
        history.push('/join-room?host=true')

    }
  return (
    <div className='connecting_buttons_container'>
    <ConnectingButton buttonText='Join a Meeting ' 
    onClickHandler={pushToJoinRoomPage}/>
    <ConnectingButton createRoomButton 
    buttonText='Host a Meeting ' 
    onClickHandler={pushToJoinRoomPageAsHost}/>

    </div>
  )
}

export default ConnectingButtons