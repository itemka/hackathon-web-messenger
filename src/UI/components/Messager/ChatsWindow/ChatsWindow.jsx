import React from 'react';
import {MessagesWindow} from "./MessagesWindow/MessagesWindow";
import {FormSend} from "./FormSend/FormSend";
import css from './ChatsWindow.module.css';

export class ChatsWindow extends React.Component {
    render() {
        return (
            <div>
                <div className={css.MessagesWindow}>
                    <MessagesWindow/>
                </div>
                <div className={css.FormSend}>
                    <FormSend/>
                </div>
            </div>
        )
    }
}
