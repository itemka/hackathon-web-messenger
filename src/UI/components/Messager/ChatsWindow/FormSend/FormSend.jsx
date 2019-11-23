import React from 'react';
import css from './FormSend.module.css';

export class FormSend extends React.Component {
    state = {
        areaText: '',
    };

    addNewTextToTextarea = (e) => {
        this.setState({areaText: e.currentTarget.value})
    };
    sendMessage = () => {
        this.props.sendMessage(this.props.interlocutorIdAfterClickOnChat, this.state.areaText)
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') this.sendMessage();
    };

    render() {
        return (
            <div className={`${css.FormSend} clearFix`}>
                <textarea className={`${css.inputMessages}`}
                          name={"newMessage"}
                          onChange={this.addNewTextToTextarea}
                          rows={2}
                          value={this.state.areaText}
                          placeholder={'Enter Messages Text...'}
                          onKeyPress={this.onKeyPress}/>
                <button className={css.buttonSendMessages}
                        onClick={() => this.sendMessage()}>Send
                </button>
            </div>
        )
    }
}
