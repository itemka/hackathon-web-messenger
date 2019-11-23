import React from 'react';
import css from './Messager.module.css';

import ChatsWindow from "./ChatsWindow/ChatsWindow";
import {ChatsList} from "./ChatsList/ChatsList";
import {storage} from "../../../DAL/api-storage";
import {api} from "../../../DAL/API";
import openSocket from 'socket.io-client'

export class Messager extends React.Component {
    state = {
        chatsArray: [],
        messagesArray: [],
    };
    socket = '';

    async componentDidMount() {
        let token = await api.getToken();
        await storage.saveToken(token);

        this.socket = await openSocket('http://messenger-hackathon.herokuapp.com', {query: "token=" + localStorage.getItem("token")});
        ;
        if (this.socket !== '') {
            this.socket.emit('get-chats', {token: token});
            this.socket.on('get-chats-success', (data) => {
                this.setState({chatsArray: [...data.chats]});
            });
        }
    }

    getMessages = (chatId) => {
        if (this.socket !== '') {
            this.socket.emit('get-messages', {token: localStorage.getItem('token'), chatId: chatId});
            this.socket.on('get-messages-success',);
        }

    };

    getUser = async (userName) => {
        await api.getUsers(1, 10, userName).then(
            user => {
                this.socket.emit('init-chat', {token: localStorage.getItem('token'), interlocutorId: user.id});
                this.socket.on('init-chat-success', (chat) => {
                        const newChat = chat.chat
                        this.setState({
                            chatsArray: [newChat, ...this.state.chatsArray]
                        });
                    }
                )
            }
        )
    }

        render()
        {
            return (
                <div className={css.Messager}>

                    <div className={css.titleMessager}>Messager</div>

                    <div className={css.ChatsListAndChatsWindow}>
                        <div className={css.ChatsList}><ChatsList chats={this.state.chatsArray}
                                                                  getMessages={this.getMessages}
                                                                  getUser={this.getUser}

                        /></div>
                        <div className={css.ChatsWindow}><ChatsWindow/></div>
                    </div>

                </div>
            )
        }
    }
