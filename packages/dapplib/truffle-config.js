require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid area frame foot alien recipe place method coral light army genuine'; 
let testAccounts = [
"0x00a912bcbcc51c07928e8a64f1411df260ad24d54ccf30613f9080d0b926233a",
"0x82b2570843a96a1befccb46f1a1c7d918d3d0742a77586c65514acb4dbdf1978",
"0x7ca9b12860264c1c7b52b2795b9b3b2cf9198bac5ae2f76f292e3c4f3a8ac1a2",
"0x9804af155a3e3e7b1e0747ca5dac4a274bde7a673e3a2500357f82ed38606f15",
"0x61c2af735940040d3542399834fffdfaa3d34fd88ea8e40aca956ec11f0d7268",
"0x21234edfc6dbd90df6a46e331f1c1be817603f32a563497ddf6aa1fc217cf527",
"0xc7c2b2eee0b76e16fa0351ffb5050e8d3e08b6bd8039c2834500fabc4ba3f8e1",
"0xd2ea68b4f159254232a03c68fac6f433ca793d1800202eeac443a009327caf9f",
"0x3e2213c7beef7e5e91412d0a79f46e92b0551f127deb610cf443156e6cdd1e44",
"0x0e34b09778c6428989ee9c844c50ef774c95cfdaa16475b84b6de3f7323641b4"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

