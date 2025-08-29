import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';
import { theme } from '../theme/theme';
import { vocabulary } from '../data/vocabulary';

export default function VocabularyScreen() {
	const [index, setIndex] = React.useState(0);
	const item = vocabulary[index];

	const speak = (text: string) => {
		Speech.speak(text, { language: 'it-IT' });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Flashcards</Text>
			<View style={styles.card}>
				<Text style={styles.italian}>{item.italian}</Text>
				<Text style={styles.translation}>{item.translation}</Text>
				<View style={styles.row}>
					<TouchableOpacity style={styles.btn} onPress={() => speak(item.italian)}>
						<Text style={styles.btnText}>Ouvir</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.btn, styles.btnSecondary]}
						onPress={() => setIndex((prev) => (prev + 1) % vocabulary.length)}
					>
						<Text style={styles.btnText}>Próximo</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		padding: theme.spacing.lg,
	},
	title: {
		fontSize: 22,
		fontWeight: '700',
		marginBottom: theme.spacing.md,
		textAlign: 'center',
		color: theme.colors.text,
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: theme.spacing.lg,
		borderWidth: 1,
		borderColor: theme.colors.muted,
		alignItems: 'center',
	},
	italian: {
		fontSize: 28,
		fontWeight: '700',
		marginBottom: 6,
		color: theme.colors.text,
	},
	translation: {
		fontSize: 18,
		color: theme.colors.subtext,
		marginBottom: theme.spacing.md,
	},
	row: {
		flexDirection: 'row',
		gap: theme.spacing.md as unknown as number,
	},
	btn: {
		backgroundColor: theme.colors.primary,
		paddingVertical: 10,
		paddingHorizontal: 16,
		borderRadius: 8,
		marginRight: theme.spacing.md,
	},
	btnSecondary: {
		backgroundColor: theme.colors.accent,
	},
	btnText: {
		color: '#fff',
		fontWeight: '600',
	},
});

