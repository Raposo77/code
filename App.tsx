import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LessonsScreen from './src/screens/LessonsScreen';
import VocabularyScreen from './src/screens/VocabularyScreen';
import ProfileScreen from './src/screens/ProfileScreen';

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
			screenOptions={{
				headerTitleAlign: 'center',
				tabBarLabelStyle: { fontSize: 12 },
			}}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Início' }} />
        <Tab.Screen name="Lessons" component={LessonsScreen} options={{ tabBarLabel: 'Aulas' }} />
        <Tab.Screen name="Vocabulary" component={VocabularyScreen} options={{ tabBarLabel: 'Vocabulário' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Perfil' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
