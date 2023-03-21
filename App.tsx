import { StyleSheet, View } from 'react-native'
import { Home } from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { Tabs } from './src/Navigation/Tabs/Tabs'

export default function App() {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
})
