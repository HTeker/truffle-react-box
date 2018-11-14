pragma solidity ^0.4.24;

contract Election {

    struct ElectionStruct {
        uint id;
        address creatorAddress;
        string name;
        bool isActive;
    }

    ElectionStruct[] public elections;

    constructor() public {

        elections.push(ElectionStruct(1, msg.sender, "Old election", false));
        elections.push(ElectionStruct(2, msg.sender, "New election", true));

    }

    function getElectionsCount() public view returns(uint) {
        return elections.length;
    }

    function getElectionByIndex(uint index) public view returns(uint, address, string, bool) {

        return (elections[index].id, elections[index].creatorAddress, elections[index].name, elections[index].isActive);

    }

}