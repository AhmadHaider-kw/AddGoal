import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	const [ModalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	function StartAddHandler() {
		setModalIsVisible(true);
	}
	function EndAddGoalHandler() {
		setModalIsVisible(false);
	}

	function AddGoalHandler(enteresGoalsText) {
		setCourseGoals((currentCourseGoal) => [
			...courseGoals,
			{ text: enteresGoalsText, key: Math.random().toString() },
		]);
	}
	function DeleteGoalHandler(id) {
		setCourseGoals((currentCourseGoal) => {
			return currentCourseGoal.filter((goal) => goal.id !== id);
		});
		EndAddGoalHandler();
	}
	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button
					title='add new Goal'
					color='#a065ec'
					onPress={StartAddHandler}
				/>

				<GoalInput
					AddGoal={AddGoalHandler}
					onCancel={EndAddGoalHandler}
					visible={ModalIsVisible}
				/>

				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteItem={DeleteGoalHandler}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
	goalsContainer: {
		flex: 4,
	},
});
