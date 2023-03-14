import { useState } from 'react'
import {
	Text,
	TextInput,
	View,
	StyleSheet,
	Button,
	FlatList,
} from 'react-native'

interface Task {
	title: string
	description: string
	status: Status
}

type InputsType = 'title' | 'description'
type Status = 'To do' | 'In progress' | 'Done'

// To do = azure
// In Progress = green
// Done = red

export const Tasks = () => {
	// Maneja los datos de la creación
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
		if (data.title.length === 0 || data.description.length === 0) {
			console.log('debe ingresar un dato')
			return
		}
		setTasks([...tasks, data])

		// Resetear Los campos
		setData({ title: '', description: '', status: 'To do' })

		// const {title, description} = data => {title:title, description: description}
		// const {title, description} = data => {title, description}
		// data => {title: data.title, description: data.description}
		// data
	}

	return (
		<View>
			{/* Create Tasks */}
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
				<Button title="Enviar" onPress={handleSubmit}></Button>
			</View>
			{/* Mostrar Tasks */}
			{/* Recorrer las tasks y mostrar una por una */}
			{tasks && (
				<FlatList
					data={tasks}
					renderItem={({ item }) => (
						<View style={styles.item}>
							<Text>
								Title: {item.title} Description: {item.description}
							</Text>
							<Text style={styles.status}>{item.status}</Text>
						</View>
					)}
					keyExtractor={(item, index) => `${index}`}
				/>
			)}
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
})
