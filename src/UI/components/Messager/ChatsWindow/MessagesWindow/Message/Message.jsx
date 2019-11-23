import React from 'react';
import css from './Message.module.css';

export const Message = (props) => {
    return (
        <div className={`${css.Message} ${css.clearFix}`}>

            <div><img src={``} alt="image"/></div>
            <div className={css.dataMessage}>

                <div className={css.nameMenMessage}> {`Man`} </div>
                <div className={css.textMessage}>{props.data}</div>

            </div>

        </div>
    );
};