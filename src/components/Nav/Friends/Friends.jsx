import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={s.list}>
            <div>
                name: {props.name}
            </div>

        </div>
    )
}
export default Friends;