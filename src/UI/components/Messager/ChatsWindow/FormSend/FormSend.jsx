import React from 'react';
import css from './FormSend.module.css';

export class FormSend extends React.Component {

    render() {
        return (
            <div className={`${css.FormSend} clearFix`}>
                <textarea className={`${css.inputMessages}`} name={"newMessage"} rows={2}
                          placeholder={'Enter Messages Text...'}/>
                <button className={css.buttonSendMessages}>Send</button>
            </div>
        )
    }
}
