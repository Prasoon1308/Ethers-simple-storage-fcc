const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJsonKey = await ethers.encrypt(
        process.env.PRIVATE_KEY_PASSWORD,
        process.env.PRIVATE_KEY
    );
    console.log(encryptedJsonKey);
    fs.writeFileSync("./.encryptedKey.js", encryptedJsonKey); //we are passing the encryptedJsonKey to a new file encryptedKey.js
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
