import React, { useContext } from 'react';

import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../Providers/ThemeProvider';

const Header = () => {
    const { setLightMode, lightMode } = useContext(ThemeContext);
    return (
        <>
            <div className="controls">
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "control active-btn" : "control"
                }>
                    <i className="fas fa-home"></i>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? "control active-btn" : "control"
                }>
                    <i className="fas fa-user"></i>
                </NavLink>
                <NavLink to="/portfolio" className={({ isActive }) =>
                    isActive ? "control active-btn" : "control"
                }>
                    <i className="fas fa-briefcase"></i>
                </NavLink>
                <NavLink to="/contacts" className={({ isActive }) =>
                    isActive ? "control active-btn" : "control"
                }>
                    <i className="fas fa-envelope-open"></i>
                </NavLink>
            </div>
            <div onClick={() => setLightMode && setLightMode(!lightMode)} className="theme-btn">
                <i className="fas fa-adjust"></i>
            </div>
        </>
    );
};

export default Header;