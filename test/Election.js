const Election = artifacts.require("./Election.sol");

contract('Election', async () => {

    contract('getElectionsCount()', async () => {

        it('should return 2', async () => {

            let instance = await Election.deployed();
            let result = await instance.getElectionsCount();
            assert.equal(result, 2);

        });

    });

    contract('getElectionByIndex(uint index)', async () => {

        it('should return an election by an index', async () => {

            let instance = await Election.deployed();
            let result = await instance.getElectionByIndex(0);

            result[0] = result[0].toNumber(); //converting to int because Solidity returns BigNumber for ints, which is hard to test

            assert.equal(result[0], 1);
            assert.equal(result[1], "0x67c3f3626218168696e84595d8544f2cc708e978");
            assert.equal(result[2], "Old election");
            assert.equal(result[3], false);

            // TODO: this test fails, although it is the same as the lines above, not sure why
            //assert.equal(result, [1, "0x67c3f3626218168696e84595d8544f2cc708e978", "Old election", false]);

        });
        
    });

});