import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./utils";


const User = () => {

    const user = useSelector((state) => state.userReducer);

    return (
        <div className="user-container">
            <div className="user">
                <h3>
                    {!isEmpty(user) && user.pseudo }
                </h3>
                <p>age:{!isEmpty(user) && user.age}ans</p>
                <p>Likes:{!isEmpty(user) && user.likes}</p>
            </div>
        </div>
    );
};

export default User;