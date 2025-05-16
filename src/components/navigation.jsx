import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo/logo.svg";
import Topkids from "../assets/Logo/topkids.jpg";
import '../styles/scss/navigation.scss';

function Navigation() {
    return (
        <>
            
            <nav className="navigation">
                <div className="navigation__container">
                    <ul className="navigation__list">
                        <li className="navigation__logo">
                          <img src={Logo} alt="" />
                          <h1>børnelejren på langeland</h1>
                        </li>
                        <li className="navigation__item">
                            <NavLink
                                to='/'
                                className="navigation__link"
                                style={({ isActive }) => ({ color: isActive ? 'lightgray' : '#ffffff',
                                    borderBottom: isActive ? '2px solid lightgray' : 'none'
                                 })}
                                
                            >
                                Forside
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink
                                to='/om-os'
                                className="navigation__link"
                                style={({ isActive }) => ({ color: isActive ? 'lightgray' : '#ffffff',
                                    borderBottom: isActive ? '2px solid lightgray' : 'none' })}
                            >
                                Om os
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink
                                to='/tilmeld-sponsor'
                                className="navigation__link"
                                style={({ isActive }) => ({ color: isActive ? 'lightgray' : '#ffffff',
                                    borderBottom: isActive ? '2px solid lightgray' : 'none' })}
                            >
                                Tilmeld som sponsor
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink
                                to='/tak'
                                className="navigation__link"
                                style={({ isActive }) => ({ color: isActive ? 'lightgray' : '#ffffff',
                                    borderBottom: isActive ? '2px solid lightgray' : 'none' })}
                            >
                                Børnelejren takker
                            </NavLink>
                        </li>
                    </ul>
                    <div className="underLogo">
                        <img src={Topkids} alt="" />
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default Navigation;