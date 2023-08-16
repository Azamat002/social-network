import s from './ProfileInfo.module.css';
const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://learnopencv.com/wp-content/uploads/2021/04/image-15.png'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava+desc</div>
        </div>
    )
}

export default ProfileInfo;