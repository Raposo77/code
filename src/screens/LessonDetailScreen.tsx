import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { lessons } from '../data/lessons';
import { theme } from '../theme/theme';
import { setLessonCompleted, loadProgress } from '../storage/progress';

type RootStackParamList = {
	LessonDetail: { id: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'LessonDetail'>;

export default function LessonDetailScreen({ route }: Props) {
	const { id } = route.params;
	const lesson = lessons.find((l) => l.id === id);
	const [completed, setCompleted] = React.useState(false);

	React.useEffect(() => {
		loadProgress().then((p) => setCompleted(Boolean(p[id])));
	}, [id]);

	if (!lesson) {
		return (
			<View style={styles.container}> 
				<Text style={styles.title}>Aula não encontrada</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<Text style={styles.title}>{lesson.title}</Text>
				<Text style={styles.desc}>{lesson.description}</Text>
				{lesson.content.map((line, idx) => (
					<Text key={idx} style={styles.line}>• {line}</Text>
				))}
			</ScrollView>
			<View style={styles.footer}>
				<TouchableOpacity
					style={[styles.btn, completed ? styles.btnSecondary : styles.btnPrimary]}
					onPress={async () => {
						const next = !completed;
						await setLessonCompleted(id, next);
						setCompleted(next);
					}}
				>
					<Text style={styles.btnText}>{completed ? 'Marcar como não concluída' : 'Marcar como concluída'}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	scrollContent: {
		padding: theme.spacing.lg,
	},
	title: {
		fontSize: 22,
		fontWeight: '700',
		marginBottom: 6,
		color: theme.colors.text,
	},
	desc: {
		fontSize: 14,
		color: theme.colors.subtext,
		marginBottom: theme.spacing.md,
	},
	line: {
		fontSize: 16,
		color: theme.colors.text,
		marginBottom: 8,
	},
	footer: {
		padding: theme.spacing.lg,
		borderTopWidth: 1,
		borderTopColor: theme.colors.muted,
	},
	btn: {
		paddingVertical: 12,
		borderRadius: 8,
		alignItems: 'center',
	},
	btnPrimary: {
		backgroundColor: theme.colors.primary,
	},
	btnSecondary: {
		backgroundColor: theme.colors.accent,
	},
	btnText: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 16,
	},
});

