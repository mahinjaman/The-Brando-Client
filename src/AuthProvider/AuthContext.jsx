import React, { createContext } from 'react';
import PropTypes from "prop-types";

export const UserContext = createContext(null)

const AuthContext = ({children}) => {
    const name = "Mahin";
    const info = {
        name : name,
        email: "mahin@gmail.com",
        phone: "01721345678",
        address: "Dhaka, Bangladesh"
    }
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

AuthContext.propTypes = {
    children: PropTypes.node.isRequired
}


export default AuthContext;