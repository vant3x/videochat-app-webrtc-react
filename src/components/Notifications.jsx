import { useContext, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";

import { SocketContext } from "../context/SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const audioCall = useRef();

 useEffect(() => {
  if (call.isReceivingCall && !callAccepted)  {
    /* audioCall  = new Audio('./assets/sounds/alert_on_call.mp3');
     audioCall.play();*/
     audioCall.current.play();
     console.log(call);  
     console.log(audioCall);  
    } 
 }, [call]);

 console.log(audioCall)

  useEffect(() => {
    if (callAccepted) {
    }
  }, [callAccepted]);




  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={() => {
            answerCall();
            audioCall.current.pause();
          }}>
            Contestar{" "}
          </Button>
          <Button variant="contained" color="secondary" onClick={() => {
            audioCall.current.pause();
          }}>
            Rechazar{" "}
          </Button>
          <audio controls preload={true} loop  ref={audioCall} src="./assets/sounds/alert_on_call.mp3"/>
        </div>
      )}
    </>
  );
};

export default Notifications;
