import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './screens/Game';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/download.png')}  // Make sure this exists
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}> {/* Needed to apply layout over background */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Game" component={GameScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(70, 10, 10, 0.9)', // optional semi-transparent overlay
  },
});
