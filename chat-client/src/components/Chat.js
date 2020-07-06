import React, { Component } from "react";

class Chat extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" placeholder="enter a message" onKeyUp={this.sendMessage} className="form-control"></input>
                            {this.state.messages.map((message) => {
                                return (<p>{message.body} from {message.from}</p>)
                            })}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

Chat.propTypes = {};

export default Chat;