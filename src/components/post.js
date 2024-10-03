import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./utils"; 
import Like from "./like"

const Post = ({ post }) => {
    const [editToggle, setEditToggle] = useState(false);
    const user=useSelector((state)=>state.userReducer)

    return (
        <div classname="post">
            {!isEmpty(user) && user.pseudo===post.author }
            <div classname="edit-delete">
                <img
                    src="./icons/edit.svg"
                    alt="edit"
                    onClick={()=>setEditToggle(!editToggle) }
                />
                <h2>{post.title}</h2>

            </div>
        </div>
    )
}

export default Post