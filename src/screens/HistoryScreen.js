import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getTransactionHistory} from '../services/ethereumService';

const HistoryScreen = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const address = '4e8c7132722c4afdbe5a9e392e042b42';
    fetchTransactionHistory(address);
  }, []);

  const fetchTransactionHistory = async address => {
    try {
      const transactionHistory = await getTransactionHistory(address);
      setHistory(transactionHistory);
    } catch (error) {
      Alert.alert(
        'Error',
        `Error fetching transaction history: ${error.message}`,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction History</Text>
      {history.map((transaction, index) => (
        <View key={index} style={styles.transactionItem}>
          <Text>{`Transaction ${index + 1}:`}</Text>
          <Text style={styles.transactionHash}>{transaction.hash}</Text>
        </View>
      ))}
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
  transactionItem: {
    marginBottom: 10,
  },
  transactionHash: {
    fontFamily: 'monospace',
  },
});

export default HistoryScreen;
