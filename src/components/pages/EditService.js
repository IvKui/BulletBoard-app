import React, { Component } from 'react';
import { View, Picker, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import ServiceHeader from '../headers/ServiceHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
	editService,
	editPrices,
	editDays,
	selectAddService,
	priceTitleChanged,
	priceAmountChanged,
	dayChanged,
	dayStartChanged,
	dayEndChanged,
	addPrice,
	removePrice,
	removeEditPrice,
	addDay,
	removeDay,
	removeEditDay,
	addService,
	deleteService
} from '../../actions';
import { Title, Container, Button, Section, Write, Input, Spinner, Notify } from '../common';
import { check, cross } from '../../images';

class AddService extends Component {
	static navigationOptions = {
		headerTitle: (<ServiceHeader />)
	}

	constructor(props) {
		super(props);

		this.state = {
			days: [
				{ 'name': 'Maandag', 'id': 'monday' },
				{ 'name': 'Dinsdag', 'id': 'tuesday' },
				{ 'name': 'Woensdag', 'id': 'wednesday' },
				{ 'name': 'Donderdag', 'id': 'thursday' },
				{ 'name': 'Vrijdag', 'id': 'friday' },
				{ 'name': 'Zaterdag', 'id': 'saturday' },
				{ 'name': 'Zondag', 'id': 'sunday' }
			]
		}

		this.focusNextField = this.focusNextField.bind(this);
		this.inputs = {};
	}

	focusNextField(id) {
		this.inputs[id].focus();
	}

	onServiceSelect(service) {
		this.props.editService(service)
	}

	onPriceTitleChange(text) {
		this.props.priceTitleChanged(text)
	}

	onPriceAmountChange(text) {
		this.props.priceAmountChanged(text)
	}

	onSubmitPrice() {
		const { priceTitle, priceAmount, editServicePrices } = this.props;
		if(priceTitle && priceAmount) {
				let prices = editServicePrices
				if(prices === 'none') {
					prices = {}
				}

				prices[priceTitle] = {
					title: priceTitle,
					amount: priceAmount
				}
				this.props.editPrices(prices)
			}
	}

	onRemovePrice(title) {
		const { editServicePrices } = this.props;
		this.props.removeEditPrice({title, editServicePrices})
	}

	onDayChange(text) {
		this.props.dayChanged(text)
	}

	onDayStartChange(text) {
		this.props.dayStartChanged(text)
	}

	onDayEndChange(text) {
		this.props.dayEndChanged(text)
	}

	onSubmitDay() {
		const { editServiceDays, addDaySelected, dayStart, dayEnd } = this.props;
		if(dayStart && dayEnd) {
			let selectedDay = addDaySelected;
			let days = editServiceDays

			if(days === 'none') {
				days = {}
			}

			if(!selectedDay) {
				selectedDay = 'monday'
			}

			const day = this.state.days.find(day => day.id === selectedDay).name

			let newDays = this.state.days
			let removeDay = null
			Object.values(newDays).map((day, index) => {
				if(day.id === selectedDay) {
					removeDay = index
				}
			})
			newDays.splice(removeDay, 1)
			console.log(newDays)

			days[selectedDay] = {
				name: day,
				start: dayStart,
				end: dayEnd
			}
			this.props.editDays(days)
		}
	}

	onRemoveDay(day) {
		const { editServiceDays } = this.props;
		this.props.removeEditDay({day, editServiceDays})
	}

	onAddServicePress() {
		const { user, editServiceSelected, editServicePrices, editServiceDays } = this.props;
		if (editServiceSelected && editServicePrices && editServiceDays) {
			this.props.editService(user, editServiceSelected, editServicePrices, editServiceDays)
		}
	}

	onDeletePress() {
		Alert.alert(
			`${this.props.editServiceSelected} verwijderen?`,
		  'Weet u zeker dat u deze dienst wilt verwijderen?',
		  [
		    {text: 'Annuleren', onPress: null},
		    {text: 'Verwijderen', onPress: () => this.deleteService()},
		  ]
		)
	}

	deleteService() {
		const {navigation, user, editServiceSelected} = this.props
		this.props.deleteService(navigation, user, editServiceSelected)
	}

	renderPrices() {
		if (this.props.editServicePrices && this.props.editServicePrices != 'none') {
			const prices = this.props.editServicePrices
			return (
				Object.values(prices).map((price, index) => {
					return  (
						<View key={index} style={styles.row}>
							<Write style={styles.priceTitleText}>{price.title}</Write>
							<Write style={styles.priceAmountText}>€    {price.amount}</Write>
							<Button
								tiny
								icon={cross}
								onPress={() => {
									this.onRemovePrice(price.title)
								}}
								style={styles.removeBtn}
							/>
						</View>
					)
				})
			);
		}
	}

	renderDays() {
		if (this.props.editServiceDays && this.props.editServiceDays != 'none') {
			return (
				Object.values(this.props.editServiceDays).map((day, index) => {
					return  (
						<View key={index} style={styles.row}>
							<Write style={styles.dayNameText}>{day.name}</Write>
							<Write style={styles.dayStartText}><Write style={styles.smallText}>van  </Write>{day.start}</Write>
							<Write style={styles.dayEndText}><Write style={styles.smallText}>tot  </Write>{day.end}</Write>
							<Button
								tiny
								icon={cross}
								onPress={() => {
									this.onRemoveDay(Object.keys(this.props.editServiceDays)[index])
								}}
								style={styles.removeBtn}
							/>
						</View>
					)
				})
			);
		}
	}

	renderConfirm() {
		if (this.props.editServiceConfirm) {
			return (
				<Notify confirm>
					{this.props.editServiceConfirm}
				</Notify>
			);
		}
	}

	renderError() {
		if (this.props.editServiceError) {
			return (
				<Notify error>
					{this.props.editServiceError}
				</Notify>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<View>
				<Button onPress={this.onAddServicePress.bind(this)}>
					Opslaan
				</Button>
			</View>
		);
	}

	render() {
		return (
			<Container style={styles.container}>
				{this.renderConfirm()}
				{this.renderError()}
				<Section>
					<Title>Dienst</Title>
					<Write style={styles.serviceName}>{this.props.editServiceSelected}</Write>
				</Section>
				<Section>
					<Title>Prijslijst</Title>
					<View style={styles.priceInputContainer}>
						<TextInput
							style={styles.priceText}
							underlineColorAndroid='transparent'
							placeholder='Dienst'
							keyboardType='default'
							onChangeText={this.onPriceTitleChange.bind(this)}
							value={this.props.priceTitle}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.focusNextField('amount');
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['title'] = input;
							}}
						/>
						<Write style={styles.euroSign}>€</Write>
						<TextInput
							style={styles.priceAmount}
							underlineColorAndroid='transparent'
							placeholder='Prijs'
							keyboardType='numeric'
							onChangeText={this.onPriceAmountChange.bind(this)}
							value={this.props.priceAmount}
							blurOnSubmit={ true }
							onSubmitEditing={() => {
								this.focusNextField('title');
								this.onSubmitPrice();
							}}
							returnKeyType={ "done" }
							ref={ input => {
								this.inputs['amount'] = input;
							}}
						/>
						<Button
							tiny
							icon={check}
							onPress={() => {
								this.focusNextField('title');
								this.onSubmitPrice()
							}}
							style={styles.submitBtn}
						/>
					</View>
					{this.renderPrices()}
				</Section>
				<Section>
					<Title>Werktijden</Title>
					{this.state.days.length > 0 &&
						<View style={styles.dayInputContainer}>
						<Picker
							selectedValue={this.props.addDaySelected}
							onValueChange={(day) => this.onDayChange(day)}
							mode='dropdown'
							style={styles.dayPicker}
						>
						{this.state.days.map((day, index) => {
							return  (
								<Picker.Item
								key={index}
								label={day.name}
								value={day.id}
								/>
							)
						})}
						</Picker>
						<TextInput
							style={styles.dayStart}
							underlineColorAndroid='transparent'
							placeholder='Vanaf'
							keyboardType='default'
							onChangeText={this.onDayStartChange.bind(this)}
							value={this.props.dayStart}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.focusNextField('dayEnd');
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['dayStart'] = input;
							}}
						/>
						<TextInput
							style={styles.dayEnd}
							underlineColorAndroid='transparent'
							placeholder='Tot'
							keyboardType='default'
							onChangeText={this.onDayEndChange.bind(this)}
							value={this.props.dayEnd}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.focusNextField('dayStart');
								this.onSubmitDay();
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['dayEnd'] = input;
							}}
						/>
						<Button
							tiny
							icon={check}
							onPress={() => {
								this.focusNextField('dayStart');
								this.onSubmitDay()
							}}
							style={styles.submitBtn}
						/>
						</View>
					}
					{this.renderDays()}
				</Section>
				{this.renderButton()}
				<Button
					small
					style={styles.deleteService}
					onPress={() => this.onDeletePress()}
				>
					Verwijderen
				</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	serviceName: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	priceInputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	priceText: {
		flex: 1,
		marginRight: 15,
		paddingLeft: 8,
		borderBottomColor: '$primaryColor',
		borderBottomWidth: 1
	},
	euroSign: {
		marginTop: 5,
		marginRight: 10
	},
	priceAmount: {
		width: 80,
		marginRight: 10,
		paddingLeft: 8,
		borderBottomColor: '$primaryColor',
		borderBottomWidth: 1
	},
	priceTitleText: {
		marginLeft: 'auto',
		flex: 1
	},
	priceAmountText: {
		width: 112,
		marginLeft: 8
	},
	dayInputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	dayPicker: {
		width: 120,
		marginRight: 15
	},
	dayStart: {
		width: 60,
		marginRight: 10,
		paddingLeft: 8,
		borderBottomColor: '$primaryColor',
		borderBottomWidth: 1
	},
	dayEnd: {
		width: 60,
		marginRight: 10,
		paddingLeft: 8,
		borderBottomColor: '$primaryColor',
		borderBottomWidth: 1
	},
	dayNameText: {
		marginRight: 'auto',
		marginLeft: 8
	},
	dayStartText: {
		width: 80,
		paddingLeft: 8
	},
	dayEndText: {
		width: 80,
		paddingLeft: 8,
		marginRight: 25
	},
	smallText: {
		fontSize: 14,
		fontWeight: 'bold'
	},
	submitBtn: {
		flex: 0,
		marginTop: 5
	},
	removeBtn: {
		flex: 0
	},
	deleteService: {
		marginTop: 20
	},
	row: {
		justifyContent: 'flex-end',
		flexDirection: 'row',
		marginBottom: 5
	}
});



const mapStateToProps = state => {
	return {
		services: state.service.services,
		loading: state.service.loading,
		addServiceError: state.service.addServiceError,
		addServiceSelected: state.service.addServiceSelected,
		addServicePrices: state.service.addServicePrices,
		addServiceDays: state.service.addServiceDays,
		editServiceSelected: state.service.editServiceSelected,
		editServicePrices: state.service.editServicePrices,
		editServiceDays: state.service.editServiceDays,
		editServiceConfirm: state.service.editServiceConfirm,
		priceTitle: state.service.priceTitle,
		priceAmount: state.service.priceAmount,
		addDaySelected: state.service.addDaySelected,
		dayStart: state.service.dayStart,
		dayEnd: state.service.dayEnd,
    user: state.auth.user
	};
};

export default connect(mapStateToProps, {
	editService,
	editPrices,
	editDays,
	selectAddService,
	priceTitleChanged,
	priceAmountChanged,
	addPrice,
	removePrice,
	removeEditPrice,
	dayChanged,
	dayStartChanged,
	dayEndChanged,
	addDay,
	removeDay,
	removeEditDay,
	addService,
	deleteService
})(AddService);
