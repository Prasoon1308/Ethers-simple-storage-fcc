const ethers = require("ethers");
const fs = require("fs-extra");

//synchronous [solidity]
//asynchronous [javascript]
//solc-js repository in github

async function main() {
  console.log("hi");
  let variable = 5;
  console.log(variable);
  const provider = new ethers.providers.JsonRpcBatchProvider(
    "http://0.0.0.0:8545"
  );
  const wallet = new ethers.wallet("", provider); //private key in ""
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying thew contract... please wait!");
  const contract = await contractFactory.deploy(); //STOP here and wait for the contract to deploy
  console.log(contract);
  const transactionReceipt = await contract.deploymentReceipt.wait(1); //we get the receipt only when we wait for the transaction
  console.log("Here is the deployment transaction (transaction response)");// we get this just when we create a transaction
  console.log(contract.deployTransaction);
  console.log("Here is the transaction receipt.");
  console.log(transactionReceipt);

//   console.log("Let's deploy with only transaction data!");
//   const nonce = await wallet.getTransactionCount();
//   const tx = {
//     nonce: nonce, //number of transactions already occured from the account
//     gasPrice: 20000000000,
//     gasLimit: 1000000,
//     to: null,
//     value: 0,
//     // data: => account id
//     chainId: 1337, //chain id from ganache network or metamask
//   };
//   const sentTxResponse = await wallet.sendTransaction(tx);
//   await sentTxResponse.wait(1);
//   console.log(sentTxResponse); // the transaction is first signed and then sent
// }

// deploy a contract? Wait for it to be deployed when async is used
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// to call main as asynchronous function

// yarn solcjs --help : in terminal for yarn help
// yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o .SimpleStorage.sol
