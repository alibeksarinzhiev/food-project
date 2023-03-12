import React from 'react';
import {Link} from 'react-router-dom'
import './footer.scss'
import logo from './img/logo.svg'
import { AiOutlineInstagram} from  'react-icons/ai'
import {SlSocialVkontakte} from   'react-icons/sl'
import {BsFacebook} from 'react-icons/bs'
import {SiOdnoklassniki} from 'react-icons/si'
import {IoMdCall} from 'react-icons/io'

const Footer = () => {
    return (
        <footer id='Footer'>
            <div className="container">
                <div className="footer">
                    <div className="footer--nav">
                        <img src={logo} alt="img"/>
                        <Link>О компании</Link>
                        <Link>Контакты</Link>
                        <Link>Вакансии</Link>
                        <Link>Статьи</Link>
                        <Link>Политика обработки персональных данных</Link>
                    </div>
                    <div className='footer--socialCall'>
                        <div className="footer--socialCall__social">
                            <p className='insta'><AiOutlineInstagram/></p>
                            <p className='vk'><SlSocialVkontakte/></p>
                            <p className='facebook'><BsFacebook/></p>
                            <p className='od'><SiOdnoklassniki/></p>
                        </div>
                        <div className="footer--socialCall__call">
                            <p><IoMdCall/></p>
                            <p>8 800 777 33 33</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;