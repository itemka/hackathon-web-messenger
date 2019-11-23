import React from 'react';
import css from './FormSend.module.css';

export class FormSend extends React.Component {
    state = {
        areaText: '',
    };

    addNewTextToTextarea = (e) => {
        this.setState({areaText: e.currentTarget.value})
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') this.props.addNewMessage(this.state.areaText)
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
                        onClick={() => this.props.addNewMessage(this.state.areaText)}>Send
                </button>
            </div>
        )
    }
}
