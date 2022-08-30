import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	Modal,
	Image,
} from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) {
	const [enteresGoalsText, setenteresGoalsText] = useState('');
	function goalInputHandler(enteresGoalsText) {
		setenteresGoalsText(enteresGoalsText);
	}

	function AddGoalHandler() {
		props.AddGoal(enteresGoalsText);
		setenteresGoalsText('');
	}

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<View style={styles.inputContainer}>
					<Image
						style={styles.image}
						source={require('../assets/splash.png/')}
					/>
					<TextInput
						style={styles.textInput}
						placeholder='your course goal !!'
						onChangeText={goalInputHandler}
						value={enteresGoalsText}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title='Add Goal'
								onPress={AddGoalHandler}
								color='#b180f0'
							/>
						</View>
						<View style={styles.button}>
							<Button title='Cancel' onPress={props.onCancel} color='#f31282' />
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '120438',
		borderRadius: 6,
		width: '100%',
		padding: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
