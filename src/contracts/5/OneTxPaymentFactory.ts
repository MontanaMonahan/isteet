/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { OneTxPayment } from "./OneTxPayment";

export class OneTxPaymentFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<OneTxPayment> {
    return super.deploy(overrides) as Promise<OneTxPayment>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): OneTxPayment {
    return super.attach(address) as OneTxPayment;
  }
  connect(signer: Signer): OneTxPaymentFactory {
    return super.connect(signer) as OneTxPaymentFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OneTxPayment {
    return new Contract(address, _abi, signerOrProvider) as OneTxPayment;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "ExtensionInitialised",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address"
      }
    ],
    name: "LogSetAuthority",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "LogSetOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "agent",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundamentalId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nPayouts",
        type: "uint256"
      }
    ],
    name: "OneTxPaymentMade",
    type: "event"
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract DSAuthority",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getColony",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDeprecated",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract DSAuthority",
        name: "authority_",
        type: "address"
      }
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address"
      }
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "identifier",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_colony",
        type: "address"
      }
    ],
    name: "install",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "finishUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_deprecated",
        type: "bool"
      }
    ],
    name: "deprecate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "uninstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_permissionDomainId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_childSkillIndex",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_callerPermissionDomainId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_callerChildSkillIndex",
        type: "uint256"
      },
      {
        internalType: "address payable[]",
        name: "_workers",
        type: "address[]"
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "_domainId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_skillId",
        type: "uint256"
      }
    ],
    name: "makePayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_permissionDomainId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_childSkillIndex",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_callerPermissionDomainId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_callerChildSkillIndex",
        type: "uint256"
      },
      {
        internalType: "address payable[]",
        name: "_workers",
        type: "address[]"
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "_domainId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_skillId",
        type: "uint256"
      }
    ],
    name: "makePaymentFundedFromDomain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a26124c68061005e6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80637998a1c41161008c5780639251cff4116100665780639251cff41461019b578063bf7e214f146101ae578063bfd68ab7146101b6578063fcf6ba93146101be576100ea565b80637998a1c41461016b5780637a9e5e4b146101735780638da5cb5b14610186576100ea565b80632a2678bb116100c85780632a2678bb1461011f578063340df28f1461013257806354fd4d501461013a5780636bf2dc4314610158576100ea565b80630d638f30146100ef57806313af4035146100f95780632a1b8f9b1461010c575b600080fd5b6100f76101d3565b005b6100f7610107366004611e4f565b61021c565b6100f761011a366004611e4f565b61029e565b6100f761012d36600461203d565b61031b565b6100f7610c56565b610142610c8a565b60405161014f91906121ae565b60405180910390f35b6100f761016636600461203d565b610c8f565b61014261152e565b6100f7610181366004611e4f565b611552565b61018e6115d0565b60405161014f919061210a565b6100f76101a9366004611e72565b6115df565b61018e611614565b61018e611623565b6101c6611632565b60405161014f91906121a3565b6101e9336000356001600160e01b031916611642565b61020e5760405162461bcd60e51b815260040161020590612242565b60405180910390fd5b6003546001600160a01b0316ff5b610232336000356001600160e01b031916611642565b61024e5760405162461bcd60e51b815260040161020590612242565b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b6102b4336000356001600160e01b031916611642565b6102d05760405162461bcd60e51b815260040161020590612242565b6003546001600160a01b0316156102f95760405162461bcd60e51b81526004016102059061230c565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b8351855114801561032d575082518551145b6103495760405162461bcd60e51b815260040161020590612343565b60035460405163066a9e2760e31b81526001600160a01b0390911690633354f138906103829033908b906005908c90899060040161211e565b60206040518083038186803b15801561039a57600080fd5b505afa1580156103ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d29190611e8e565b8015610462575060035460405163066a9e2760e31b81526001600160a01b0390911690633354f138906104129033908b906006908c90899060040161211e565b60206040518083038186803b15801561042a57600080fd5b505afa15801561043e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104629190611e8e565b61047e5760405162461bcd60e51b815260040161020590612270565b8451600114156107b75760035485516000916001600160a01b031690634f8df643908c908c908a9086906104ae57fe5b6020026020010151896000815181106104c357fe5b6020026020010151896000815181106104d857fe5b602002602001015189896040518863ffffffff1660e01b815260040161050497969594939291906121b7565b602060405180830381600087803b15801561051e57600080fd5b505af1158015610532573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105569190612025565b600354604051631940541b60e11b81529192506000916001600160a01b0390911690633280a8369061058c9085906004016121ae565b60006040518083038186803b1580156105a457600080fd5b505afa1580156105b8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105e09190810190611f76565b6040908101516003549151630d3d4c7160e11b81529092506000916001600160a01b031690631a7a98e2906106199088906004016121ae565b604080518083038186803b15801561063057600080fd5b505afa158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190611eaa565b6020015190506106a48c8c83858a60008151811061068257fe5b60200260200101518c60008151811061069757fe5b6020026020010151611720565b6003546040516306cb0d2160e51b81526001600160a01b039091169063d961a420906106d8908f908f9088906004016121f3565b600060405180830381600087803b1580156106f257600080fd5b505af1158015610706573d6000803e3d6000fd5b505060035489516001600160a01b039091169250630f4c52f3915085908a9060009061072e57fe5b60200260200101516040518363ffffffff1660e01b81526004016107539291906123b1565b600060405180830381600087803b15801561076d57600080fd5b505af1158015610781573d6000803e3d6000fd5b5050505060008051602061247183398151915233848a516040516107a793929190612155565b60405180910390a1505050610c4b565b60035460405163a5487a3760e01b81526000916001600160a01b03169063a5487a37906107ec908d908d9088906004016121f3565b602060405180830381600087803b15801561080657600080fd5b505af115801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e9190612025565b6003546040516374b556c360e11b81529192506000916001600160a01b039091169063e96aad86906108749085906004016121ae565b60c06040518083038186803b15801561088c57600080fd5b505afa1580156108a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c49190611ef2565b6040908101516003549151630d3d4c7160e11b81529092506000916001600160a01b031690631a7a98e2906108fd9088906004016121ae565b604080518083038186803b15801561091457600080fd5b505afa158015610928573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094c9190611eaa565b6020015190506109608c8c83858b8b611796565b6000805b8951821015610c10578115806109b5575089600183038151811061098457fe5b60200260200101516001600160a01b03168a83815181106109a157fe5b60200260200101516001600160a01b031614155b15610b1657811580610a0157508960018303815181106109d157fe5b60200260200101516001600160a01b03168a83815181106109ee57fe5b60200260200101516001600160a01b0316115b610a1d5760405162461bcd60e51b8152600401610205906122d5565b6003548a516001909201916001600160a01b03909116906317b46cb790879084908e9087908110610a4a57fe5b60200260200101516040518463ffffffff1660e01b8152600401610a70939291906123c8565b600060405180830381600087803b158015610a8a57600080fd5b505af1158015610a9e573d6000803e3d6000fd5b5050505085600014610b1157600354604051637d09f6b960e11b81526001600160a01b039091169063fa13ed7290610ade90889085908b906004016121f3565b600060405180830381600087803b158015610af857600080fd5b505af1158015610b0c573d6000803e3d6000fd5b505050505b610b70565b886001830381518110610b2557fe5b60200260200101516001600160a01b0316898381518110610b4257fe5b60200260200101516001600160a01b031611610b705760405162461bcd60e51b81526004016102059061237a565b60035489516001600160a01b039091169063476d1d0590879084908d9087908110610b9757fe5b60200260200101518c8781518110610bab57fe5b60200260200101516040518563ffffffff1660e01b8152600401610bd294939291906123e7565b600060405180830381600087803b158015610bec57600080fd5b505af1158015610c00573d6000803e3d6000fd5b5050600190930192506109649050565b610c1b858b8b611867565b60008051602061247183398151915233868c51604051610c3d93929190612155565b60405180910390a150505050505b505050505050505050565b610c6c336000356001600160e01b031916611642565b610c885760405162461bcd60e51b815260040161020590612242565b565b600190565b83518551148015610ca1575082518551145b610cbd5760405162461bcd60e51b815260040161020590612343565b60035460405163066a9e2760e31b81526001600160a01b0390911690633354f13890610cf79033906001906005908e90899060040161211e565b60206040518083038186803b158015610d0f57600080fd5b505afa158015610d23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d479190611e8e565b8015610dd7575060035460405163066a9e2760e31b81526001600160a01b0390911690633354f13890610d879033908b906006908c90899060040161211e565b60206040518083038186803b158015610d9f57600080fd5b505afa158015610db3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd79190611e8e565b610df35760405162461bcd60e51b815260040161020590612270565b84516001141561111a5760035485516000916001600160a01b031690634f8df643906001908c908a908690610e2457fe5b602002602001015189600081518110610e3957fe5b602002602001015189600081518110610e4e57fe5b602002602001015189896040518863ffffffff1660e01b8152600401610e7a97969594939291906121b7565b602060405180830381600087803b158015610e9457600080fd5b505af1158015610ea8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecc9190612025565b600354604051631940541b60e11b81529192506000916001600160a01b0390911690633280a83690610f029085906004016121ae565b60006040518083038186803b158015610f1a57600080fd5b505afa158015610f2e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f569190810190611f76565b604001519050600360009054906101000a90046001600160a01b03166001600160a01b031663c68d19ea60016000198d6001868b600081518110610f9657fe5b60200260200101518d600081518110610fab57fe5b60200260200101516040518863ffffffff1660e01b8152600401610fd59796959493929190612209565b600060405180830381600087803b158015610fef57600080fd5b505af1158015611003573d6000803e3d6000fd5b50506003546040516306cb0d2160e51b81526001600160a01b03909116925063d961a420915061103c906001908e9087906004016121f3565b600060405180830381600087803b15801561105657600080fd5b505af115801561106a573d6000803e3d6000fd5b505060035488516001600160a01b039091169250630f4c52f391508490899060009061109257fe5b60200260200101516040518363ffffffff1660e01b81526004016110b79291906123b1565b600060405180830381600087803b1580156110d157600080fd5b505af11580156110e5573d6000803e3d6000fd5b505050506000805160206124718339815191523383895160405161110b93929190612155565b60405180910390a15050610c4b565b60035460405163a5487a3760e01b81526000916001600160a01b03169063a5487a3790611150906001908d9088906004016121f3565b602060405180830381600087803b15801561116a57600080fd5b505af115801561117e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a29190612025565b6003546040516374b556c360e11b81529192506000916001600160a01b039091169063e96aad86906111d89085906004016121ae565b60c06040518083038186803b1580156111f057600080fd5b505afa158015611204573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112289190611ef2565b60400151905061123a8a8288886119bc565b6000805b88518210156114ea5781158061128f575088600183038151811061125e57fe5b60200260200101516001600160a01b031689838151811061127b57fe5b60200260200101516001600160a01b031614155b156113f0578115806112db57508860018303815181106112ab57fe5b60200260200101516001600160a01b03168983815181106112c857fe5b60200260200101516001600160a01b0316115b6112f75760405162461bcd60e51b8152600401610205906122d5565b60035489516001909201916001600160a01b03909116906317b46cb790869084908d908790811061132457fe5b60200260200101516040518463ffffffff1660e01b815260040161134a939291906123c8565b600060405180830381600087803b15801561136457600080fd5b505af1158015611378573d6000803e3d6000fd5b50505050846000146113eb57600354604051637d09f6b960e11b81526001600160a01b039091169063fa13ed72906113b890879085908a906004016121f3565b600060405180830381600087803b1580156113d257600080fd5b505af11580156113e6573d6000803e3d6000fd5b505050505b61144a565b8760018303815181106113ff57fe5b60200260200101516001600160a01b031688838151811061141c57fe5b60200260200101516001600160a01b03161161144a5760405162461bcd60e51b81526004016102059061237a565b60035488516001600160a01b039091169063476d1d0590869084908c908790811061147157fe5b60200260200101518b878151811061148557fe5b60200260200101516040518563ffffffff1660e01b81526004016114ac94939291906123e7565b600060405180830381600087803b1580156114c657600080fd5b505af11580156114da573d6000803e3d6000fd5b50506001909301925061123e9050565b6114f5848a8a611867565b60008051602061247183398151915233858b5160405161151793929190612155565b60405180910390a150505050505050505050505050565b7fa89bc527362fca70a521a083b19b3b6bad9d33d24617254f625ef38bda0407cd90565b611568336000356001600160e01b031916611642565b6115845760405162461bcd60e51b815260040161020590612242565b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6001546001600160a01b031681565b6115f5336000356001600160e01b031916611642565b6116115760405162461bcd60e51b815260040161020590612242565b50565b6000546001600160a01b031681565b6003546001600160a01b031690565b600354600160a01b900460ff1690565b60006001600160a01b03831630141561165d5750600161171a565b6001546001600160a01b038481169116141561167b5750600161171a565b6000546001600160a01b03166116935750600061171a565b60005460405163b700961360e01b81526001600160a01b039091169063b7009613906116c790869030908790600401612176565b60206040518083038186803b1580156116df57600080fd5b505afa1580156116f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117179190611e8e565b90505b92915050565b6003546040516363468cf560e11b81526001600160a01b039091169063c68d19ea9061175c908990899081908a908a908a908a90600401612209565b600060405180830381600087803b15801561177657600080fd5b505af115801561178a573d6000803e3d6000fd5b50505050505050505050565b60006060806117a58585611a9b565b92509250925060005b8381101561178a57600360009054906101000a90046001600160a01b03166001600160a01b031663c68d19ea8b8b8c8c8c8888815181106117eb57fe5b60200260200101518a89815181106117ff57fe5b60200260200101516040518863ffffffff1660e01b81526004016118299796959493929190612209565b600060405180830381600087803b15801561184357600080fd5b505af1158015611857573d6000803e3d6000fd5b5050600190920191506117ae9050565b6003546040516359f3af6360e11b81526001600160a01b039091169063b3e75ec6906118979086906004016121ae565b600060405180830381600087803b1580156118b157600080fd5b505af11580156118c5573d6000803e3d6000fd5b505050506000805b83518110156119b55780158061191e57508360018203815181106118ed57fe5b60200260200101516001600160a01b031684828151811061190a57fe5b60200260200101516001600160a01b031614155b1561192a576001909101905b60035483516001600160a01b0390911690632fe96899908790859087908690811061195157fe5b60200260200101516040518463ffffffff1660e01b8152600401611977939291906123c8565b600060405180830381600087803b15801561199157600080fd5b505af11580156119a5573d6000803e3d6000fd5b5050600190920191506118cd9050565b5050505050565b60006060806119cb8585611a9b565b92509250925060005b83811015611a9157600360009054906101000a90046001600160a01b03166001600160a01b031663c68d19ea60016000198b60018c888881518110611a1557fe5b60200260200101518a8981518110611a2957fe5b60200260200101516040518863ffffffff1660e01b8152600401611a539796959493929190612209565b600060405180830381600087803b158015611a6d57600080fd5b505af1158015611a81573d6000803e3d6000fd5b5050600190920191506119d49050565b5050505050505050565b600060608060006060865167ffffffffffffffff81118015611abc57600080fd5b50604051908082528060200260200182016040528015611ae6578160200160208202803683370190505b5090506060875167ffffffffffffffff81118015611b0357600080fd5b50604051908082528060200260200182016040528015611b2d578160200160208202803683370190505b50905060005b8851811015611c68576000805b8581108015611b4d575081155b15611be757848181518110611b5e57fe5b60200260200101516001600160a01b03168b8481518110611b7b57fe5b60200260200101516001600160a01b03161415611bdf5760019150611bc6848281518110611ba557fe5b60200260200101518b8581518110611bb957fe5b6020026020010151611c77565b848281518110611bd257fe5b6020026020010181815250505b600101611b40565b81611c5e578a8381518110611bf857fe5b6020026020010151858781518110611c0c57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050898381518110611c3857fe5b6020026020010151848781518110611c4c57fe5b60209081029190910101526001909501945b5050600101611b33565b50919450925090509250925092565b8082018281101561171a5760405162461bcd60e51b8152600401610205906122a7565b8051611ca58161244d565b919050565b600082601f830112611cba578081fd5b8135611ccd611cc88261242f565b61240b565b818152915060208083019084810181840286018201871015611cee57600080fd5b60005b84811015611d16578135611d048161244d565b84529282019290820190600101611cf1565b505050505092915050565b600082601f830112611d31578081fd5b8135611d3f611cc88261242f565b818152915060208083019084810181840286018201871015611d6057600080fd5b60005b84811015611d16578135611d768161244d565b84529282019290820190600101611d63565b600082601f830112611d98578081fd5b8135611da6611cc88261242f565b818152915060208083019084810181840286018201871015611dc757600080fd5b60005b84811015611d1657813584529282019290820190600101611dca565b600082601f830112611df6578081fd5b8151611e04611cc88261242f565b818152915060208083019084810181840286018201871015611e2557600080fd5b60005b84811015611d1657815184529282019290820190600101611e28565b8051611ca581612462565b600060208284031215611e60578081fd5b8135611e6b8161244d565b9392505050565b600060208284031215611e83578081fd5b8135611e6b81612462565b600060208284031215611e9f578081fd5b8151611e6b81612462565b600060408284031215611ebb578081fd5b6040516040810181811067ffffffffffffffff82111715611ed857fe5b604052825181526020928301519281019290925250919050565b600060c08284031215611f03578081fd5b60405160c0810181811067ffffffffffffffff82111715611f2057fe5b604052825160038110611f31578283fd5b8152611f3f60208401611c9a565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060208284031215611f87578081fd5b815167ffffffffffffffff80821115611f9e578283fd5b9083019060a08286031215611fb1578283fd5b60405160a081018181108382111715611fc657fe5b604052611fd283611c9a565b8152611fe060208401611e44565b6020820152604083015160408201526060830151606082015260808301518281111561200a578485fd5b61201687828601611de6565b60808301525095945050505050565b600060208284031215612036578081fd5b5051919050565b60008060008060008060008060006101208a8c03121561205b578485fd5b8935985060208a0135975060408a0135965060608a0135955060808a013567ffffffffffffffff8082111561208e578687fd5b61209a8d838e01611d21565b965060a08c01359150808211156120af578586fd5b6120bb8d838e01611caa565b955060c08c01359150808211156120d0578485fd5b506120dd8c828d01611d88565b93505060e08a013591506101008a013590509295985092959850929598565b6008811061210657fe5b9052565b6001600160a01b0391909116815260200190565b6001600160a01b03861681526020810185905260a0810161214260408301866120fc565b6060820193909352608001529392505050565b6001600160a01b039390931683526020830191909152604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b901515815260200190565b90815260200190565b96875260208701959095526001600160a01b039384166040870152919092166060850152608084019190915260a083015260c082015260e00190565b9283526020830191909152604082015260600190565b968752602087019590955260408601939093526060850191909152608084015260a08301526001600160a01b031660c082015260e00190565b602080825260149082015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604082015260600190565b6020808252601d908201527f6f6e652d74782d7061796d656e742d6e6f742d617574686f72697a6564000000604082015260600190565b60208082526014908201527364732d6d6174682d6164642d6f766572666c6f7760601b604082015260600190565b6020808252601f908201527f6f6e652d74782d7061796d656e742d6261642d776f726b65722d6f7264657200604082015260600190565b6020808252601b908201527f657874656e73696f6e2d616c72656164792d696e7374616c6c65640000000000604082015260600190565b6020808252601c908201527f6f6e652d74782d7061796d656e742d696e76616c69642d696e70757400000000604082015260600190565b6020808252601e908201527f6f6e652d74782d7061796d656e742d6261642d746f6b656e2d6f726465720000604082015260600190565b9182526001600160a01b0316602082015260400190565b92835260208301919091526001600160a01b0316604082015260600190565b93845260208401929092526001600160a01b03166040830152606082015260800190565b60405181810167ffffffffffffffff8111828210171561242757fe5b604052919050565b600067ffffffffffffffff82111561244357fe5b5060209081020190565b6001600160a01b038116811461161157600080fd5b801515811461161157600080fdfed9a1ad84578b017e90e4244baf045bcabf50583f51887a391bbe8183e8e34ecaa26469706673582212209dc339ad5a93a12ce8bd683b3a13372960e0a8892223c798d5bd48e1da58d67c64736f6c63430007030033";
