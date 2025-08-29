import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VocabularyScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Vocabulário</Text>
			<Text style={styles.subtitle}>Revise palavras e expressões essenciais.</Text>
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

