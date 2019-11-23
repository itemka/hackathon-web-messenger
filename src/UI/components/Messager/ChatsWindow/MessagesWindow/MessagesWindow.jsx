import React from 'react';
import {Message} from "./Message/Message";

class MessagesWindow extends React.Component {
    render = () => {
        let messages = this.props.messageArray.map(item => <Message data={item.data}/>);
        return (
            <>
                {messages}
            </>
        );
    }
}

export default MessagesWindow;