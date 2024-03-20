/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { OneTxPaymentDeployer } from "./OneTxPaymentDeployer";

export class OneTxPaymentDeployerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<OneTxPaymentDeployer> {
    return super.deploy(overrides) as Promise<OneTxPaymentDeployer>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): OneTxPaymentDeployer {
    return super.attach(address) as OneTxPaymentDeployer;
  }
  connect(signer: Signer): OneTxPaymentDeployerFactory {
    return super.connect(signer) as OneTxPaymentDeployerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OneTxPaymentDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OneTxPaymentDeployer;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "deployedExtensions",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "colonyNetwork",
        type: "address"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      }
    ],
    name: "ColonyInitialised",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "users",
        type: "address[]"
      },
      {
        indexed: false,
        name: "amounts",
        type: "int256[]"
      }
    ],
    name: "ColonyBootstrapped",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "oldVersion",
        type: "uint256"
      },
      {
        indexed: false,
        name: "newVersion",
        type: "uint256"
      }
    ],
    name: "ColonyUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        name: "domainId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "role",
        type: "uint8"
      },
      {
        indexed: false,
        name: "setTo",
        type: "bool"
      }
    ],
    name: "ColonyRoleSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "fromPot",
        type: "uint256"
      },
      {
        indexed: true,
        name: "toPot",
        type: "uint256"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      }
    ],
    name: "ColonyFundsMovedBetweenFundingPots",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        name: "fee",
        type: "uint256"
      },
      {
        indexed: false,
        name: "payoutRemainder",
        type: "uint256"
      }
    ],
    name: "ColonyFundsClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardPayoutId",
        type: "uint256"
      }
    ],
    name: "RewardPayoutCycleStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardPayoutId",
        type: "uint256"
      }
    ],
    name: "RewardPayoutCycleEnded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardPayoutId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "fee",
        type: "uint256"
      },
      {
        indexed: false,
        name: "rewardRemainder",
        type: "uint256"
      }
    ],
    name: "RewardPayoutClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardInverse",
        type: "uint256"
      }
    ],
    name: "ColonyRewardInverseSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "expenditureId",
        type: "uint256"
      }
    ],
    name: "ExpenditureAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "expenditureId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "owner",
        type: "address"
      }
    ],
    name: "ExpenditureTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "expenditureId",
        type: "uint256"
      }
    ],
    name: "ExpenditureCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "expenditureId",
        type: "uint256"
      }
    ],
    name: "ExpenditureFinalized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "expenditureId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "slot",
        type: "uint256"
      },
      {
        indexed: true,
        name: "recipient",
        type: "address"
      }
    ],
    name: "ExpenditureRecipientSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "expenditureId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "slot",
        type: "uint256"
      },
      {
        indexed: true,
        name: "skillId",
        type: "uint256"
      }
    ],
    name: "ExpenditureSkillSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "expenditureId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "slot",
        type: "uint256"
      },
      {
        indexed: true,
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "ExpenditurePayoutSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "paymentId",
        type: "uint256"
      }
    ],
    name: "PaymentAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "taskId",
        type: "uint256"
      }
    ],
    name: "TaskAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "specificationHash",
        type: "bytes32"
      }
    ],
    name: "TaskBriefSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "dueDate",
        type: "uint256"
      }
    ],
    name: "TaskDueDateSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "skillId",
        type: "uint256"
      }
    ],
    name: "TaskSkillSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "role",
        type: "uint8"
      },
      {
        indexed: true,
        name: "user",
        type: "address"
      }
    ],
    name: "TaskRoleUserSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "role",
        type: "uint8"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "TaskPayoutSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "deliverableHash",
        type: "bytes32"
      }
    ],
    name: "TaskDeliverableSubmitted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      }
    ],
    name: "TaskCompleted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "role",
        type: "uint8"
      },
      {
        indexed: false,
        name: "rating",
        type: "uint8"
      }
    ],
    name: "TaskWorkRatingRevealed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      }
    ],
    name: "TaskFinalized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "fundingPotId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "PayoutClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      }
    ],
    name: "TaskCanceled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "domainId",
        type: "uint256"
      }
    ],
    name: "DomainAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "fundingPotId",
        type: "uint256"
      }
    ],
    name: "FundingPotAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_name",
        type: "string"
      },
      {
        indexed: false,
        name: "_colony",
        type: "address"
      },
      {
        indexed: false,
        name: "_extension",
        type: "address"
      }
    ],
    name: "ExtensionDeployed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_name",
        type: "string"
      },
      {
        indexed: false,
        name: "_colony",
        type: "address"
      }
    ],
    name: "ExtensionRemoved",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_colony",
        type: "address"
      }
    ],
    name: "deployExtension",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_colony",
        type: "address"
      }
    ],
    name: "removeExtension",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611cf3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806321ee102b14610046578063b5ff06321461005b578063e574c0e41461006e575b600080fd5b61005961005436600461036c565b610097565b005b61005961006936600461036c565b6101a4565b61008161007c36600461036c565b610328565b60405161008e91906104d1565b60405180910390f35b604051600160e11b635597bd710281526001600160a01b0382169063ab2f7ae2906100cb90339060019081906004016104a9565b60206040518083038186803b1580156100e357600080fd5b505afa1580156100f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061011b9190810190610392565b61014357604051600160e51b62461bcd02815260040161013a906104ef565b60405180910390fd5b6001600160a01b0381166000908152602081905260409081902080546001600160a01b0319169055517ff6f4f43826f45b8738c8500ec35a8a6403962e8c1120ea7ee073803369be8808906101999083906104ff565b60405180910390a150565b604051600160e11b635597bd710281526001600160a01b0382169063ab2f7ae2906101d890339060019081906004016104a9565b60206040518083038186803b1580156101f057600080fd5b505afa158015610204573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506102289190810190610392565b61024757604051600160e51b62461bcd02815260040161013a906104ef565b6001600160a01b03818116600090815260208190526040902054161561028257604051600160e51b62461bcd02815260040161013a906104df565b60008160405161029190610343565b61029b919061049b565b604051809103906000f0801580156102b7573d6000803e3d6000fd5b506001600160a01b038381166000908152602081905260409081902080546001600160a01b03191692841692909217909155519091507fb5d6317883538e4f54168ac7c924a1b5fdb2105283169f5b922d4ff54a5bc6509061031c908490849061051e565b60405180910390a15050565b6000602081905290815260409020546001600160a01b031681565b6116df806105db83390190565b803561035b816105bd565b92915050565b805161035b816105d1565b60006020828403121561037e57600080fd5b600061038a8484610350565b949350505050565b6000602082840312156103a457600080fd5b600061038a8484610361565b6103b981610588565b82525050565b6103b98161055a565b6103b98161058f565b6103b98161059a565b6103b9816105a5565b60006103f0602183610551565b7f636f6c6f6e792d657874656e73696f6e2d616c72656164792d6465706c6f79658152600160fa1b601902602082015260400192915050565b6000610436601e83610551565b7f636f6c6f6e792d657874656e73696f6e2d757365722d6e6f742d726f6f740000815260200192915050565b600061046f600c83610551565b7f4f6e6554785061796d656e740000000000000000000000000000000000000000815260200192915050565b6020810161035b82846103bf565b606081016104b782866103b0565b6104c460208301856103da565b61038a60408301846103d1565b6020810161035b82846103c8565b6020808252810161035b816103e3565b6020808252810161035b81610429565b6040808252810161050f81610462565b905061035b60208301846103bf565b6060808252810161052e81610462565b905061053d60208301856103bf565b61054a60408301846103bf565b9392505050565b90815260200190565b600061035b82610579565b151590565b80610574816105b0565b919050565b6001600160a01b031690565b90565b600061035b825b600061035b8261055a565b600061035b8261056a565b600061035b82610585565b600781106105ba57fe5b50565b6105c68161055a565b81146105ba57600080fd5b6105c68161056556fe60806040523480156200001157600080fd5b50604051602080620016df83398101806040526200003391908101906200011e565b600080546001600160a01b0319166001600160a01b038381169190911791829055604080517f4e5e839500000000000000000000000000000000000000000000000000000000815290519290911691634e5e839591600480820192602092909190829003018186803b158015620000a957600080fd5b505afa158015620000be573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250620000e491908101906200011e565b600180546001600160a01b0319166001600160a01b03929092169190911790555062000173565b8051620001188162000159565b92915050565b6000602082840312156200013157600080fd5b60006200013f84846200010b565b949350505050565b60006001600160a01b03821662000118565b620001648162000147565b81146200017057600080fd5b50565b61155c80620001836000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360c627be1461003b578063f23efb5014610050575b600080fd5b61004e610049366004610e8a565b610063565b005b61004e61005e366004610e8a565b610383565b61006e878784610768565b60008054604051600160e01b634f8df6430281526001600160a01b0390911690634f8df643906100ae908d908d908b908b908b908b908b9060040161139d565b602060405180830381600087803b1580156100c857600080fd5b505af11580156100dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506101009190810190610e6c565b905061010a610be3565b600054604051600160e11b631940541b0281526001600160a01b0390911690633280a8369061013d908590600401611352565b60006040518083038186803b15801561015557600080fd5b505afa158015610169573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101919190810190610e37565b905061019b610c1d565b600054604051600160e11b630d3d4c710281526001600160a01b0390911690631a7a98e2906101ce908890600401611352565b604080518083038186803b1580156101e557600080fd5b505afa1580156101f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061021d9190810190610e19565b90506000809054906101000a90046001600160a01b03166001600160a01b031663c68d19ea8d8d8e856020015187604001518c8e6040518863ffffffff1660e01b81526004016102739796959493929190611421565b600060405180830381600087803b15801561028d57600080fd5b505af11580156102a1573d6000803e3d6000fd5b5050600054604051600160e51b6306cb0d210281526001600160a01b03909116925063d961a42091506102dc908f908f9088906004016113f9565b600060405180830381600087803b1580156102f657600080fd5b505af115801561030a573d6000803e3d6000fd5b5050600054604051600160e01b630f4c52f30281526001600160a01b039091169250630f4c52f391506103439086908b90600401611360565b600060405180830381600087803b15801561035d57600080fd5b505af1158015610371573d6000803e3d6000fd5b50505050505050505050505050505050565b61038e878784610768565b6000809054906101000a90046001600160a01b03166001600160a01b031663bf7e214f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103db57600080fd5b505afa1580156103ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506104139190810190610dd5565b6001600160a01b0316639110fc8f3360016000809054906101000a90046001600160a01b031660405161044590611236565b60405190819003812063ffffffff861660e01b825261046994939291600401611241565b60206040518083038186803b15801561048157600080fd5b505afa158015610495573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506104b99190810190610dfb565b6104e157604051600160e51b62461bcd0281526004016104d890611312565b60405180910390fd5b60008054604051600160e01b634f8df6430281526001600160a01b0390911690634f8df64390610521908d908d908b908b908b908b908b9060040161139d565b602060405180830381600087803b15801561053b57600080fd5b505af115801561054f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506105739190810190610e6c565b905061057d610be3565b600054604051600160e11b631940541b0281526001600160a01b0390911690633280a836906105b0908590600401611352565b60006040518083038186803b1580156105c857600080fd5b505afa1580156105dc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106049190810190610e37565b90506000809054906101000a90046001600160a01b03166001600160a01b031663c68d19ea600160008d600186604001518b8d6040518863ffffffff1660e01b8152600401610659979695949392919061129a565b600060405180830381600087803b15801561067357600080fd5b505af1158015610687573d6000803e3d6000fd5b5050600054604051600160e51b6306cb0d210281526001600160a01b03909116925063d961a42091506106c2908e908e9087906004016113f9565b600060405180830381600087803b1580156106dc57600080fd5b505af11580156106f0573d6000803e3d6000fd5b5050600054604051600160e01b630f4c52f30281526001600160a01b039091169250630f4c52f391506107299085908a90600401611360565b600060405180830381600087803b15801561074357600080fd5b505af1158015610757573d6000803e3d6000fd5b505050505050505050505050505050565b6000809054906101000a90046001600160a01b03166001600160a01b031663bf7e214f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107b557600080fd5b505afa1580156107c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506107ed9190810190610dd5565b6001600160a01b0316639110fc8f33856000809054906101000a90046001600160a01b031660405161081e9061122b565b60405190819003812063ffffffff861660e01b82526108429493929160040161127f565b60206040518083038186803b15801561085a57600080fd5b505afa15801561086e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506108929190810190610dfb565b6108b157604051600160e51b62461bcd0281526004016104d890611302565b6000809054906101000a90046001600160a01b03166001600160a01b031663bf7e214f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108fe57600080fd5b505afa158015610912573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506109369190810190610dd5565b6001600160a01b0316639110fc8f33856000809054906101000a90046001600160a01b031660405161096790611236565b60405190819003812063ffffffff861660e01b825261098b9493929160040161127f565b60206040518083038186803b1580156109a357600080fd5b505afa1580156109b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506109db9190810190610dfb565b6109fa57604051600160e51b62461bcd0281526004016104d890611342565b808314610bde5760008054604051600160e11b630d3d4c710281526001600160a01b0390911690631a7a98e290610a35908790600401611352565b604080518083038186803b158015610a4c57600080fd5b505afa158015610a60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610a849190810190610e19565b5160008054604051600160e11b630d3d4c7102815292935090916001600160a01b0390911690631a7a98e290610abe908690600401611352565b604080518083038186803b158015610ad557600080fd5b505afa158015610ae9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610b0d9190810190610e19565b51905080610b3057604051600160e51b62461bcd0281526004016104d890611322565b600154604051600160e11b6304e8852f0281526000916001600160a01b0316906309d10a5e90610b669086908990600401611382565b60206040518083038186803b158015610b7e57600080fd5b505afa158015610b92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610bb69190810190610e6c565b9050818114610bda57604051600160e51b62461bcd0281526004016104d890611332565b5050505b505050565b6040518060a0016040528060006001600160a01b031681526020016000151581526020016000815260200160008152602001606081525090565b604051806040016040528060008152602001600081525090565b8035610c42816114f9565b92915050565b8051610c42816114f9565b600082601f830112610c6457600080fd5b8151610c77610c728261147d565b611456565b91508181835260208401935060208101905083856020840282011115610c9c57600080fd5b60005b83811015610cc85781610cb28882610dca565b8452506020928301929190910190600101610c9f565b5050505092915050565b8051610c4281611510565b600060408284031215610cef57600080fd5b610cf96040611456565b90506000610d078484610dca565b8252506020610d1884848301610dca565b60208301525092915050565b600060a08284031215610d3657600080fd5b610d4060a0611456565b90506000610d4e8484610c48565b8252506020610d5f84848301610cd2565b6020830152506040610d7384828501610dca565b6040830152506060610d8784828501610dca565b606083015250608082015167ffffffffffffffff811115610da757600080fd5b610db384828501610c53565b60808301525092915050565b8035610c4281611519565b8051610c4281611519565b600060208284031215610de757600080fd5b6000610df38484610c48565b949350505050565b600060208284031215610e0d57600080fd5b6000610df38484610cd2565b600060408284031215610e2b57600080fd5b6000610df38484610cdd565b600060208284031215610e4957600080fd5b815167ffffffffffffffff811115610e6057600080fd5b610df384828501610d24565b600060208284031215610e7e57600080fd5b6000610df38484610dca565b60008060008060008060008060006101208a8c031215610ea957600080fd5b6000610eb58c8c610dbf565b9950506020610ec68c828d01610dbf565b9850506040610ed78c828d01610dbf565b9750506060610ee88c828d01610dbf565b9650506080610ef98c828d01610c37565b95505060a0610f0a8c828d01610c37565b94505060c0610f1b8c828d01610dbf565b93505060e0610f2c8c828d01610dbf565b925050610100610f3e8c828d01610dbf565b9150509295985092959850929598565b610f57816114d8565b82525050565b610f57816114ac565b610f57816114bc565b610f57816114e3565b6000610f856043836114a7565b7f6164645061796d656e742875696e743235362c75696e743235362c616464726581527f73732c616464726573732c75696e743235362c75696e743235362c75696e74326020820152600160e81b6235362902604082015260430192915050565b6000610ff360338361149e565b7f636f6c6f6e792d6f6e652d74782d7061796d656e742d61646d696e697374726181527f74696f6e2d6e6f742d617574686f72697a656400000000000000000000000000602082015260400192915050565b600061105260318361149e565b7f636f6c6f6e792d6f6e652d74782d7061796d656e742d726f6f742d66756e646981527f6e672d6e6f742d617574686f72697a6564000000000000000000000000000000602082015260400192915050565b60006110b1604d836114a7565b7f6d6f766546756e64734265747765656e506f74732875696e743235362c75696e81527f743235362c75696e743235362c75696e743235362c75696e743235362c75696e60208201527f743235362c6164647265737329000000000000000000000000000000000000006040820152604d0192915050565b6000611136602b8361149e565b7f636f6c6f6e792d6f6e652d74782d7061796d656e742d646f6d61696e2d646f658152600160aa1b6a1ccb5b9bdd0b595e1a5cdd02602082015260400192915050565b600061118660258361149e565b7f636f6c6f6e792d6f6e652d74782d7061796d656e742d6261642d6368696c642d8152600160da1b641cdada5b1b02602082015260400192915050565b60006111d0602c8361149e565b7f636f6c6f6e792d6f6e652d74782d7061796d656e742d66756e64696e672d6e6f81527f742d617574686f72697a65640000000000000000000000000000000000000000602082015260400192915050565b610f57816114d5565b6000610c4282610f78565b6000610c42826110a4565b6080810161124f8287610f4e565b61125c6020830186610f6f565b6112696040830185610f5d565b6112766060830184610f66565b95945050505050565b6080810161128d8287610f4e565b61125c6020830186611222565b60e081016112a8828a610f6f565b6112b56020830189610f6f565b6112c26040830188611222565b6112cf6060830187610f6f565b6112dc6080830186611222565b6112e960a0830185611222565b6112f660c0830184610f5d565b98975050505050505050565b60208082528101610c4281610fe6565b60208082528101610c4281611045565b60208082528101610c4281611129565b60208082528101610c4281611179565b60208082528101610c42816111c3565b60208101610c428284611222565b6040810161136e8285611222565b61137b6020830184610f5d565b9392505050565b604081016113908285611222565b61137b6020830184611222565b60e081016113ab828a611222565b6113b86020830189611222565b6113c56040830188610f5d565b6113d26060830187610f5d565b6113df6080830186611222565b6113ec60a0830185611222565b6112f660c0830184611222565b606081016114078286611222565b6114146020830185611222565b610df36040830184611222565b60e0810161142f828a611222565b61143c6020830189611222565b6114496040830188611222565b6112cf6060830187611222565b60405181810167ffffffffffffffff8111828210171561147557600080fd5b604052919050565b600067ffffffffffffffff82111561149457600080fd5b5060209081020190565b90815260200190565b919050565b6000610c42826114c9565b151590565b6001600160e01b03191690565b6001600160a01b031690565b90565b6000610c42826114ee565b6000610c42826114d5565b6000610c42826114ac565b611502816114ac565b811461150d57600080fd5b50565b611502816114b7565b611502816114d556fea265627a7a72305820cb54d393d986139c41dbf65db9c91d0962a232bededb8b47df93d7644dc21c706c6578706572696d656e74616cf50037a265627a7a7230582048800a5d69341476771d9eecb2c432a7406a452f8f5a55decb4af571327f41396c6578706572696d656e74616cf50037";
