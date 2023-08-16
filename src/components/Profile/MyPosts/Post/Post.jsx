import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt='avatar' />
        {props.message}
        <button>{props.likesCount} liked</button>
    </div>

}
export default Post;