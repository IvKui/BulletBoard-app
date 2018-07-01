import React, { Component } from 'react';
import { View, Picker, TextInput, Keyboard, TimePickerAndroid } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
	selectAddService,
	priceTitleChanged,
	priceAmountChanged,
	dayChanged,
	dayStartChanged,
	dayEndChanged,
	addPrice,
	removePrice,
	addDay,
	removeDay,
	addService
} from '../../actions';
import { Title, Container, Button, Section, Write, Input, Spinner, Notify} from '../common';
import { check, cross } from '../../images';

class AddService extends Component {
	static navigationOptions = {
		title: 'Dienst toevoegen'
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
		this.props.selectAddService(service)
	}

	onPriceTitleChange(text) {
		this.props.priceTitleChanged(text)
	}

	onPriceAmountChange(text) {
		this.props.priceAmountChanged(text)
	}

	onSubmitPrice() {
		const { priceTitle, priceAmount, addServicePrices } = this.props;
		if(priceTitle && priceAmount) {
			this.props.addPrice({priceTitle, priceAmount, addServicePrices})
		}
	}

	onRemovePrice(title) {
		const { addServicePrices } = this.props;
		this.props.removePrice({title, addServicePrices})
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
		const { addServiceDays, addDaySelected, dayStart, dayEnd } = this.props;
		let selectedDay = addDaySelected;
		if(!selectedDay) {
			selectedDay = 'monday'
		}

		if(dayStart && dayEnd) {
			const day = this.state.days.find(day => day.id === selectedDay).name
			this.props.addDay({addServiceDays, day, selectedDay, dayStart, dayEnd})
		}
	}

	onRemoveDay(day) {
		const { addServiceDays } = this.props;
		this.props.removeDay({day, addServiceDays})
	}

	onAddServicePress() {
		const { navigation, user, addServiceSelected, addServicePrices, addServiceDays } = this.props;
		this.props.addService(navigation, user, addServiceSelected, addServicePrices, addServiceDays)
	}

	openStartTimePicker() {
		TimePickerAndroid.open({
			hour: 0,
			minute: 0,
			is24Hour: true
		})
			.then(action => {
				if (action.action != 'dismissedAction') {
					let minute = action.minute
					if(minute === 0) {
						minute = '00'
					}
					const time = `${action.hour}:${minute}`
					this.onDayStartChange(time)
				}
			})
	}

	openEndTimePicker() {
		TimePickerAndroid.open({
			hour: 0,
			minute: 0,
			is24Hour: true
		})
			.then(action => {
				if (action !== 'dismissedAction') {
					let minute = action.minute
					if(minute === 0) {
						minute = '00'
					}
					const time = `${action.hour}:${minute}`
					this.onDayEndChange(time)
				}
			})
	}

	renderPrices() {
		if (this.props.addServicePrices) {
			return (
				Object.values(this.props.addServicePrices).map((price, index) => {
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
		if (this.props.addServiceDays) {
			return (
				Object.values(this.props.addServiceDays).map((day, index) => {
					return  (
						<View key={index} style={styles.row}>
							<Write style={styles.dayNameText}>{day.name}</Write>
							<Write style={styles.dayStartText}><Write style={styles.smallText}>van  </Write>{day.start}</Write>
							<Write style={styles.dayEndText}><Write style={styles.smallText}>tot  </Write>{day.end}</Write>
							<Button
								tiny
								icon={cross}
								onPress={() => {
									this.onRemoveDay(Object.keys(this.props.addServiceDays)[index])
								}}
								style={styles.removeBtn}
							/>
						</View>
					)
				})
			);
		}
	}

	renderAlert() {
		if (this.props.addServiceError) {
			return (
				<Notify error>
					{this.props.addServiceError}
				</Notify>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<Button onPress={this.onAddServicePress.bind(this)}>
				Toevoegen
			</Button>
		);
	}

	render() {
		return (
			<Container style={styles.container}>
				{this.renderAlert()}
				<Section>
					<Title>Dienst</Title>
					<Picker
						selectedValue={this.props.addServiceSelected}
						onValueChange={(service) => this.onServiceSelect(service)}
						mode='dropdown'
					>
						<Picker.Item label='Kies een dienst' value={null} />
						{Object.values(this.props.services).map((service, index) => {
							return (
								<Picker.Item
									key={index}
									label={service.title}
									value={service.id}
								/>
							)
						})}
					</Picker>
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
							onFocus={() => {
								Keyboard.dismiss()
								this.openStartTimePicker()
							}}
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
							onFocus={() => this.openEndTimePicker()}
							value={this.props.dayEnd}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
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
								this.onSubmitDay()
							}}
							style={styles.submitBtn}
						/>
					</View>
					{this.renderDays()}
				</Section>
				{this.renderButton()}
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	pickerItem: {
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
		flex: 1,
		marginLeft: 8
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
		priceTitle: state.service.priceTitle,
		priceAmount: state.service.priceAmount,
		addDaySelected: state.service.addDaySelected,
		dayStart: state.service.dayStart,
		dayEnd: state.service.dayEnd,
    user: state.auth.user
	};
};

export default connect(mapStateToProps, {
	selectAddService,
	priceTitleChanged,
	priceAmountChanged,
	addPrice,
	removePrice,
	dayChanged,
	dayStartChanged,
	dayEndChanged,
	addDay,
	removeDay,
	addService
})(AddService);
