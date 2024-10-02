import axios from "axios";

export const getPosts = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/posts").then((res) => {
            console.log(res);
        })
    }
}