import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

interface Task {
	title: string
	description: string
	status: Status
}

type InputsType = 'title' | 'description'
type Status = 'To do' | 'In progress' | 'Done'

const statusData = ['To do', 'In progress', 'Done']

export const EditTask = () => {
	const [data, setData] = useState<Task>({
		title: '',
		description: '',
		status: 'To do',
	})

	// Llena los datos del objeto Task, title & description
	const handleChange = (value: string, name: InputsType) => {
		setData({ ...data, [name]: value })
	}

	// Indicar el tipo en forma de array => Task[] || Array<Task>
	const [tasks, setTasks] = useState<Task[]>([])

	const handleSubmit = () => {
		console.log(data)
		if (data.title.length === 0 || data.description.length === 0) {
			console.log('debe ingresar un dato')
			return
		}
		setTasks([...tasks, data])

		setData({ title: '', description: '', status: 'To do' })
	}
	return (
		<View style={styles.box}>
			<Text style={styles.text_primary}>Title</Text>
			<TextInput
				style={styles.input}
				value={data.title}
				onChangeText={(value) => handleChange(value, 'title')}
			/>
			<Text style={styles.text_primary}>Description</Text>
			<TextInput
				style={styles.input}
				onChangeText={(value) => handleChange(value, 'description')}
				multiline
				numberOfLines={4}
				value={data.description}
			/>
			{/* <View style={styles.boxSelect}> */}
			<SelectDropdown
				data={statusData}
				onSelect={(selectedItem, index) => {
					console.log(selectedItem, index)
					setData({ ...data, status: selectedItem })
				}}
				buttonTextAfterSelection={(selectedItem, index) => {
					// text represented after item is selected
					// if data array is an array of objects then return selectedItem.property to render after item is selected
					return selectedItem
				}}
				rowTextForSelection={(item, index) => {
					// text represented for each item in dropdown
					// if data array is an array of objects then return item.property to represent item in dropdown
					return item
				}}
				dropdownStyle={styles.boxSelect}
				buttonStyle={styles.boxSelect}
			/>
			{/* </View> */}
			<Button title="Enviar" onPress={handleSubmit}></Button>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		width: 200,
		height: 250,
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 10,
		padding: 10,
	},
	text_primary: {
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 2,
	},

	input: {
		marginTop: 10,
		height: 50,
		borderColor: '#e1e1e1',
		borderWidth: 1,
		borderStyle: 'solid',
	},
	button: {
		marginTop: 5,
	},
	status: {
		backgroundColor: 'cyan',
		width: 100,
		height: 30,
	},
	item: {
		width: 200,
		backgroundColor: '#74c2c7',
		padding: 10,
		borderRadius: 8,
		marginVertical: 5,
	},

	boxSelect: {
		width: 180,
	},
})
