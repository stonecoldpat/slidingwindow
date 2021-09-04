pragma experimental ABIEncoderV2;
pragma solidity ^0.6.2;

contract BlockchainMock {

    // Help simulate block.basefee() as the EVM only supports fetching the current basefee. 
    struct Block {
        uint baseFee;
    }
    
    Block[] public blocks;

    // Testing purposes
    function setBlocks(uint[] memory fee) public {
        for(uint i=0; i<fee.length; i++) {
            Block memory block;
            block.baseFee = fee[i];
            blocks.push(block);
        }
    }
    

    // Should the caller consider this block congested? 
    function isCongested(uint blockNumber, uint maximumBaseFee) public view returns (bool) {

        if(blocks[blockNumber].baseFee > maximumBaseFee) {
            return true;
        }        
        
        return false; 
    } 
}