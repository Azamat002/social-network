import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        // newPostElement.current.value = ''
        props.updateNewPostText('')
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (<div className={s.postsBlock}>
        <div>
            <textarea ref={newPostElement} placeholder=''></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
        <div className='posts'>
            {postsElements}
            {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
            {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
            {/*<Post message={posts[2].message} likesCount={posts[2].likesCount}/>*/}
        </div>

    </div>)
}
export default MyPosts;