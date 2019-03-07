const LendingBoard = artifacts.require("./LendingBoard.sol");
const RequestManagement = artifacts.require(
    "./LendingRequests/RequestManagement.sol"
);
const ProposalFactory = artifacts.require(
    "./ProposalFactory/ProposalFactory.sol"
);
const ProposalManagement = artifacts.require(
    "./ProposalFactory/ProposalManagement.sol"
);
const TrustToken = artifacts.require(
    "./IcoContract/TrustToken.sol"
);

const fs = require("fs");
const path = require("path");
const configPath = path.join(
    __dirname,
    "..",
    "frontend",
    "deployed-config.json"
);

//constructor parameter LendingBoard
const minimumQuorum = 1;
const majorityMargin = 50;

//constructor parameter TrustToken
const name = "TrustToken";                                   
const decimals = 18;                                
const symbol = "TT";                               
const totalSupply = 100;

module.exports = async deployer => {
    await generateContractDeploymentConfig();
    await deployer.deploy(TrustToken,totalSupply,name,decimals,symbol);
    await deployer.deploy(LendingBoard,minimumQuorum,majorityMargin);

    await writeContractInfo(
        "icocontract",
        TrustToken.abi,
        TrustToken.address
    );
    
    await writeContractInfo(
        "lendingboard",
        LendingBoard.abi,
        LendingBoard.address
    );

    await deployer.deploy(RequestManagement, LendingBoard.address);
    await deployer.deploy(ProposalFactory);
    await deployer.deploy(ProposalManagement, ProposalFactory.address);
};

function generateContractDeploymentConfig() {
    const config = { contracts: {} };
    return new Promise(resolve => {
        fs.writeFile(configPath, JSON.stringify(config), "utf8", (err, data) =>
            resolve()
        );
    });
}

function writeContractInfo(contract, abi, address) {
    return new Promise((resolve, reject) => {
        fs.readFile(configPath, "utf8", (err, data) => {
            if (err) {
                console.log(err);
                reject();
            } else {
                obj = JSON.parse(data);
                obj.contracts[contract] = {
                    abi,
                    address
                };
                fs.writeFile(configPath, JSON.stringify(obj), "utf8", () =>
                    resolve()
                );
            }
        });
    });
}
