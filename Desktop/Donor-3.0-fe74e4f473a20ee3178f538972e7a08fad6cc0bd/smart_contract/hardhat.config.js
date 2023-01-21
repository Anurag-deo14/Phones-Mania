//https://eth-goerli.g.alchemy.com/v2/TYSpkabRL9z0XBC5iTcFuEgTCJtp0xDC
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/TYSpkabRL9z0XBC5iTcFuEgTCJtp0xDC',
      accounts: ['d1d8130325b36bf02add62b633bae8bc4f63da15d68968dc47cb8b4677c9c1f9'],
    },
  },
};