import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    // let dialogs = [
    //     {id: 1, name: "Dymish"},
    //     {id: 2, name: "Victor"},
    //     {id: 3, name: "Sveta"},
    //     {id: 4, name: "Sasha"},
    //     {id: 5, name: "Viktor"},
    //     {id: 6, name: "Valera"}
    // ]

    // let messages = [
    //     {id: 1, message: "Hi!"},
    //     {id: 2, message: "What's up!"},
    //     {id: 3, message: "Starts soon"},
    //     {id: 4, message: "Ends soon"}
    // ]

    let dialogElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.state.messages
        .map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>*/}

            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message={messages[0].message}/>*/}
            </div>
        </div>)
}

export default Dialogs;