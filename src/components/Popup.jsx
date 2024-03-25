import React, { useState }  from "react";
function Popup(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    return(
        <div className="popup-container">
            <button onClick={handleClickOpen} className="popup-btn">Demo Account</button>
            <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1 className="pop-head"></h1>
                                <h1 onClick={closePopup} className="close-popup">❌</h1>
                            </div>
                            <div>
                            <h2>email: <span>admin@gmail.com</span></h2>
                            <h2>password: <span>admin1@55555</span></h2><br />
                            <h2>email: <span>admin2@gmail.com</span></h2>
                            <h2>password: <span>admin2@101010</span></h2>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default Popup;