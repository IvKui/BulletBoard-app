import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { GiftedChat, Actions, Bubble, SystemMessage } from 'react-native-gifted-chat';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import {
  getMessages,
  messageChanged,
  changeLoadEarlier
} from '../../actions';
import ChatHeader from '../headers/ChatHeader';
import { Container, Spinner, Write } from '../common';

class Chat extends Component {
  constructor(props) {
    super(props)

    const provider = this.props.user.id
    const consumer = "zPBoFHdMjBewn8B4LgCgQ6tyM752"
    const chatId = `${provider}x${consumer}`

    this.state = {
      provider,
      consumer,
      chatId
    }
  }

  componentDidMount() {
    firebase.database()
			.ref(`chats/${this.state.chatId}`)
			.on('value', snapshot => {
				const messages = snapshot.val().messages
				this.props.getMessages(messages)
			})
  }

	static navigationOptions = {
		headerTitle: (<ChatHeader />)
	}

  onChangeMessage(text) {
    this.props.messageChanged(text)
  }

  onLoadEarlier() {
    this.props.changeLoadMessages(!this.props.loadOldMessages)
  }

  onSend(message) {
    message.map((res) => {
      res.createdAt = `${res.createdAt}`
      firebase.database()
        .ref(`chats/${this.state.chatId}/messages/${res._id}`)
        .set(res)
    })
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  render() {
    if(!this.props.messages) {
      return (
        <Container center>
          <Spinner />
        </Container>
      )
    }
    return (
        <GiftedChat
          messages={Object.values(this.props.messages)}
          text={this.props.newMessage}
          onInputTextChanged={text => this.onChangeMessage(text)}
          onSend={message => this.onSend(message)}
          renderAvatar={null}
          loadEarlier={this.props.loadEarlier}
          onLoadEarlier={this.onLoadEarlier}
          timeFormat='H:mm'
          dateFormat='D MMM, YYYY'
          user={{
            _id: this.props.user.id,
            name: this.props.user.name
          }}
        />
    );
  }
}

const styles = EStyleSheet.create({
});

const mapStateToProps = state => {
	return {
    user: state.auth.user,
    messages: state.chat.messages,
    newMessage: state.chat.newMessage,
    loadEarlier: state.chat.loadEarlier
	};
};

export default connect(mapStateToProps, {
  getMessages,
  messageChanged,
  changeLoadEarlier
})(Chat);
