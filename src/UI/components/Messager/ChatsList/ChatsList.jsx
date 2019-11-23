import React from 'react';
import { api } from "../../../../DAL/API";
import Chat from "./Chat/Chat"


export class ChatsList extends React.Component {
    // props.chats
    //props.getMessages
    getMessages(id) {
        console.log(id)
        //this.props.getMessages(id)
    }
    state = {
        chats: [{
            id: 'klklk',
            userId: 'jjhj',
            interlocutor: {
                id: 'hjhjhj',
                name: 'марина',
                photo: 'http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png',
                visitDate:  '12.12.2019'
            },
            newMessagesCount: 766,
            lastMessage: "how are you",
            isHidden: false
        },
        {
            id: 'jhjjh',
            userId: 'jhjhjk',
            interlocutor: {
                id: 'hjhjhj',
                name: 'Сургей',
                photo: 'http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png',
                visitDate:  '15.01.2019'
            },
            newMessagesCount: 111,
            lastMessage: 'ты офигел',
            isHidden: false

        }]
    }

    render() {
        console.log(this.props.chats);
        let  chats = this.state.chats.map(chat=><div><Chat chat={chat} /></div>)

            return(
                <div>
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