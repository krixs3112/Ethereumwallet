import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const SendScreen = () => {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = async () => {
    try {
      const privateKey = '4e8c7132722c4afdbe5a9e392e042b42';
      const wallet = new ethers.Wallet(privateKey);
      const transactionHash = await sendTransaction(wallet, toAddress, amount);
      Alert.alert('Transaction Sent', `Transaction Hash: ${transactionHash}`);
    } catch (error) {
      Alert.alert('Error', `Error sending transaction: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Send Ethereum</Text>
      <TextInput
        style={styles.input}
        placeholder="Recipient Address"
        value={toAddress}
        onChangeText={setToAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount (ETH)"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Send" onPress={handleSend} />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default SendScreen;
