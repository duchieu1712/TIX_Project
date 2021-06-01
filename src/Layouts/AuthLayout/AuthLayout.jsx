import React from 'react';
import './AuthLayout.scss';
const AuthLayout = (props) => {
    return (
        <div className="backGroundAuth">
            {props.children}
        </div>
    );
}

export default AuthLayout;
