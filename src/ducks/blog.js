import { createAction, handleActions } from "redux-actions";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { blogs } from "../data/blogs";

export const setBlog = createAction('blog/SET_BLOG');

const initialBlogState = blogs[0];

export default handleActions({
    [setBlog]: (state, action) => state = action.payload,
}, initialBlogState);

const selectBlog = createSelector(
    state => state.blog,
    blog => blog   
)

export const useBlog = () => useSelector(selectBlog);
