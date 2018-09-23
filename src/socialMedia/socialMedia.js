import React, {Component} from 'react';
import './socialMedia.css';

import telegram from './imgs/telegram.png';
import instagram from './imgs/insta.png';
import facebook from './imgs/facebook.png';
import linkedin from './imgs/linkedin.png';
import phone from './imgs/phone.png';

class SocialMedia extends Component {
    render() {
        return (
            <div className = 'container'>

                <div className = 'left'>
                    <img className = 'logo' src = {telegram} />
                    <img className = 'logo' src = {instagram} />
                    <img className = 'logo' src = {facebook} />
                    <img className = 'logo' src = {linkedin} />
                </div>

                <div className = 'right'>
                    <span>۰۹۱۲ ۳۲۴ ۲۳ ۵۵ </span>
                    <img className = 'logo' src = {phone} />
                </div>
                
            </div>          
        )
    }
}

export default SocialMedia;
