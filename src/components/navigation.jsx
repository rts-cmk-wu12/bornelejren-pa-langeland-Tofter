import { NavLink } from "react-router-dom";
import '../styles/navigation.scss';

function Navigation() {
    return (
        <>
            
            <nav className="navigation">
                <div className="navigation__container">
                    <ul className="navigation__list">
                        <div className="navigation__logo">
                          <img src="/src/assets/Logo/logo.png" alt="" />
                          <h1>børnelejren på langeland</h1>  
                        </div>
                        <li className="navigation__item">
                            <NavLink
                                to='/'
                                className="navigation__link"
                                style={({ isActive }) => ({ color: isActive ? '#5754a8' : 'red' })}
                            >
                                Forside
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink
                                to='/om-os'
                                className="navigation__link"
                                style={({ isActive }) => ({ color: isActive ? '#5754a8' : 'red' })}
                            >
                                Om os
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink
                                to='/tilmeld-sponsor'
                                className="navigation__link"
                                style={({ isActive }) => ({ color: isActive ? '#5754a8' : 'red' })}
                            >
                                Tilmeld som sponsor
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink
                                to='/tak'
                                className="navigation__link"
                                style={({ isActive }) => ({ color: isActive ? '#5754a8' : 'red' })}
                            >
                                Børnelejren takker
                            </NavLink>
                        </li>
                    </ul>
                    <div className="underLogo">
                        <img src="/src/assets/Logo/topkids.jpg" alt="" />
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default Navigation;