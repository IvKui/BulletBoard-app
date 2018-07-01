import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { getChats, setChat } from '../../actions';
import ChatBlock from '../ChatBlock';
import { Button, Container, Write, Svg, Spinner } from '../common';

class Messages extends Component {
	constructor(props) {
		super(props)

		this.state = {
			reloadChats: this.props.navigation.addListener(
		    'willFocus',
		    payload => {
					this.props.getChats(this.props.user)
		    }
		  )
		}
	}

	componentDidMount() {
		this.props.getChats(this.props.user)
	}

	componentWillUnmount() {
		this.state.reloadChats.remove()
	}

	static navigationOptions = {
		title: 'Gesprekken'
	}

	onChatClick(chat) {
		this.props.setChat(chat)
		this.props.navigation.navigate('Chat')
	}

	render() {
		if(this.props.chatsLoading) {
			return (
				<Container center>
					<Spinner />
				</Container>
			)
		} else {
			if(this.props.chats.length >= 1) {
				return (
					<Container>
						<FlatList
						data={this.props.chats}
						renderItem={({item}) => {
							return (
								<ChatBlock
								onPress={() => this.onChatClick(item)}
								name={item.partnerName}
								image={item.partnerImage}
								message={item.lastMessage.text}
								/>
							)
						}}
						keyExtractor={item => item.chatId}
						numColumns= {1}
						/>
					</Container>
				)
			} else {
				return (
					<Container center>
						<Write style={styles.noMessagesText}>nog geen openstaande gesprekken</Write>
					</Container>
				)
			}
		}
	}
}

const styles = EStyleSheet.create({
	noMessagesText: {
			fontSize: 16,
			fontWeight: 'bold',
			textAlign: 'center',
			marginBottom: 15
	}
});

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		chats: state.chat.chats,
		chatsLoading: state.chat.chatsLoading
	};
};

export default connect(mapStateToProps, {
	getChats,
	setChat
})(Messages);
