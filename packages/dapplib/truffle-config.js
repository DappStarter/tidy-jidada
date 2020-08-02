require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food pledge rate machine method coral light army genius'; 
let testAccounts = [
"0x73aa7d7c2085229fce53ae581063987659f5c50eb0808c58c0652999fb35e78e",
"0x1f94dd17e1a099bbd242bdeb6e5937d5783a68fd357c6e8b736ac4b0966ec962",
"0x3a28bcb0146d6ec53926c5e050b12dd0cb23a3f8ad9b4f0a0eff19167a0a7240",
"0xf5e5e52d3912f6d903103671ab6fa405a0470eede99b5e35c764cce874be3758",
"0xa75c5a67b0a134c38620d4d6c2b51fedc23cff01e24baae7517c9dbb96fe1ec7",
"0xe3e58584308fe43259535be62d0138f5bfb4275e2342a5018b23c9f293cf7cc3",
"0x5ec6825ab48dce784ceae438b258c839a3c433738dccf5328249366ad3bbe53f",
"0x928a67e2d56d1c1151bd6d5ea3a51b08670ccfaf3b7c3bc8275378148ea9c962",
"0x53ed892d879cf9c0e7a2a7764796ab23b3ab6d5ae5a8198f61bad0609c4dac4e",
"0x0983cdea744f8815594886774e958d6ebb816641af3fc386635c3edf6e5e12e9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
