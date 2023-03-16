import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import CatalogModal from '../../Components/catalogModalWindow/CatalogModal';
import {searchProduct} from "../../redux/reducer/products";


import './Header.scss'
import './Header-media.scss'

const Header = () => {

    const [catalog, setCatalog] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    const {user} = useSelector((state) => state.users)
    const {filter} = useSelector(stata=>stata.products)
    const dispatch = useDispatch()
    const {data} =useSelector(state=>state.cart)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className='header'>
            <div className="container">
                <div className="header__menu">
                    <div className="header__logo">
                        <Link to={'/'}>
                            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.6689 16.819H4.28623C3.62872 16.819 3.09179 17.3764 3.15209 18.0343C3.84119 25.8488 11.1112 31.9999 19.9776 31.9999C28.844 31.9999 36.1139 25.8517 36.803 18.0343C36.8605 17.3764 36.3264 16.819 35.6689 16.819Z" fill="#FF6633" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.225147 3.33137C1.7887 1.27854 4.60645 0 7.711 0C10.8155 0 13.6333 1.27854 15.1969 3.33137C15.5659 3.81589 15.4714 4.50716 14.9858 4.87537C14.5001 5.24357 13.8073 5.14928 13.4383 4.66476C12.3661 3.25707 10.2569 2.20377 7.711 2.20377C5.16509 2.20377 3.05591 3.25707 1.98374 4.66476C1.6147 5.14928 0.921857 5.24357 0.436236 4.87537C-0.0493858 4.50716 -0.143894 3.81589 0.225147 3.33137Z" fill="#414141" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7671 3.33137C26.3307 1.27854 29.1484 0 32.253 0C35.3552 0 38.1721 1.27884 39.7381 3.33045C40.1077 3.81458 40.0139 4.50596 39.5287 4.87467C39.0434 5.24338 38.3505 5.14981 37.981 4.66568C36.9055 3.25676 34.7955 2.20377 32.253 2.20377C29.7071 2.20377 27.5979 3.25707 26.5257 4.66476C26.1567 5.14928 25.4638 5.24357 24.9782 4.87537C24.4926 4.50716 24.3981 3.81589 24.7671 3.33137Z" fill="#414141" />
                            </svg>
                            <p>Северяночка</p>
                        </Link>

                    </div>
                    <div className="header__search">
                        <div onClick={() => setCatalog(!catalog)} className='catalogBtnBox'>
                            <MenuIcon />
                            <button className='catalogBtn'>Каталог</button>
                        </div>
                        <label htmlFor="">
                            <input onChange={(e)=>dispatch(searchProduct(e.target.value))} type='search'  placeholder={'Найти товар'} />
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z" fill="#414141" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4465 15.4464C15.6418 15.2512 15.9583 15.2512 16.1536 15.4464L21.3536 20.6464C21.5489 20.8417 21.5489 21.1583 21.3536 21.3535C21.1583 21.5488 20.8418 21.5488 20.6465 21.3535L15.4465 16.1535C15.2512 15.9583 15.2512 15.6417 15.4465 15.4464Z" fill="#414141" />
                            </svg>
                        </label>


                    </div>
                    <div className="header__icons">
                        <ul>
                            <li>
                                <Link to='/favourite'>
                                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2046 2.25644C13.3299 1.13067 14.8564 0.498169 16.4482 0.498169C18.0399 0.498169 19.5664 1.13063 20.6916 2.25636C21.8174 3.38164 22.45 4.90829 22.45 6.49999C22.45 8.09174 21.8175 9.61826 20.6917 10.7435C20.6917 10.7436 20.6917 10.7435 20.6917 10.7435L11.8517 19.5835C11.6565 19.7788 11.3399 19.7788 11.1446 19.5835L2.30461 10.7435C-0.0390375 8.3999 -0.0390373 4.60009 2.30461 2.25644C4.64826 -0.0872086 8.44807 -0.0872087 10.7917 2.25644L11.4982 2.96289L12.2046 2.25644C12.2046 2.25641 12.2046 2.25647 12.2046 2.25644ZM16.4482 1.49817C15.1217 1.49817 13.8496 2.02528 12.9118 2.96346L11.8517 4.02355C11.758 4.11732 11.6308 4.16999 11.4982 4.16999C11.3656 4.16999 11.2384 4.11732 11.1446 4.02355L10.0846 2.96355C8.13149 1.01042 4.96484 1.01042 3.01172 2.96355C1.05859 4.91667 1.05859 8.08332 3.01172 10.0364L11.4982 18.5229L19.9846 10.0364C20.9228 9.09869 21.45 7.82648 21.45 6.49999C21.45 5.17351 20.9229 3.90138 19.9847 2.96363C19.0469 2.02544 17.7747 1.49817 16.4482 1.49817Z" fill="#414141" />
                                </svg>
                                Избранное
                                </Link>
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3325 1.89779C11.3324 1.89788 11.3327 1.8977 11.3325 1.89779L3.33366 5.89724L3.33255 5.89779C2.82288 6.15105 2.50045 6.67092 2.50005 7.24003V16.7635C2.49608 17.3334 2.81541 17.8563 3.32416 18.1131C3.32387 18.1129 3.32445 18.1132 3.32416 18.1131L11.3237 22.1128C11.7462 22.3242 12.2438 22.3243 12.6663 22.1129L20.6664 18.1128L20.6675 18.1123C21.1773 17.859 21.4997 17.339 21.5 16.7698V7.24029C21.4997 6.67109 21.1773 6.15109 20.6675 5.89779L20.6664 5.89724L12.6675 1.89779C12.6674 1.8977 12.6677 1.89789 12.6675 1.89779C12.2474 1.68923 11.7527 1.68922 11.3325 1.89779ZM10.8875 1.00226C11.5883 0.654031 12.4118 0.654031 13.1125 1.00226L13.1137 1.00281L21.1125 5.00226C21.1124 5.00218 21.1127 5.00234 21.1125 5.00226C21.9618 5.42451 22.4995 6.29126 22.5 7.23976V16.77C22.4995 17.7185 21.9624 18.5852 21.1132 19.0075C21.113 19.0076 21.1134 19.0074 21.1132 19.0075L13.1138 23.0072C13.1138 23.0072 13.1138 23.0071 13.1138 23.0072C12.4097 23.3595 11.5806 23.3595 10.8764 23.0072C10.8764 23.0072 10.8765 23.0073 10.8764 23.0072L2.87644 19.0072L2.87506 19.0065C2.02685 18.5792 1.49413 17.7081 1.50005 16.7584V7.24003C1.50055 6.29157 2.03772 5.42483 2.88695 5.00256C2.88675 5.00266 2.88715 5.00246 2.88695 5.00256L10.8864 1.00281L10.8875 1.00226Z" fill="#414141" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.87272 5.93641C1.99621 5.68943 2.29655 5.58931 2.54354 5.71281L11.9999 10.441L21.4563 5.71281C21.7033 5.58931 22.0037 5.68943 22.1271 5.93641C22.2506 6.1834 22.1505 6.48374 21.9035 6.60724L12.2235 11.4472C12.0828 11.5176 11.9171 11.5176 11.7763 11.4472L2.09633 6.60724C1.84934 6.48374 1.74923 6.1834 1.87272 5.93641Z" fill="#414141" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V22.76C12.5 23.0361 12.2761 23.26 12 23.26C11.7239 23.26 11.5 23.0361 11.5 22.76V11C11.5 10.7239 11.7239 10.5 12 10.5Z" fill="#414141" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5529 3.27638C6.67639 3.02939 6.97673 2.92928 7.22372 3.05277L17.2237 8.05277C17.4707 8.17627 17.5708 8.4766 17.4473 8.72359C17.3238 8.97058 17.0235 9.0707 16.7765 8.9472L6.7765 3.9472C6.52951 3.82371 6.4294 3.52337 6.5529 3.27638Z" fill="#414141" />
                                </svg>
                                Заказы
                            </li>
                            <li>
                                <Link to='/basket'>
                                    <div className="header__count">
                        
                                   
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 21C6 19.6193 7.11929 18.5 8.5 18.5C9.88071 18.5 11 19.6193 11 21C11 22.3807 9.88071 23.5 8.5 23.5C7.11929 23.5 6 22.3807 6 21ZM8.5 19.5C7.67157 19.5 7 20.1716 7 21C7 21.8284 7.67157 22.5 8.5 22.5C9.32843 22.5 10 21.8284 10 21C10 20.1716 9.32843 19.5 8.5 19.5Z" fill="#414141" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 21C18 19.6193 19.1193 18.5 20.5 18.5C21.8807 18.5 23 19.6193 23 21C23 22.3807 21.8807 23.5 20.5 23.5C19.1193 23.5 18 22.3807 18 21ZM20.5 19.5C19.6716 19.5 19 20.1716 19 21C19 21.8284 19.6716 22.5 20.5 22.5C21.3284 22.5 22 21.8284 22 21C22 20.1716 21.3284 19.5 20.5 19.5Z" fill="#414141" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.5C1.22386 0.5 1 0.723858 1 1C1 1.27614 1.22386 1.5 1.5 1.5H5.08051C5.83783 5.79147 6.60333 10.0643 7.24931 14.3709C7.43288 15.5947 8.48416 16.5 9.72165 16.5H19.8597C21.0514 16.5 22.0774 15.6588 22.3111 14.4903L23.7503 7.29417C23.936 6.36599 23.226 5.5 22.2795 5.5H7.66046C7.3575 5.5 7.07797 5.58901 6.84436 5.74093L5.99239 0.913107C5.95023 0.674179 5.74262 0.5 5.5 0.5H1.5ZM7.166 7.07417C7.12065 6.77187 7.35478 6.5 7.66046 6.5H22.2795C22.595 6.5 22.8316 6.78866 22.7698 7.09806L21.3305 14.2942C21.1903 14.9953 20.5747 15.5 19.8597 15.5H9.72165C8.97916 15.5 8.34839 14.9568 8.23825 14.2225L7.166 7.07417Z" fill="#414141" />
                                </svg>

                                {data.length}
                                </div>
                                Корзина
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="header__auth">

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {user == null ? 'singin/regiter' : user.login}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}><Link to="/register">Register</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>

                        </div>

                        

                    </div>


                </div>
            </div>

            {
                catalog && <CatalogModal />
            }
        </header>
    );
};






export default Header;
