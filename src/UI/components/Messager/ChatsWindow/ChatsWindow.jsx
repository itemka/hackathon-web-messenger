import React from 'react';
import css from './ChatsWindow.module.css';
import MessagesWindow from "./MessagesWindow/MessagesWindow";
import {FormSend} from "./FormSend/FormSend";

class ChatsWindow extends React.Component {
    state = {
        messageArray: [
            {
                chatId: 1, authorId: 4, isRead: false, data: `lkjnbhnkjn`,
                status: `deletedForSender` | `deleteForRecipient` | `deleteForAll`,
            },
            {
                chatId: 1, authorId: 4, isRead: false, data: `asgasgasfgsafgsa`,
                status: `deletedForSender` | `deleteForRecipient` | `deleteForAll`,
            },
        ]
    };


    addNewMessage = (newMessageText) => {
        console.log(this.state.messageArray);
        this.setState({
            messageArray: [...this.state.messageArray, {
                chatId: 1, authorId: 4, isRead: false, data: newMessageText,
                status: `deletedForSender` | `deleteForRecipient` | `deleteForAll`,
            }]
        })
    };

    render() {
        return (
            <div>
                <div className={css.MessagesWindow}>
                    <MessagesWindow messageArray={this.state.messageArray}/>
                </div>
                <div className={css.FormSend}>
                    <FormSend addNewMessage={this.addNewMessage.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default ChatsWindow;