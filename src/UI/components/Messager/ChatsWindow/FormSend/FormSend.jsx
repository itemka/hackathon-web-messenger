import React from 'react';
<<<<<<< HEAD

export class FormSend extends React.Component {
    render() {
        return (
            <>
                {/*<div onSubmit={props.handleSubmit} className={`${css.SendMessages} clearFix`}>*/}
                {/*    <textarea className={`${css.inputMessages}`} name={"newMessage"}*/}
                {/*           rows={2} placeholder={'Enter Messages Text...'}/>*/}
                {/*    <button className={css.buttonSendMessages}>Send</button>*/}
                {/*</div>*/}
            </>
=======
import css from './FormSend.module.css';

export class FormSend extends React.Component {

    render() {
        return (
            <div className={`${css.FormSend} clearFix`}>
                <textarea className={`${css.inputMessages}`} name={"newMessage"} rows={2}
                          placeholder={'Enter Messages Text...'}/>
                <button className={css.buttonSendMessages}>Send</button>
            </div>
>>>>>>> 0f6ca578eaeff5defc062a86fe54a92619cda898
        )
    }
}
