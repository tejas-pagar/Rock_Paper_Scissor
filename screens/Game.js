import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const choices = [
  { name: 'Rock', uri: 'https://img.icons8.com/color/96/rock.png' },
  { name: 'Paper', uri: 'https://img.icons8.com/color/96/paper.png' },
  { name: 'Scissors', uri: 'https://img.icons8.com/color/96/scissors.png' }
];

const getResult = (user, comp) => {
  if (user === comp) return "It's a draw!";
  if (
    (user === 'Rock' && comp === 'Scissors') ||
    (user === 'Scissors' && comp === 'Paper') ||
    (user === 'Paper' && comp === 'Rock')
  )
    return 'You win!';
  return 'You lose!';
};

const GameScreen = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)].name;
    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(getResult(choice, compChoice));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✊ Rock Paper Scissors ✌️</Text>
      <Text style={styles.result}>{result}</Text>

      <View style={styles.choicesContainer}>
        {choices.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.choiceButton}
            onPress={() => playGame(item.name)}
          >
            <Image source={{ uri: item.uri }} style={styles.icon} />
            <Text style={styles.choiceText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {userChoice && (
        <View style={styles.statusContainer}>
          <Text style={styles.status}>You chose: {userChoice}</Text>
          <Text style={styles.status}>Computer chose: {computerChoice}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  result: { fontSize: 22, color: '#333', marginBottom: 20 },
  choicesContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  choiceButton: { alignItems: 'center', padding: 10 },
  icon: { width: 80, height: 80 },
  choiceText: { fontSize: 16, marginTop: 5 },
  statusContainer: { marginTop: 30, alignItems: 'center' },
  status: { fontSize: 18, marginVertical: 5 }
});

export default GameScreen;
