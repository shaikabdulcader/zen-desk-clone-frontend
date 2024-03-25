import React from "react";
import { useNavigate } from 'react-router-dom';
function Banner() {
    const navigate = useNavigate()
    const createTicket = ()=>{
        navigate('/create')
    }
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">ZENDESK <br /> SUPPORT</h1>
        <button className="home-btn" onClick={createTicket}>Create Ticket</button>
      </div>
    </div>
  );
}

export default Banner;
