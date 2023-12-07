import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ethereum Wallet App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Create Wallet"
          onPress={() => navigation.navigate('CreateWallet')}
        />
        <Button
          title="Send Ethereum"
          onPress={() => navigation.navigate('Send')}
        />
        <Button
          title="Transaction History"
          onPress={() => navigation.navigate('History')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
});

export default HomeScreen;
