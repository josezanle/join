import 'react-native-gesture-handler';
import * as React from 'react';
import { PermissionsProvider } from './app/context/PermissionsContext';
import { HomeStack } from './app/stacks/HomeStack';
import './app/stacks/LoginStack';
import { ThemeProvider } from './app/context/themeContext';
import SplashScreen from 'react-native-splash-screen';

const AppState = ({ children }) => {
  return (
    <ThemeProvider>
      <PermissionsProvider>{children}</PermissionsProvider>
    </ThemeProvider>
  );
};

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AppState>
      <HomeStack />
      {/* <LoginStack /> */}
    </AppState>
  );
}
