//importing thers and JsonRpcProvider
const ethers = require('ethers');
const fs = require('fs-extra');
async function main() {
  // Json Rpc Provider - Connecting to local blockchain
  const provider = new ethers.providers.JsonRpcProvider('http://172.29.176.1:7545'); // add your rpc server url from Ganache

  // Connect to wallet to sign transactions
  const wallet = new ethers.Wallet(
    '0xd210f9d2cffc876501cd5d77bc90f07ac3a127bbbb0cd5855818bb94a8f3cf94',
    provider
  );

  //Read ABI which you get post compilation using solc
  const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8');
  
  //Read Binary which you get post compilation using solc
  const binary = fs.readFileSync(
    './SimpleStorage_sol_SimpleStorage.bin',
    'utf8'
  );

  //Create Contract factory object to deploy
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log('Deploying, Please wait...');
  
  // Deploy and you are good to go
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });