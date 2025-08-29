import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme/theme';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Benvenuto! 🇮🇹</Text>
			<Text style={styles.subtitle}>Comece sua jornada de italiano.</Text>
			<TouchableOpacity style={styles.ctaButton}>
				<Text style={styles.ctaText}>Começar agora</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.colors.background,
	},
	title: {
		fontSize: 28,
		fontWeight: '600',
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: theme.colors.subtext,
		marginBottom: 16,
	},
	ctaButton: {
		backgroundColor: theme.colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
	},
	ctaText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
	},
});

