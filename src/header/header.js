import React, {Component} from 'react';
import wrench from './imgs/mainImage.png'
import './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <hr />
                        <p className = 'deleteMenue'>
                            خانه / تماس با ما / پیگیری سفارشات
                        </p>

                        <p className = 'headerText'>
                        فروشگاه اینترنتی 
                        <span className = 'fadeAnimated abzarText'>
                        ابزار
                        </span>
                        </p>

                        <img className = 'mainImage fadeAnimated' src = {wrench} />                
                    <hr />
                </header>
            </div>
        )
    }
}

export default Header;