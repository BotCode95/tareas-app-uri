import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Home } from '../../screens/Home'
import { EditTaks } from '../../screens/EditTaks'

const Tab = createBottomTabNavigator()

export const Tabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" options={{ title: 'Home' }} component={Home} />
			<Tab.Screen
				name="Edit"
				options={{ title: 'Edit' }}
				component={EditTaks}
			/>
		</Tab.Navigator>
	)
}
