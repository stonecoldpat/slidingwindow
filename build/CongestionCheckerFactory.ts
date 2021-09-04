/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { CongestionChecker } from "./CongestionChecker";

export class CongestionCheckerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<CongestionChecker> {
    return super.deploy() as Promise<CongestionChecker>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): CongestionChecker {
    return super.attach(address) as CongestionChecker;
  }
  connect(signer: Signer): CongestionCheckerFactory {
    return super.connect(signer) as CongestionCheckerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CongestionChecker {
    return new Contract(address, _abi, signerOrProvider) as CongestionChecker;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "blocks",
    outputs: [
      {
        internalType: "uint256",
        name: "baseFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maximumBaseFee",
        type: "uint256"
      }
    ],
    name: "isCongested",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "k",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "n",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maximumBaseFee",
        type: "uint256"
      }
    ],
    name: "isPeriodUncongested",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "fee",
        type: "uint256[]"
      }
    ],
    name: "setBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061054c806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632f13a0ac146100515780637fb342ee1461007a5780639157447d1461008f578063f25b3f99146100a2575b600080fd5b61006461005f3660046103ed565b6100c2565b604051610071919061041e565b60405180910390f35b61008d61008836600461031c565b610246565b005b61006461009d3660046103cc565b6102b5565b6100b56100b03660046103b4565b6102eb565b60405161007191906104c6565b6000838310156100ed5760405162461bcd60e51b81526004016100e49061047d565b60405180910390fd5b60005483111561010f5760405162461bcd60e51b81526004016100e490610429565b6000805460408051918890038083526020808202840101909152606091908015610143578160200160208202803883390190505b509050865b8588018110156101a25761015c81866102b5565b82828151811061016857fe5b60200260200101901515908115158152505081818151811061018657fe5b60200260200101511561019a578260010192505b600101610148565b508685015b6000548110156102365781868203815181106101bf57fe5b6020026020010151156101d3576001830392505b6101dd81866102b5565b8282815181106101e957fe5b60200260200101901515908115158152505081818151811061020757fe5b60200260200101511561021b578260010192505b86831061022e576001935050505061023e565b6001016101a7565b506000925050505b949350505050565b60005b81518110156102b15761025a610309565b82828151811061026657fe5b60209081029190910101518152600080546001818101835591805291517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639092019190915501610249565b5050565b600081600084815481106102c557fe5b906000526020600020016000015411156102e1575060016102e5565b5060005b92915050565b600081815481106102f857fe5b600091825260209091200154905081565b6040518060200160405280600081525090565b6000602080838503121561032e578182fd5b823567ffffffffffffffff811115610344578283fd5b80840185601f820112610355578384fd5b8035915061036a610365836104f6565b6104cf565b8281528381019082850185850284018601891015610386578687fd5b8693505b848410156103a857803583526001939093019291850191850161038a565b50979650505050505050565b6000602082840312156103c5578081fd5b5035919050565b600080604083850312156103de578081fd5b50508035926020909101359150565b60008060008060808587031215610402578182fd5b5050823594602084013594506040840135936060013592509050565b901515815260200190565b60208082526034908201527f546f74616c20626c6f636b732073686f756c64206265206772656174657220746040820152733430b7101437b91032b8bab0b6103a379490271760611b606082015260800190565b60208082526029908201527f4e2073686f756c642062652067726561746572207468616e20286f722065717560408201526830b6103a379490259760b91b606082015260800190565b90815260200190565b60405181810167ffffffffffffffff811182821017156104ee57600080fd5b604052919050565b600067ffffffffffffffff82111561050c578081fd5b506020908102019056fea2646970667358221220d0521465bba70086bf6dee2a71c3c6ea18b87433ca9a5aa85e3c9ff51cd6e56064736f6c63430006020033";