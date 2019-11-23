import React from 'react';
import {api} from "../../../../DAL/API";
import Chat from "./Chat/Chat"
import css from "./ChatsList.module.css";


export class ChatsList extends React.Component {
    // props.chats
    //props.getMessages
    getMessages = (interlocutorId) => {
        this.props.getMessages(interlocutorId);
    };

    state = {
        areaText: '',
    };

    addNewTextToTextarea = (e) => {
        this.setState({areaText: e.currentTarget.value})
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') this.props.getUser(this.state.areaText);
    };

    render() {
        console.log(this.props.chats)
        let chats = this.props.chats.map(chat => <div key={chat.id}>
            <Chat chat={chat} getMessages={this.getMessages}/>
        </div>);

        return (
            <div>
                <div>
                    <textarea className={`${css.inputMessages}`} name={"newMessage"}
                              onChange={this.addNewTextToTextarea} rows={1}
                              value={this.state.areaText} placeholder={'Enter Messages Text...'}
                              onKeyPress={this.onKeyPress}/>
                </div>
                {chats}

            </div>
        )
    }
}

// interlocutor = {
//     id: ``,
//     name: ``,
//     photo: ``,
//     visitDate: ``,
// };
// lastMessage = {};
// chat = {
//     userId: ``,
//
//     newMessagesCount: ``,
//     lastMessageCount: ``,
//     lastMessageAuthorId: ``,
//     lastMessageData: ``,
//     isLastMessageRead: false,
//     isHidden: ``,
// };
//
// photo = {
//     small: ``,
//     large: ``,
// };
//
// messages = {
//     chatId: ``,
//     authorId: ``,
//     isRead: false,
//     data: ``,
//     status: `deletedForSender` | `deleteForRecipient` | `deleteForAll`,
// };
