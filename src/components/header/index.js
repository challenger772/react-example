import React from 'react';
import './style.css';
import avatar from '../asset/download.jpg';
import { GoThreeBars } from 'react-icons/go';



class Header extends React.Component{
    render(){return(
        <div className="Header">
            <div className="avatar">
                <img src={avatar} alt="avatar" className="avatar" />
                
            </div>
            <div>
                <p>Jonny</p>
                <p>Jonny is a fullstack developer</p>
            </div>
        </div>
        )}
        
            
        
    
}

export default Header;