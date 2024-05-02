const ethers = requrie("ethers");

function main(){
// compilr them in our code 
// compile them seperately
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");// connection to the blockchain
const wallet = new ethers.Wallet("0xcbb652adad001cad5685745ce3b1717591dc234119299137c9d931946af18f48",provider); //wallet Connection
}
main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1)
})