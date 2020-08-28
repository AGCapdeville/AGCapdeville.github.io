import { createAction, handleActions } from "redux-actions";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";


export const setBlog = createAction('blog/SET_BLOG');

const initialBlogState = {
    title:'Capstone Dev Blog',
    abstract: 'Slay The Tower is a dynamic deck building video game developed in React / Redux to create a sleek and unique user experience. The world of the game is set around a legendary tower. There are those who live peacefully outside the tower, and the brave few who choose to climb and reside within. Legend states that the one who makes it to the top of the Tower is granted anything they desire.The user starts the game by selecting a hero’s weapon (deck) to begin their arduous climb. Every floor of the tower is its own pocket dimension, with some expanding the size of the outside world. As the hero progresses, they must balance risk and reward. Defeating enemies grants gold and cards, but choosing to fight dire foes has the possibility to grant even greater reward. Players must choose cards wisely, as the core of the game is deck building emphasizing on card synergy. Mythical relics of power can be acquired from Trials of the Tower, however with the chance for great reward, comes greater risk. With every attempt on the Tower, the player will learn of different strategies and outcomes. My project aims to develop a complex game, all while learning through implementation. ',
    heroImage: "https://i.imgur.com/VhZypLr.jpg",
    entry:[
        {
            title: 'Setup Dev Blog & Narrowing Of Project Scope',
            date: 'August 28, 2020',
            description: ['Initiated this development blog as well as began reviewing feedback given by my capstone advisor, Profesor Erik Kaltman.'],
            img: [''],
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
