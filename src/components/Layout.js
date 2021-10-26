import React from 'react';
import Navbar from './Navbar';
import "../style/global.css"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar />
                <div className="content">
                    {children}
                </div>
           
            <footer>
                <p>Copyright 2021 Jessie's Web</p>
            </footer>
        
        </div>
    );
}

export default Layout;
