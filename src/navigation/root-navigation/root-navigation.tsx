import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../../screens/dashboard/dashboard';
import { DASHBOARD, PICKER, RECORD_LIST } from '../../global/route-names';
import { THEME } from '../../global/theme';
import Picker from '../../global/components/picker/picker';
import RecordList from '../../screens/dashboard/record/record-list/record-list';

const Stack = createStackNavigator();

/**
 * @description Navigation file
 * @memberof AppSapiens
 */
const RootNavigation = (): JSX.Element => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={DASHBOARD}
					component={Dashboard}
					options={{
						headerTitle: '',
						headerStyle: {
							backgroundColor: THEME.background,
							shadowColor: 'transparent',
						},
					}}
				/>
				<Stack.Screen
					name={PICKER}
					component={Picker}
					options={{
						headerTitle: '',
						headerStyle: {
							backgroundColor: THEME.background,
							shadowColor: 'transparent',
						},
					}}
				/>
				<Stack.Screen
					name={RECORD_LIST}
					component={RecordList}
					options={{
						headerTitle: '',
						headerStyle: {
							backgroundColor: THEME.background,
							shadowColor: 'transparent',
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;
