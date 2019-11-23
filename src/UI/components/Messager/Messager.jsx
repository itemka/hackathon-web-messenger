import React from 'react';
import css from './Messager.module.css';
import {ChatsWindow} from "./ChatsWindow/ChatsWindow";
import {ChatsList} from "./ChatsList/ChatsList";

export class Messager extends React.Component {
    render() {
        return (
            <div className={css.Messager}>

                <div className={css.titleMessager}>Messager</div>

                <div className={css.ChatsListAndChatsWindow}>
                    <div className={css.ChatsList}><ChatsList/></div>
                    <div className={css.ChatsWindow}><ChatsWindow/></div>
                </div>

            </div>
        )
    }
}
