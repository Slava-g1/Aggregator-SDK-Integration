/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DepositStoreUtils,
  DepositStoreUtilsInterface,
} from "../../../contracts/deposit/DepositStoreUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "DepositNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "ACCOUNT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CALLBACK_CONTRACT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CALLBACK_GAS_LIMIT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTION_FEE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_LONG_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_LONG_TOKEN_AMOUNT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_SHORT_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_SHORT_TOKEN_AMOUNT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LONG_TOKEN_SWAP_PATH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MARKET",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_MARKET_TOKENS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RECEIVER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SHORT_TOKEN_SWAP_PATH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SHOULD_UNWRAP_NATIVE_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UI_FEE_RECEIVER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPDATED_AT_BLOCK",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "DataStore",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "get",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "uiFeeReceiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Deposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Deposit.Props",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61359961003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100fb5760003560e01c806304a36e20146101005780632a3459161461011b57806333d608f11461013d5780634675e8eb146101455780634e39e5411461014d57806352341d2614610155578063566a6e661461015d57806374b6fe13146101655780638f7f2048146101855780639a41866b1461018d578063ad7430cc14610195578063b451e5341461019d578063c76eb23b146101a5578063d165556f146101ad578063db854fb7146101b5578063e90524f2146101bd578063f145e54a146101c5578063f46f16c2146101cd578063fdfc26f3146101d5575b600080fd5b6101086101f5565b6040519081526020015b60405180910390f35b81801561012757600080fd5b5061013b610136366004612db6565b61021d565b005b610108610f98565b610108610fa7565b610108610fb6565b610108610fc5565b610108610fd4565b81801561017157600080fd5b5061013b610180366004612f2e565b610fe3565b610108611c4b565b610108611c5a565b610108611c69565b610108611c78565b610108611c87565b610108611c96565b610108611ca5565b610108611cb4565b610108611cc3565b610108611cd2565b6101e86101e3366004612f70565b611ce1565b6040516101129190612fed565b60405160200161020490613125565b6040516020818303038152906040528051906020012081565b826001600160a01b031663c80f4c6260405160200161023b90613159565b60405160208183030381529060405280519060200120846040518363ffffffff1660e01b815260040161026f92919061317f565b600060405180830381600087803b15801561028957600080fd5b505af115801561029d573d6000803e3d6000fd5b50505050826001600160a01b031663c80f4c626102c16102bc84515190565b612a6a565b846040518363ffffffff1660e01b81526004016102df92919061317f565b600060405180830381600087803b1580156102f957600080fd5b505af115801561030d573d6000803e3d6000fd5b50505050826001600160a01b031663ca446dd9836040516020016103309061318d565b6040516020818303038152906040528051906020012060405160200161035792919061317f565b6040516020818303038152906040528051906020012061037684515190565b6040518363ffffffff1660e01b81526004016103939291906131ae565b6020604051808303816000875af11580156103b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d691906131c5565b50826001600160a01b031663ca446dd9836040516020016103f6906131e2565b6040516020818303038152906040528051906020012060405160200161041d92919061317f565b6040516020818303038152906040528051906020012061043f84516020015190565b6040518363ffffffff1660e01b815260040161045c9291906131ae565b6020604051808303816000875af115801561047b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049f91906131c5565b50826001600160a01b031663ca446dd9836040516020016104bf90613204565b604051602081830303815290604052805190602001206040516020016104e692919061317f565b6040516020818303038152906040528051906020012061050884516040015190565b6040518363ffffffff1660e01b81526004016105259291906131ae565b6020604051808303816000875af1158015610544573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056891906131c5565b50826001600160a01b031663ca446dd9836040516020016105889061322f565b604051602081830303815290604052805190602001206040516020016105af92919061317f565b604051602081830303815290604052805190602001206105d184516060015190565b6040518363ffffffff1660e01b81526004016105ee9291906131ae565b6020604051808303816000875af115801561060d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063191906131c5565b50826001600160a01b031663ca446dd98360405160200161065190613258565b6040516020818303038152906040528051906020012060405160200161067892919061317f565b6040516020818303038152906040528051906020012061069a84516080015190565b6040518363ffffffff1660e01b81526004016106b79291906131ae565b6020604051808303816000875af11580156106d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fa91906131c5565b50826001600160a01b031663ca446dd98360405160200161071a90613278565b6040516020818303038152906040528051906020012060405160200161074192919061317f565b60405160208183030381529060405280519060200120610763845160a0015190565b6040518363ffffffff1660e01b81526004016107809291906131ae565b6020604051808303816000875af115801561079f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c391906131c5565b50826001600160a01b031663ca446dd9836040516020016107e3906132a4565b6040516020818303038152906040528051906020012060405160200161080a92919061317f565b6040516020818303038152906040528051906020012061082c845160c0015190565b6040518363ffffffff1660e01b81526004016108499291906131ae565b6020604051808303816000875af1158015610868573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088c91906131c5565b50826001600160a01b031663ec672cf6836040516020016108ac906132d1565b604051602081830303815290604052805190602001206040516020016108d392919061317f565b604051602081830303815290604052805190602001206108f5845160e0015190565b6040518363ffffffff1660e01b81526004016109129291906132ff565b600060405180830381600087803b15801561092c57600080fd5b505af1158015610940573d6000803e3d6000fd5b50505050826001600160a01b031663ec672cf68360405160200161096390613356565b6040516020818303038152906040528051906020012060405160200161098a92919061317f565b604051602081830303815290604052805190602001206109ad8451610100015190565b6040518363ffffffff1660e01b81526004016109ca9291906132ff565b600060405180830381600087803b1580156109e457600080fd5b505af11580156109f8573d6000803e3d6000fd5b50505050826001600160a01b031663e2a4853a83604051602001610a1b90613385565b60405160208183030381529060405280519060200120604051602001610a4292919061317f565b60405160208183030381529060405280519060200120610a6484602001515190565b6040518363ffffffff1660e01b8152600401610a8192919061317f565b6020604051808303816000875af1158015610aa0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac491906133b8565b50826001600160a01b031663e2a4853a83604051602001610ae4906133d1565b60405160208183030381529060405280519060200120604051602001610b0b92919061317f565b60405160208183030381529060405280519060200120610b3084602090810151015190565b6040518363ffffffff1660e01b8152600401610b4d92919061317f565b6020604051808303816000875af1158015610b6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9091906133b8565b50826001600160a01b031663e2a4853a83604051602001610bb090613405565b60405160208183030381529060405280519060200120604051602001610bd792919061317f565b60405160208183030381529060405280519060200120610bfc84602001516040015190565b6040518363ffffffff1660e01b8152600401610c1992919061317f565b6020604051808303816000875af1158015610c38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5c91906133b8565b50826001600160a01b031663e2a4853a83604051602001610c7c90613430565b60405160208183030381529060405280519060200120604051602001610ca392919061317f565b60405160208183030381529060405280519060200120610cc884602001516060015190565b6040518363ffffffff1660e01b8152600401610ce592919061317f565b6020604051808303816000875af1158015610d04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2891906133b8565b50826001600160a01b031663e2a4853a83604051602001610d489061345a565b60405160208183030381529060405280519060200120604051602001610d6f92919061317f565b60405160208183030381529060405280519060200120610d9484602001516080015190565b6040518363ffffffff1660e01b8152600401610db192919061317f565b6020604051808303816000875af1158015610dd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df491906133b8565b50826001600160a01b031663e2a4853a83604051602001610e1490613481565b60405160208183030381529060405280519060200120604051602001610e3b92919061317f565b60405160208183030381529060405280519060200120610e60846020015160a0015190565b6040518363ffffffff1660e01b8152600401610e7d92919061317f565b6020604051808303816000875af1158015610e9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec091906133b8565b50826001600160a01b031663abfdcced83604051602001610ee090613125565b60405160208183030381529060405280519060200120604051602001610f0792919061317f565b60405160208183030381529060405280519060200120610f2984604001515190565b6040516001600160e01b031960e085901b1681526004810192909252151560248201526044016020604051808303816000875af1158015610f6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9291906134ad565b50505050565b60405160200161020490613481565b6040516020016102049061345a565b60405160200161020490613405565b60405160200161020490613278565b6040516020016102049061322f565b826001600160a01b03166391d4403c60405160200161100190613159565b60405160208183030381529060405280519060200120846040518363ffffffff1660e01b815260040161103592919061317f565b602060405180830381865afa158015611052573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107691906134ad565b61109a5760405163087c619560e31b81526004810183905260240160405180910390fd5b826001600160a01b0316639921c3cc6040516020016110b890613159565b60405160208183030381529060405280519060200120846040518363ffffffff1660e01b81526004016110ec92919061317f565b600060405180830381600087803b15801561110657600080fd5b505af115801561111a573d6000803e3d6000fd5b50505050826001600160a01b0316639921c3cc61113683612a6a565b846040518363ffffffff1660e01b815260040161115492919061317f565b600060405180830381600087803b15801561116e57600080fd5b505af1158015611182573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb6836040516020016111a59061318d565b604051602081830303815290604052805190602001206040516020016111cc92919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161120091815260200190565b600060405180830381600087803b15801561121a57600080fd5b505af115801561122e573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb683604051602001611251906131e2565b6040516020818303038152906040528051906020012060405160200161127892919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016112ac91815260200190565b600060405180830381600087803b1580156112c657600080fd5b505af11580156112da573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb6836040516020016112fd90613204565b6040516020818303038152906040528051906020012060405160200161132492919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161135891815260200190565b600060405180830381600087803b15801561137257600080fd5b505af1158015611386573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb6836040516020016113a99061322f565b604051602081830303815290604052805190602001206040516020016113d092919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161140491815260200190565b600060405180830381600087803b15801561141e57600080fd5b505af1158015611432573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb68360405160200161145590613258565b6040516020818303038152906040528051906020012060405160200161147c92919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016114b091815260200190565b600060405180830381600087803b1580156114ca57600080fd5b505af11580156114de573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb68360405160200161150190613278565b6040516020818303038152906040528051906020012060405160200161152892919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161155c91815260200190565b600060405180830381600087803b15801561157657600080fd5b505af115801561158a573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb6836040516020016115ad906132a4565b604051602081830303815290604052805190602001206040516020016115d492919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161160891815260200190565b600060405180830381600087803b15801561162257600080fd5b505af1158015611636573d6000803e3d6000fd5b50505050826001600160a01b031663c1dc918283604051602001611659906132d1565b6040516020818303038152906040528051906020012060405160200161168092919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016116b491815260200190565b600060405180830381600087803b1580156116ce57600080fd5b505af11580156116e2573d6000803e3d6000fd5b50505050826001600160a01b031663c1dc91828360405160200161170590613356565b6040516020818303038152906040528051906020012060405160200161172c92919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161176091815260200190565b600060405180830381600087803b15801561177a57600080fd5b505af115801561178e573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd96836040516020016117b190613385565b604051602081830303815290604052805190602001206040516020016117d892919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161180c91815260200190565b600060405180830381600087803b15801561182657600080fd5b505af115801561183a573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd968360405160200161185d906133d1565b6040516020818303038152906040528051906020012060405160200161188492919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016118b891815260200190565b600060405180830381600087803b1580156118d257600080fd5b505af11580156118e6573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd968360405160200161190990613405565b6040516020818303038152906040528051906020012060405160200161193092919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161196491815260200190565b600060405180830381600087803b15801561197e57600080fd5b505af1158015611992573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd96836040516020016119b590613430565b604051602081830303815290604052805190602001206040516020016119dc92919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611a1091815260200190565b600060405180830381600087803b158015611a2a57600080fd5b505af1158015611a3e573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd9683604051602001611a619061345a565b60405160208183030381529060405280519060200120604051602001611a8892919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611abc91815260200190565b600060405180830381600087803b158015611ad657600080fd5b505af1158015611aea573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd9683604051602001611b0d90613481565b60405160208183030381529060405280519060200120604051602001611b3492919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611b6891815260200190565b600060405180830381600087803b158015611b8257600080fd5b505af1158015611b96573d6000803e3d6000fd5b50505050826001600160a01b0316639fe7ac1283604051602001611bb990613125565b60405160208183030381529060405280519060200120604051602001611be092919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611c1491815260200190565b600060405180830381600087803b158015611c2e57600080fd5b505af1158015611c42573d6000803e3d6000fd5b50505050505050565b60405160200161020490613204565b604051602001610204906133d1565b604051602001610204906131e2565b604051602001610204906132d1565b604051602001610204906132a4565b60405160200161020490613385565b60405160200161020490613356565b6040516020016102049061318d565b60405160200161020490613430565b60405160200161020490613258565b611ce9612ae9565b611cf1612ae9565b836001600160a01b03166391d4403c604051602001611d0f90613159565b60405160208183030381529060405280519060200120856040518363ffffffff1660e01b8152600401611d4392919061317f565b602060405180830381865afa158015611d60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d8491906134ad565b611d8f579050612a64565b611e5e846001600160a01b03166321f8a72185604051602001611db19061318d565b60405160208183030381529060405280519060200120604051602001611dd892919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611e0c91815260200190565b602060405180830381865afa158015611e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e4d91906131c5565b82516001600160a01b039091169052565b611f31846001600160a01b03166321f8a72185604051602001611e80906131e2565b60405160208183030381529060405280519060200120604051602001611ea792919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611edb91815260200190565b602060405180830381865afa158015611ef8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1c91906131c5565b82516001600160a01b03909116602090910152565b612004846001600160a01b03166321f8a72185604051602001611f5390613204565b60405160208183030381529060405280519060200120604051602001611f7a92919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611fae91815260200190565b602060405180830381865afa158015611fcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fef91906131c5565b82516001600160a01b03909116604090910152565b6120d7846001600160a01b03166321f8a721856040516020016120269061322f565b6040516020818303038152906040528051906020012060405160200161204d92919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161208191815260200190565b602060405180830381865afa15801561209e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c291906131c5565b82516001600160a01b03909116606090910152565b6121aa846001600160a01b03166321f8a721856040516020016120f990613258565b6040516020818303038152906040528051906020012060405160200161212092919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161215491815260200190565b602060405180830381865afa158015612171573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061219591906131c5565b82516001600160a01b03909116608090910152565b61227d846001600160a01b03166321f8a721856040516020016121cc90613278565b604051602081830303815290604052805190602001206040516020016121f392919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161222791815260200190565b602060405180830381865afa158015612244573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061226891906131c5565b82516001600160a01b0390911660a090910152565b612350846001600160a01b03166321f8a7218560405160200161229f906132a4565b604051602081830303815290604052805190602001206040516020016122c692919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016122fa91815260200190565b602060405180830381865afa158015612317573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061233b91906131c5565b82516001600160a01b0390911660c090910152565b61241a846001600160a01b0316635948f73385604051602001612372906132d1565b6040516020818303038152906040528051906020012060405160200161239992919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016123cd91815260200190565b600060405180830381865afa1580156123ea573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261241291908101906134ca565b825160e00152565b6124e5846001600160a01b0316635948f7338560405160200161243c90613356565b6040516020818303038152906040528051906020012060405160200161246392919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161249791815260200190565b600060405180830381865afa1580156124b4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526124dc91908101906134ca565b82516101000152565b6125ab846001600160a01b031663bd02d0f58560405160200161250790613385565b6040516020818303038152906040528051906020012060405160200161252e92919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161256291815260200190565b602060405180830381865afa15801561257f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125a391906133b8565b602083015152565b612673846001600160a01b031663bd02d0f5856040516020016125cd906133d1565b604051602081830303815290604052805190602001206040516020016125f492919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161262891815260200190565b602060405180830381865afa158015612645573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061266991906133b8565b6020808401510152565b61273c846001600160a01b031663bd02d0f58560405160200161269590613405565b604051602081830303815290604052805190602001206040516020016126bc92919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016126f091815260200190565b602060405180830381865afa15801561270d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061273191906133b8565b602083015160400152565b612805846001600160a01b031663bd02d0f58560405160200161275e90613430565b6040516020818303038152906040528051906020012060405160200161278592919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016127b991815260200190565b602060405180830381865afa1580156127d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127fa91906133b8565b602083015160600152565b6128ce846001600160a01b031663bd02d0f5856040516020016128279061345a565b6040516020818303038152906040528051906020012060405160200161284e92919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161288291815260200190565b602060405180830381865afa15801561289f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128c391906133b8565b602083015160800152565b612997846001600160a01b031663bd02d0f5856040516020016128f090613481565b6040516020818303038152906040528051906020012060405160200161291792919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161294b91815260200190565b602060405180830381865afa158015612968573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298c91906133b8565b602083015160a00152565b612a61846001600160a01b0316637ae1cfca856040516020016129b990613125565b604051602081830303815290604052805190602001206040516020016129e092919061317f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401612a1491815260200190565b602060405180830381865afa158015612a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a5591906134ad565b60408301519015159052565b90505b92915050565b6000604051602001612aa4906020808252601490820152731050d0d3d5539517d1115413d4d25517d31254d560621b604082015260600190565b6040516020818303038152906040528051906020012082604051602001612acc9291906131ae565b604051602081830303815290604052805190602001209050919050565b604080516101808101909152600060608083018281526080840183905260a0840183905260c0840183905260e084018390526101008401839052610120840192909252610140830181905261016083015281908152602001612b7a6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526040805160208181019092526000815291015290565b6001600160a01b0381168114612ba757600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b0381118282101715612be257612be2612baa565b60405290565b60405161012081016001600160401b0381118282101715612be257612be2612baa565b604051601f8201601f191681016001600160401b0381118282101715612c3357612c33612baa565b604052919050565b8035612c4681612b92565b919050565b60006001600160401b03821115612c6457612c64612baa565b5060051b60200190565b600082601f830112612c7f57600080fd5b81356020612c94612c8f83612c4b565b612c0b565b82815260059290921b84018101918181019086841115612cb357600080fd5b8286015b84811015612cd7578035612cca81612b92565b8352918301918301612cb7565b509695505050505050565b600060c08284031215612cf457600080fd5b60405160c081016001600160401b0381118282101715612d1657612d16612baa565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b8015158114612ba757600080fd5b600060208284031215612d7b57600080fd5b604051602081016001600160401b0381118282101715612d9d57612d9d612baa565b6040529050808235612dae81612d5b565b905292915050565b600080600060608486031215612dcb57600080fd5b8335612dd681612b92565b92506020840135915060408401356001600160401b0380821115612df957600080fd5b8186019150610100808389031215612e1057600080fd5b612e18612bc0565b833583811115612e2757600080fd5b8401610120818b031215612e3a57600080fd5b612e42612be8565b612e4b82612c3b565b8152612e5960208301612c3b565b6020820152612e6a60408301612c3b565b6040820152612e7b60608301612c3b565b6060820152612e8c60808301612c3b565b6080820152612e9d60a08301612c3b565b60a0820152612eae60c08301612c3b565b60c082015260e082013585811115612ec557600080fd5b612ed18c828501612c6e565b60e0830152508382013585811115612ee857600080fd5b612ef48c828501612c6e565b8286015250825250612f098960208601612ce2565b6020820152612f1b8960e08601612d69565b6040820152809450505050509250925092565b600080600060608486031215612f4357600080fd5b8335612f4e81612b92565b9250602084013591506040840135612f6581612b92565b809150509250925092565b60008060408385031215612f8357600080fd5b8235612f8e81612b92565b946020939093013593505050565b6001600160a01b03169052565b600081518084526020808501945080840160005b83811015612fe25781516001600160a01b031687529582019590820190600101612fbd565b509495945050505050565b602081526000610120835161010080602086015261300e8386018351612f9c565b6020820151613021610140870182612f9c565b506040820151613035610160870182612f9c565b506060820151613049610180870182612f9c565b50608082015161305d6101a0870182612f9c565b5060a08201516130716101c0870182612f9c565b5060c08201516130856101e0870182612f9c565b5060e0820151836102008701526130a0610240870182612fa9565b9282015186840361011f19016102208801529293506130c190508383612fa9565b92506020860151915061310c6040860183805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b6040860151805115158683015291505090949350505050565b6020808252601a908201527929a427aaa6222faaa72ba920a82fa720aa24ab22afaa27a5a2a760311b604082015260600190565b6020808252600c908201526b11115413d4d25517d31254d560a21b604082015260600190565b918252602082015260400190565b6020808252600790820152661050d0d3d5539560ca1b604082015260600190565b9182526001600160a01b0316602082015260400190565b6000602082840312156131d757600080fd5b8151612a6181612b92565b6020808252600890820152672922a1a2a4ab22a960c11b604082015260600190565b60208082526011908201527010d05313109050d2d7d0d3d395149050d5607a1b604082015260600190565b6020808252600f908201526e2aa4afa322a2afa922a1a2a4ab22a960891b604082015260600190565b60208082526006908201526513505492d15560d21b604082015260600190565b60208082526012908201527124a724aa24a0a62fa627a723afaa27a5a2a760711b604082015260600190565b60208082526013908201527224a724aa24a0a62fa9a427a92a2faa27a5a2a760691b604082015260600190565b6020808252601490820152730989e9c8ebea89e968a9cbea6ae82a0bea082a8960631b604082015260600190565b6000604082018483526020604081850152818551808452606086019150828701935060005b818110156133495784516001600160a01b031683529383019391830191600101613324565b5090979650505050505050565b6020808252601590820152740a6909ea4a8bea89e968a9cbea6ae82a0bea082a89605b1b604082015260600190565b6020808252601990820152781253925512505317d313d391d7d513d2d15397d05353d55395603a1b604082015260600190565b6000602082840312156133ca57600080fd5b5051919050565b6020808252601a90820152791253925512505317d4d213d49517d513d2d15397d05353d5539560321b604082015260600190565b6020808252601190820152704d494e5f4d41524b45545f544f4b454e5360781b604082015260600190565b60208082526010908201526f555044415445445f41545f424c4f434b60801b604082015260600190565b6020808252600d908201526c455845435554494f4e5f46454560981b604082015260600190565b60208082526012908201527110d05313109050d2d7d1d054d7d31253525560721b604082015260600190565b6000602082840312156134bf57600080fd5b8151612a6181612d5b565b600060208083850312156134dd57600080fd5b82516001600160401b038111156134f357600080fd5b8301601f8101851361350457600080fd5b8051613512612c8f82612c4b565b81815260059190911b8201830190838101908783111561353157600080fd5b928401925b8284101561355857835161354981612b92565b82529284019290840190613536565b97965050505050505056fea26469706673582212208cd955a235f607f03a4e9ce34672d1c96badc8f2ddf680e15ef12de6c64e5ea364736f6c63430008120033";

type DepositStoreUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositStoreUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DepositStoreUtils__factory extends ContractFactory {
  constructor(...args: DepositStoreUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DepositStoreUtils> {
    return super.deploy(overrides || {}) as Promise<DepositStoreUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DepositStoreUtils {
    return super.attach(address) as DepositStoreUtils;
  }
  override connect(signer: Signer): DepositStoreUtils__factory {
    return super.connect(signer) as DepositStoreUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositStoreUtilsInterface {
    return new utils.Interface(_abi) as DepositStoreUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositStoreUtils {
    return new Contract(address, _abi, signerOrProvider) as DepositStoreUtils;
  }
}
