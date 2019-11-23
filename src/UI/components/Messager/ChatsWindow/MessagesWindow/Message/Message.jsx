import React from 'react';
import css from './Message.module.css';

export const Message = (props) => {
    return (
        <div className={`${css.Message} ${css.clearFix}`}>

            <div><img src={``} alt="image"/></div>
            <div className={css.dataMessage}>

                <div className={css.nameMenMessage}> {`User:${props.interlocutorId} | ${props.data} | ${props.isRead}`} </div>
                <div className={css.textMessage}>{props.body}</div>

            </div>

        </div>
    );
};