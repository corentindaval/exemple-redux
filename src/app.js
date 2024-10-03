import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/postform";
import User from "./components/user";
import Post from ".components/post";
import { isEmpty } from "./components/utils";

const App = () => {
    const posts = useSelector((state) => state.postReducer);

    return (
        <div>
            <h1>test</h1>
            <PostForm />
            <div className="content">
                <div className="post-content">
                    {! isEmpty(posts) && posts.map((post, index) => <Post post={post} key={index}/>) }
                </div>
                <User />
            </div>
        </div>
    )


}