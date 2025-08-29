import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'lessonProgress.v1';

export type LessonProgress = Record<string, boolean>;

export async function loadProgress(): Promise<LessonProgress> {
	try {
		const raw = await AsyncStorage.getItem(KEY);
		return raw ? (JSON.parse(raw) as LessonProgress) : {};
	} catch {
		return {};
	}
}

export async function saveProgress(progress: LessonProgress): Promise<void> {
	await AsyncStorage.setItem(KEY, JSON.stringify(progress));
}

export async function setLessonCompleted(lessonId: string, completed: boolean): Promise<LessonProgress> {
	const current = await loadProgress();
	const next = { ...current, [lessonId]: completed };
	await saveProgress(next);
	return next;
}

