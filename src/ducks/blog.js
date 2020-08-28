import { createAction, handleActions } from "redux-actions";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";


export const setBlog = createAction('blog/SET_BLOG');

const initialBlogState = {
    title:'title',
    abstract: 'abstract',
    heroImage: "https://i.imgur.com/Fyji2AK.jpeg",
    entry:[
        {
            title: 'Entry',
            date: 'Entry Date',
            description: ['Description'],
            img: ['img'],
        }
    ]
};

export default handleActions({
    [setBlog]: (state, action) => state = action.payload,
}, initialBlogState);

const selectBlog = createSelector(
    state => state.blog,
    blog => blog   
)

export const useBlog = () => useSelector(selectBlog);
