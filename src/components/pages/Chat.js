import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import { GiftedChat, InputToolbar, Composer, Send, Bubble, SystemMessage } from 'react-native-gifted-chat';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import {
  setMessages,
  messageChanged,
  changeLoadEarlier
} from '../../actions';
import ChatHeader from '../headers/ChatHeader';
import { Container, Spinner, Write, Svg } from '../common';
import { send } from '../../images';

class Chat extends Component {
  constructor(props) {
    super(props)

    console.log(this.props)
  }

  componentDidMount() {
    firebase.database()
			.ref(`chats/${this.props.chat.chatId}/messages`)
			.on('value', snapshot => {
        if(snapshot.val()) {
          const messages = Object.values(snapshot.val())
          messages.sort((a, b) => {
            const dateA = new Date(a.createdAt)
            const dateB = new Date(b.createdAt)

            if(dateA > dateB) return -1
            if(dateA < dateB) return 1
            return 0
          })
          this.props.setMessages(messages)
        } else {
          this.props.setMessages([])
        }
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
    message[0].createdAt = message[0].createdAt.toISOString()
    const newMessages = GiftedChat.prepend(this.props.messages, message)
    let messagesObj = {}
    newMessages.map(res => {
      title = res.createdAt.replace('.', ':')
      messagesObj[title] = res
    })
    firebase.database()
      .ref(`chats/${this.props.chat.chatId}/messages/`)
      .set(messagesObj)
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: styles.receivedMessages,
          right: styles.sendMessages
        }}
      />
    )
  }

  renderInputToolbar(props) {
    return (
      <View>
        <InputToolbar
          {...props}
          containerStyle={styles.inputToolbar}
        />
      </View>
    )
  }

  renderComposer(props) {
    return (
      <Composer
        {...props}
        placeholder='Typ een bericht'
      />
    )
  }

  renderSend(props) {
    if(this.props.newMessage) {
      return (
        <Send {...props}>
          <View style={styles.sendIcon}>
            <Svg
              height={'25'}
              width={'25'}
              fill={ EStyleSheet.value('$primaryColor')}
              source={ send }
            />
          </View>
        </Send>
      )
    }
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
      <View style={styles.chatContainer}>
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
          renderBubble={props => this.renderBubble(props)}
          renderComposer={props => this.renderComposer(props)}
          renderSend={props => this.renderSend(props)}
          user={{
            _id: this.props.user.id,
            name: this.props.user.name
          }}
        />
        <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={80}/>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  chatContainer: {
    flex: 1
  },
  receivedMessages: {
    backgroundColor: '$white',
    padding: 5,
    paddingBottom: 0
  },
  sendMessages: {
    backgroundColor: '$primaryColor',
    padding: 5,
    paddingBottom: 0
  },
  inputToolbar: {
    paddingTop: -10
  },
  sendIcon: {
    aspectRatio: 1,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
	return {
    user: state.auth.user,
    messages: state.chat.messages,
    chat: state.chat.chat,
    newMessage: state.chat.newMessage,
    loadEarlier: state.chat.loadEarlier,
    chatPartner: state.chat.chatPartner
	};
};

export default connect(mapStateToProps, {
  setMessages,
  messageChanged,
  changeLoadEarlier
})(Chat);
