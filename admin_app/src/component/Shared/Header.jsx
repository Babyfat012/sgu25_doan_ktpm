import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logoicon from '../Image/logo-icon.png'
import Logotext from '../Image/logo-text.png'
import Logolight from '../Image/logo-light-text.png'
import { AuthContext } from '../context/Auth'

function Header(props) {
    const { jwt, user, logOut } = useContext(AuthContext);
    return (
        <div>
            {
                jwt && user ?
                    (<header className="topbar" data-navbarbg="skin6" style={{position: 'fixed', top: 0, width: '100%', zIndex: 1030, height: '70px'}}>
                        <nav className="navbar top-navbar navbar-expand-md" style={{height: '100%'}}>
                            <div className="navbar-header" data-logobg="skin6" style={{position: 'relative', zIndex: 1040, height: '70px', display: 'flex', alignItems: 'center', minWidth: '250px'}}>
                                <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="#"><i
                                    className="ti-menu ti-close"></i></a>
                                <div className="navbar-brand" style={{display: 'flex', alignItems: 'center', padding: '0 15px', height: '100%'}}>
                                    <Link to="/user" style={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
                                        <b className="logo-icon" style={{marginRight: '10px', display: 'flex', alignItems: 'center'}}>
                                            <img src={Logoicon} alt="homepage" className="dark-logo" style={{height: '35px', width: 'auto', maxWidth: '35px'}} />
                                            <img src={Logoicon} alt="homepage" className="light-logo" style={{height: '35px', width: 'auto', maxWidth: '35px'}} />
                                        </b>
                                        <span className="logo-text" style={{display: 'flex', alignItems: 'center'}}>
                                            <img src={Logotext} alt="homepage" className="dark-logo" style={{height: '28px', width: 'auto', maxWidth: '120px'}} />
                                            <img src={Logolight} className="light-logo" alt="homepage" style={{height: '28px', width: 'auto', maxWidth: '120px'}} />
                                        </span>
                                    </Link>
                                </div>
                                <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="#"
                                    data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
                                        className="ti-more"></i></a>
                            </div>
                            <div className="navbar-collapse collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i data-feather="settings" className="svg-icon"></i>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="navbar-nav float-right">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <span className="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span
                                                className="text-dark">{user ? user.fullname : ""}</span> <i data-feather="chevron-down"
                                                    className="svg-icon"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                            <button className="dropdown-item" onClick={() => { logOut() }}><i data-feather="power"
                                                className="svg-icon mr-2 ml-1"></i>
                                                Logout
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>) :
                    (
                        <div></div>
                    )}
        </div>

    );
}

export default Header;