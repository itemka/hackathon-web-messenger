import React from 'react';
import {api} from "../../../../DAL/API";
import Chat from "./Chat/Chat"


export class ChatsList extends React.Component {

    getToken() {
        return api.getToken().then(data => console.log(data));
    }

    render() {
        return (
            <div>
                <Chat />
                <Chat />
                <button onClick={() => this.getToken}>Click</button>
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