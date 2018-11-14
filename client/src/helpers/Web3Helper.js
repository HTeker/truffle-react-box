import ElectionContract from "../contracts/Election.json";
import getWeb3 from "../utils/getWeb3";
import truffleContract from "truffle-contract";

class Web3Helper {

    static web3 = null
    static accounts = null
    static contracts = {}

    static init = () => {

        return new Promise((resolve, reject) => {

            try {

                const Election = truffleContract(ElectionContract);
    
                getWeb3()
                .then(web3 => {
                    Web3Helper.web3 = web3;
                    return Web3Helper.web3.eth.getAccounts()
                })
                .then(accounts => {
                    Web3Helper.accounts = accounts;
                    Election.setProvider(Web3Helper.web3.currentProvider);
                    return Election.deployed();
                })
                .then(contract => {
                    Web3Helper.contracts.Election = contract;
                    resolve();
                })
                .catch(console.log);
    
            } catch(err) {
    
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.log(err);
                reject(err);
    
            }

        });

    }

}

export default Web3Helper;