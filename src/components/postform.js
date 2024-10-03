import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../actions/post.action";


const PostForm = () => {
    const form = useRef();
    const user = useSelector((state) => state.userReducer)
    const dispatch=useDispatch()

    const handleForm = async (e) => {
        e.preventDefault();

        const postData = {
            author: user.pseudo,
            title: form.current[0].value,
            content: form.current[1].value,
            likes:0,
        }

        dispatch(addPost(postData))
        form.current.reset();
    }

    return (
        <div classname="form-container">
            <form ref={form} onSubmit={e=>handleForm(e) }>
                <input type="text" placeholder="titre" />
                <textarea placeholder="poster vos penser" />
            <input type="submit" value="envoyer"/>
            </form>

        </div>
    )
}

export default PostForm