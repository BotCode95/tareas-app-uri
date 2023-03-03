import { View, Text } from 'react-native'
import { Tasks } from '../components/Tasks'

export const Home = () => {
	return (
		<View>
			<Text>Tasks</Text>
			<Tasks />
		</View>
	)
}
