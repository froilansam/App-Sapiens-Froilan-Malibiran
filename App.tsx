import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import RootNavigation from './src/navigation/root-navigation/root-navigation';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from './src/store/root-store';
import { darkTheme, lightTheme } from './src/global/theme';

const App = observer(
	(): JSX.Element => {
		const { themeStore } = useContext(RootStoreContext);
		const { theme } = themeStore;

		return (
			<ThemeProvider theme={theme.isDay ? lightTheme : darkTheme}>
				<StatusBar style="light" />
				<RootNavigation />
			</ThemeProvider>
		);
	},
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
