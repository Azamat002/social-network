import {rerenderEntireTree} from './../render'
let state = {
    profilePage: {
        posts: [
            {id: 1, message: "I don't know", likesCount: 10},
            {id: 2, message: "That is a new", likesCount: 15},
            {id: 3, message: "Interesting post", likesCount: 20}
        ], newPostText: 'it-kamadze-axa'

    },
    dialogsPage: {
        dialogs: [{id: 1, name: "Dymish"}, {id: 2, name: "Victor"}, {id: 3, name: "Sveta"}, {
            id: 4,
            name: "Sasha"
        }, {id: 5, name: "Viktor"}, {id: 6, name: "Valera"}],
        messages: [{id: 1, message: "Hi!"}, {id: 2, message: "What's up!"}, {id: 3, message: "Starts soon"}, {
            id: 4,
            message: "Ends soon"
        }]
    },
    sideBar:{
        friends:[{id: 1, name: "Dymish"}, {id: 2, name: "Victor"}, {id: 3, name: "Sveta"}]
    }
}

window.state = state
export let addPost = (postMessage)=> {
    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPost = (newText)=> {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;