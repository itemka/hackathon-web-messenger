import React from 'react';
import '../../../../App.css';
import css from './Message.module.css';

export const Message = (props) => {
    return (
        <div className={`${css.Message} clearFix`}>

            <div><img src={props.photoProfile} alt=""/></div>
            <div className={css.dataMessage}>

                <div className={css.nameMenMessage}> {`(idProf=${props.idProfile}) ${props.nameProfile}`} </div>
                <div className={css.textMessage}> {`(idMess=${props.id}) ${props.message}`} </div>

            </div>

        </div>
    );
};