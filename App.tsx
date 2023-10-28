import { RootSiblingParent } from 'react-native-root-siblings';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './src/store';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import Dashboard from './src/features/dashboard';

export type RootStackParamList = {
  Dashboard: undefined;
};

const persistor = persistStore(store);
const Stack = createStackNavigator<RootStackParamList>();

export default function () {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>
  );
}

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
