import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import RootNavigation from './src/navigation/root-navigation/root-navigation';

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<RootNavigation />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
