import { Text, TextInput, View, StyleSheet } from 'react-native'

export const Tasks = () => {
	return (
		<View>
			<Text style={styles.text_primary}>Title</Text>
			<TextInput style={styles.input} />
			<Text>Description</Text>
			<TextInput style={styles.input} />
		</View>
	)
}
const styles = StyleSheet.create({
	text_primary: {
		textAlign: 'center',
	},
	input: {
		marginTop: 10,
		height: 50,
		borderColor: '#e1e1e1',
		borderWidth: 1,
		borderStyle: 'solid',
	},
})
