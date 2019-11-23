import React from 'react';
import css from './Chat.module.css'

export class Chat extends React.Component {
    render() {
        return (
            <div className={css.wraperChat}>
                <div className={css.Chat}>
                    <div className={css.PhotoUser}>
                        <img src={'http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png'} alt='Name' />
                    </div>

                    <div className={css.LocuterNameData}>
                        <div className={css.MessageDate}>
                            <div className={css.UserName}>ДЕД МОРОЗ</div>
                            <div>12.11.2019</div>
                        </div>
                        <div className={css.LastMessage}>
                            <div className={css.Message}>Привет</div>
                            <div className ={css.NumberMessage}>2</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Chat
