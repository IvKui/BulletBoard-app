import React, { Component } from 'react';
import firebase from 'firebase';
import { View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { getChats, setChat } from '../../actions';
import ChatBlock from '../ChatBlock';
import { Button, Container, Write, Svg, Spinner } from '../common';

class Messages extends Component {
	componentDidMount() {
		this.props.getChats(this.props.user)
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
		}
		return (
			<Container>
				{this.props.chats.length >= 1 ?
					<FlatList
						data={this.props.chats}
						renderItem={({item}) => {
							return (
								<ChatBlock
									onPress={() => this.onChatClick(item)}
									name={item.partnerName}
									image={item.partnerImage}
								/>
							)
						}}
						keyExtractor={item => item.chatId}
						numColumns= {1}
					/>
					:
					<View style={styles.noChatsContainer}>
						<Write>Geen openstaande gesprekken gevonden</Write>
					</View>
				}
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	noChatsContainer: {
		alignItems: 'center'
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
