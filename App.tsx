import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LessonsScreen from './src/screens/LessonsScreen';
import VocabularyScreen from './src/screens/VocabularyScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { theme } from './src/theme/theme';

const AppTheme: Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#ffffff',
	},
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <StatusBar style="auto" />
      <Tab.Navigator
			initialRouteName="Home"
        screenOptions={({ route }) => ({
				headerTitleAlign: 'center',
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.subtext,
				tabBarLabelStyle: { fontSize: 12 },
				tabBarIcon: ({ color, size }) => {
					const iconName =
						route.name === 'Home' ? 'home' :
						route.name === 'Lessons' ? 'book' :
						route.name === 'Vocabulary' ? 'albums' :
						'person';
					return <Ionicons name={iconName as any} size={size ?? 20} color={color} />;
				},
			})}
		>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Início' }} />
        <Tab.Screen name="Lessons" component={LessonsScreen} options={{ tabBarLabel: 'Aulas' }} />
        <Tab.Screen name="Vocabulary" component={VocabularyScreen} options={{ tabBarLabel: 'Vocabulário' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Perfil' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
