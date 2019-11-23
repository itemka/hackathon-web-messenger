import React from 'react';
import css from './ChatsWindow.module.css';
import MessagesWindow from "./MessagesWindow/MessagesWindow";
import {FormSend} from "./FormSend/FormSend";

const ChatsWindow = (props) => {
    let state = {
        messageArray: props.messagesArray,
        // {chatId: 1, authorId: 4, isRead: false, data: `lkjnbhnkjn`,status: `deletedForSender` | `deleteForRecipient` | `deleteForAll`,},
    };
    // addNewMessage = (newMessageText) => {
    //     console.log(this.state.messageArray);
    //     this.setState({
    //         messageArray: [...this.state.messageArray, {
    //             chatId: 1, authorId: 4, isRead: false, data: newMessageText,
    //             status: `deletedForSender` | `deleteForRecipient` | `deleteForAll`,
    //         }]
    //     })
    // };

    // console.log(`----------`)
    // console.log(state.messageArray)
    return (
        <div>
            <div className={css.MessagesWindow}>
                <MessagesWindow messageArray={state.messageArray}/>
            </div>
            <div className={css.FormSend}>
                <FormSend sendMessage={props.sendMessage}
                          interlocutorIdAfterClickOnChat={props.interlocutorIdAfterClickOnChat}/>
            </div>
        </div>
    )

}

export default ChatsWindow;