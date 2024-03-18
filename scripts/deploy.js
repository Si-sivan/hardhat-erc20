
async function main() {
    const MyToken = await ethers.getContractFactory("MyToken");
    console.log("Deploying MyToken...");
    const mytoken = await MyToken.deploy();
    await mytoken.waitForDeployment();
    console.log(`MyToken deployed to: ${mytoken.target}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })