import React from 'react';
import css from './Messager.module.css';

import ChatsWindow from "./ChatsWindow/ChatsWindow";
import {ChatsList} from "./ChatsList/ChatsList";
import {storage} from "../../../DAL/api-storage";
import {api} from "../../../DAL/API";
import openSocket from 'socket.io-client'

export class Messager extends React.Component {
    messagesArray = [];
    state = {
        chatsArray: [],
        messagesArray: [],
        interlocutorIdAfterClickOnChat: 0,
    };
    socket = '';

    async componentDidMount() {
        let token;
        if (localStorage.getItem('token') == null) {
            token = await api.getToken();
            await storage.saveToken(token);
        } else {
            token = localStorage.getItem('token');
        }
        this.socket = await openSocket('http://messenger-hackathon.herokuapp.com', {query: "token=" + localStorage.getItem("token")});
        if (this.socket !== '') {
            this.socket.emit('get-chats', {token: token});
            this.socket.on('get-chats-success', (data) => {
                // console.log(data)
                this.setState({chatsArray: [...data.chats]});
            });
        }
    }

    getUser = async (userName) => {
        await api.getUsers(1, 10, userName).then(
            user => {
                this.socket.emit('init-chat', {token: localStorage.getItem('token'), interlocutorId: user.id});
                this.socket.on('init-chat-success', (chat) => {
                        console.log(chat);
                        let newChat = chat;
                        this.setState({
                            chatsArray: [...this.state.chatsArray, ...newChat]
                        });
                    }
                )
            }
        )
    };

    getMessages = async (interlocutorId, page = 3) => {
        // console.log(`interlocutorId = ${interlocutorId}`);
        await this.setState({interlocutorIdAfterClickOnChat: interlocutorId});
        if (this.socket !== '') {
            await this.socket.emit('get-messages', {
                token: localStorage.getItem('token'),
                interlocutorId: interlocutorId,
                page: page
            });
            await this.socket.on('get-messages-success', (messages) => {
                console.log(`messages.messages.messages = `);
                console.log(messages.messages.messages);
                this.setState({messagesArray: messages.messages.messages});
            });
            // console.log(`interlocutorId = ${this.state.interlocutorIdAfterClickOnChat}`);
        }
    };

    sendMessage = async (interlocutorId, messageText) => {
        await this.socket.emit('send-message', {
            token: localStorage.getItem('token'),
            interlocutorId: interlocutorId,
            body: messageText
        });
        await this.socket.on('send-message-success', (messages) => {
            console.log(`qqqqqqqqqq`);
            console.log(messages.message);
            this.setState({messagesArray: [messages.message, ...this.state.messagesArray]});
        });
    };

    render() {
        return (
            <div className={css.Messager}>

                <div className={css.titleMessager}>Messager</div>

                <div className={css.ChatsListAndChatsWindow}>
                    <div className={css.ChatsList}><ChatsList chatsArray={this.state.chatsArray}
                                                              getMessages={this.getMessages}
                                                              getUser={this.getUser}

                    /></div>
                    <div className={css.ChatsWindow}><ChatsWindow messagesArray={this.state.messagesArray}
                                                                  sendMessage={this.sendMessage}
                                                                  interlocutorIdAfterClickOnChat={this.state.interlocutorIdAfterClickOnChat}/>
                    </div>
                </div>

            </div>
        )
    }
}
