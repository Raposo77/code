import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LessonsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Aulas</Text>
			<Text style={styles.subtitle}>Prossiga pelas lições passo a passo.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 22,
		fontWeight: '600',
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: '#666',
	},
});

