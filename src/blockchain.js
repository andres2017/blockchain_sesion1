const Block = require('./block');

class Blockchain{

    constructor(){
        this.chain = [this.crateGenesisBlock()];
    }
    crateGenesisBlock(){
        return new Block(0,"20/08/2024","Genesis Block", "0");
    }
    getlatesBlock(){
        return this.chain[this.chain.length -1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getlatesBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock)
    }
    isChainValid(){
        for(let i= 1; i < this.chain.length; i++){
            const currenBlock = this.chain[1];
            const previousHash = this.chain[i -1];
            if(currenBlock.hash !== currenBlock.calculateHash()){
                return false
            }
            if(currenBlock.previousHash !== previousHash.hash){
                return false
            }
        }

        return true;

    }
}

module.exports = Blockchain;