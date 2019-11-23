import React from 'react';
import {Message} from "./Message/Message";

class MessagesWindow extends React.Component {
    render = () => {
        console.log(`...`)
        console.log(this.props.messageArray)
        console.log(`,,,`)
        let messages = this.props.messageArray.map(item => <Message key={Math.random()}
                                                                    body={item.body}
                                                                    data={item.date}
                                                                    interlocutorId={item.interlocutorId}
                                                                    isRead={item.isRead}/>);
        return (
            <>
                {messages}
            </>
        );
    }
}

export default MessagesWindow;