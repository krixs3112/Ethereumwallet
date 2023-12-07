import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createWallet} from '../services/ethereumService';

const CreateWalletScreen = ({navigation}) => {
  const [wallet, setWallet] = useState(null);

  const handleCreateWallet = () => {
    const newWallet = createWallet();
    setWallet(newWallet);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Wallet</Text>
      <Button title="Create Wallet" onPress={handleCreateWallet} />
      {wallet && (
        <View style={styles.walletInfo}>
          <Text>Address:</Text>
          <Text style={styles.walletText}>{wallet.address}</Text>
          <Text>Private Key:</Text>
          <Text style={styles.walletText}>{wallet.privateKey}</Text>
        </View>
      )}
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
  walletInfo: {
    marginTop: 20,
  },
  walletText: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'monospace',
  },
});

export default CreateWalletScreen;
