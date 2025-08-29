import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { lessons } from '../data/lessons';
import { theme } from '../theme/theme';
import { loadProgress } from '../storage/progress';


type RootStackParamList = {
	LessonsList: undefined;
	LessonDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function LessonsListScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'LessonsList'>) {
	const [progressById, setProgressById] = React.useState<Record<string, boolean>>({});
	React.useEffect(() => {
		loadProgress().then(setProgressById);
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={lessons}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.card}
						onPress={() => navigation.navigate('LessonDetail', { id: item.id })}
					>
						<View style={styles.cardHeader}>
							<Text style={styles.cardTitle}>{item.title}</Text>
							<Text style={[styles.badge, progressById[item.id] && styles.badgeDone]}>
								{progressById[item.id] ? 'Concluída' : 'Nova'}
							</Text>
						</View>
						<Text style={styles.cardDesc}>{item.description}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

export default function LessonsScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="LessonsList" component={LessonsListScreen} options={{ title: 'Aulas' }} />
			<Stack.Screen name="LessonDetail" getComponent={() => require('./LessonDetailScreen').default} options={{ title: 'Aula' }} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		padding: theme.spacing.md,
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: theme.spacing.md,
		marginBottom: theme.spacing.md,
		borderWidth: 1,
		borderColor: theme.colors.muted,
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 6,
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: theme.colors.text,
	},
	cardDesc: {
		fontSize: 14,
		color: theme.colors.subtext,
	},
	badge: {
		paddingHorizontal: 10,
		paddingVertical: 4,
		backgroundColor: theme.colors.muted,
		borderRadius: 999,
		fontSize: 12,
		color: '#111',
	},
	badgeDone: {
		backgroundColor: theme.colors.accent,
		color: '#fff',
	},
});

