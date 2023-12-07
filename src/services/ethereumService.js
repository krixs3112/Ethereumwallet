import {ethers} from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/4e8c7132722c4afdbe5a9e392e042b42',
);

const createWallet = () => {
  const wallet = ethers.Wallet.createRandom();
  return wallet;
};

const sendTransaction = async (wallet, to, value) => {
  const transaction = await wallet.sendTransaction({
    to,
    value: ethers.utils.parseEther(value),
  });

  await transaction.wait();
  return transaction.hash;
};

const getTransactionHistory = async address => {
  const history = await provider.getHistory(address);
  return history;
};

export {createWallet, sendTransaction, getTransactionHistory};
