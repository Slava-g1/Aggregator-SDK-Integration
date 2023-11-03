/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OracleModuleTest,
  OracleModuleTestInterface,
} from "../../../contracts/test/OracleModuleTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "compactedValues",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
    ],
    name: "CompactedArrayOutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
    ],
    name: "DuplicatedIndex",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "EmptyCompactedBlockNumber",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "EmptyCompactedPrice",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "EmptyCompactedTimestamp",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recoveredSigner",
        type: "address",
      },
      {
        internalType: "address",
        name: "expectedSigner",
        type: "address",
      },
    ],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
    ],
    name: "MaskIndexOutOfBounds",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "OracleError",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "signerInfo",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinOracleBlockNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxOracleBlockNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedOracleTimestamps",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedDecimals",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinPricesIndexes",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxPricesIndexes",
            type: "uint256[]",
          },
          {
            internalType: "bytes[]",
            name: "signatures",
            type: "bytes[]",
          },
          {
            internalType: "address[]",
            name: "priceFeedTokens",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "realtimeFeedTokens",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "realtimeFeedData",
            type: "bytes[]",
          },
        ],
        internalType: "struct OracleUtils.SetPricesParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "getReportInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "minOracleBlockNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxOracleBlockNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleTimestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "tokenOracleType",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "precision",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPrice",
            type: "uint256",
          },
        ],
        internalType: "struct OracleUtils.ReportInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSalt",
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
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenOracleType",
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
        components: [
          {
            internalType: "uint256",
            name: "minOracleBlockNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxOracleBlockNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleTimestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "tokenOracleType",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "precision",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPrice",
            type: "uint256",
          },
        ],
        internalType: "struct OracleUtils.ReportInfo",
        name: "info",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "expectedSigner",
        type: "address",
      },
    ],
    name: "validateSigner",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "SALT",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "minOracleBlockNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxOracleBlockNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleTimestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "tokenOracleType",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "precision",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPrice",
            type: "uint256",
          },
        ],
        internalType: "struct OracleUtils.ReportInfo",
        name: "info",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "expectedSigner",
        type: "address",
      },
    ],
    name: "validateSignerWithSalt",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Oracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "address",
      },
      {
        internalType: "contract EventEmitter",
        name: "eventEmitter",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "signerInfo",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinOracleBlockNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxOracleBlockNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedOracleTimestamps",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedDecimals",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinPricesIndexes",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxPricesIndexes",
            type: "uint256[]",
          },
          {
            internalType: "bytes[]",
            name: "signatures",
            type: "bytes[]",
          },
          {
            internalType: "address[]",
            name: "priceFeedTokens",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "realtimeFeedTokens",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "realtimeFeedData",
            type: "bytes[]",
          },
        ],
        internalType: "struct OracleUtils.SetPricesParams",
        name: "oracleParams",
        type: "tuple",
      },
    ],
    name: "withOraclePricesTest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c28806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806313a9589c14610067578063787944b9146100825780637913b39a146100a2578063a3ebe46d146100b5578063c9855283146100ca578063cc758e2d146100dd575b600080fd5b61006f6100f0565b6040519081526020015b60405180910390f35b61009561009036600461143a565b610146565b6040516100799190611489565b61006f6100b036600461152a565b61054d565b6100c86100c33660046115e3565b6105cd565b005b6100c86100d8366004611650565b6105df565b6100c86100eb3660046116c4565b6106a1565b60004660405160200161012b918152604060208201819052600e908201526d786765742d6f7261636c652d763160901b606082015260800190565b60405160208183030381529060405280519060200120905090565b606060008260200151516001600160401b0381111561016757610167610f9c565b6040519080825280602002602001820160405280156101a057816020015b61018d610eb6565b8152602001906001900390816101855790505b50905060005b836020015151811015610543576101bb610f11565b6101c3610eb6565b6101d18660400151846106b9565b815260608601516101e290846106b9565b602082015260808601516101f69084610730565b6040820152602086015180518490811061021257610212611729565b60209081029190910101516001600160a01b0316608082015260a086015161023a90846107a2565b61024590600a611839565b60c082015260808101516001600160a01b0388169063a6ed563e90610269906107ee565b6040518263ffffffff1660e01b815260040161028791815260200190565b602060405180830381865afa1580156102a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c89190611845565b60a0820152805160ff906102da610869565b6102e4919061185e565b116102fa5780516102f4906108e5565b60608201525b604080516001808252818301909252906020808301908036833750505060a0830152604080516001808252818301909252906020808301908036833750505060c083015260005b60018110156103dd5780610356856001611871565b6103609190611888565b6020840181905260c08801516103759161095a565b8360a00151828151811061038b5761038b611729565b6020026020010181815250506103aa876101000151846020015161095a565b8360c0015182815181106103c0576103c0611729565b6020908102919091010152806103d58161189b565b915050610341565b5060005b600181101561050f57806103f6856001611871565b6104009190611888565b6040840181905260e0880151610415916109c2565b6060840152610120870151604084015161042f91906109c2565b6080840152606083015160408051808201909152600d81526c0dad2dca0e4d2c6ca92dcc8caf609b1b602082015260e085015161046d929091610a09565b608083015160408051808201909152600d81526c0dac2f0a0e4d2c6ca92dcc8caf609b1b60208201526101008501516104a7929091610a09565b8260a001518360600151815181106104c1576104c1611729565b60200260200101518260e00181815250508260c001518360800151815181106104ec576104ec611729565b6020908102919091010151610100830152806105078161189b565b9150506103e1565b508084848151811061052357610523611729565b60200260200101819052505050808061053b9061189b565b9150506101a6565b5090505b92915050565b6000826001600160a01b031663a6ed563e610567846107ee565b6040518263ffffffff1660e01b815260040161058591815260200190565b602060405180830381865afa1580156105a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c69190611845565b9392505050565b6105d984848484610a64565b50505050565b83838383836001600160a01b031663129dab8c8484846040518463ffffffff1660e01b8152600401610613939291906119b6565b600060405180830381600087803b15801561062d57600080fd5b505af1158015610641573d6000803e3d6000fd5b50505050836001600160a01b031662ccf1556040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561067f57600080fd5b505af1158015610693573d6000803e3d6000fd5b505050505050505050505050565b6106b46106ac6100f0565b848484610a64565b505050565b6000806107058484604060c0600019901c6040518060400160405280601f81526020017f676574556e636f6d7061637465644f7261636c65426c6f636b4e756d62657200815250610b9f565b9050806000036105c65760405163349f5fdd60e11b8152600481018490526024015b60405180910390fd5b60008061077c8484604060c0600019901c6040518060400160405280601d81526020017f676574556e636f6d7061637465644f7261636c6554696d657374616d70000000815250610b9f565b9050806000036105c657604051639ffb34e960e01b815260048101849052602401610727565b6000806107e68484600860f8600019901c6040518060400160405280601581526020017419d95d155b98dbdb5c1858dd1959111958da5b585b605a1b815250610b9f565b949350505050565b600060405160200161081f906020808252600b908201526a4f5241434c455f5459504560a81b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b6000610873610c3c565b156108e05760646001600160a01b031663a3b1b31d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108db9190611845565b905090565b504390565b60006108ef610c3c565b15610955576040516315a03d4160e11b815260048101839052606490632b407a8290602401602060405180830381865afa158015610931573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105479190611845565b504090565b60008061099c8484602060e0600019901c60405180604001604052806013815260200172676574556e636f6d706163746564507269636560681b815250610b9f565b9050806000036105c657604051630554193160e21b815260048101849052602401610727565b6000806107e68484600860f8600019901c604051806040016040528060188152602001770cecae8aadcc6dedae0c2c6e8cac8a0e4d2c6ca92dcc8caf60431b815250610b9f565b6101008210610a2f578181604051630a1f10ab60e11b8152600401610727929190611b70565b82516001831b90811615610a5a57828260405163d406473760e01b8152600401610727929190611b70565b8351179092525050565b6000610b4285856000015186602001518760400151886060015189608001518a60a001518b60c001518c60e001518d6101000151604051602001610afa9a99989796959493929190998a5260208a01989098526040890196909652606088019490945260808701929092526001600160a01b031660a086015260c085015260e08401526101008301526101208201526101400190565b604051602081830303815290604052805190602001207b0ca2ba3432b932bab69029b4b3b732b21026b2b9b9b0b3b29d05199960211b6000908152601c91909152603c902090565b90506000610b508285610c53565b9050826001600160a01b0316816001600160a01b031614610b97576040516310b5d43760e21b81526001600160a01b03808316600483015284166024820152604401610727565b505050505050565b600080610bae85610100611b89565b90506000610bbc8288611b89565b905087518110610be7578787828660405163bdec9c0d60e01b81526004016107279493929190611bab565b6000888281518110610bfb57610bfb611729565b602002602001015190506000878484610c149190611871565b610c1e908b61185e565b610c289190611871565b9190911c8616935050505095945050505050565b600061a4b14614806108db5750504662066eed1490565b6000806000610c628585610c6f565b9150915061054381610cb4565b6000808251604103610ca55760208301516040840151606085015160001a610c9987828585610dfc565b94509450505050610cad565b506000905060025b9250929050565b6000816004811115610cc857610cc8611bdc565b03610cd05750565b6001816004811115610ce457610ce4611bdc565b03610d2c5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610727565b6002816004811115610d4057610d40611bdc565b03610d8d5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610727565b6003816004811115610da157610da1611bdc565b03610df95760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610727565b50565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115610e295750600090506003610ead565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610e7d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ea657600060019250925050610ead565b9150600090505b94509492505050565b6040518061012001604052806000815260200160008152602001600081526020016000801916815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081525090565b60405180610120016040528060008019168152602001600081526020016000815260200160008152602001600081526020016060815260200160608152602001610f676040518060200160405280600081525090565b8152602001610f826040518060200160405280600081525090565b905290565b6001600160a01b0381168114610df957600080fd5b634e487b7160e01b600052604160045260246000fd5b6040516101c081016001600160401b0381118282101715610fd557610fd5610f9c565b60405290565b60405161012081016001600160401b0381118282101715610fd557610fd5610f9c565b604051601f8201601f191681016001600160401b038111828210171561102657611026610f9c565b604052919050565b60006001600160401b0382111561104757611047610f9c565b5060051b60200190565b803561105c81610f87565b919050565b600082601f83011261107257600080fd5b813560206110876110828361102e565b610ffe565b82815260059290921b840181019181810190868411156110a657600080fd5b8286015b848110156110ca5780356110bd81610f87565b83529183019183016110aa565b509695505050505050565b600082601f8301126110e657600080fd5b813560206110f66110828361102e565b82815260059290921b8401810191818101908684111561111557600080fd5b8286015b848110156110ca5780358352918301918301611119565b600082601f83011261114157600080fd5b81356001600160401b0381111561115a5761115a610f9c565b61116d601f8201601f1916602001610ffe565b81815284602083860101111561118257600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f8301126111b057600080fd5b813560206111c06110828361102e565b82815260059290921b840181019181810190868411156111df57600080fd5b8286015b848110156110ca5780356001600160401b038111156112025760008081fd5b6112108986838b0101611130565b8452509183019183016111e3565b60006101c0828403121561123157600080fd5b611239610fb2565b82358152905060208201356001600160401b038082111561125957600080fd5b61126585838601611061565b6020840152604084013591508082111561127e57600080fd5b61128a858386016110d5565b604084015260608401359150808211156112a357600080fd5b6112af858386016110d5565b606084015260808401359150808211156112c857600080fd5b6112d4858386016110d5565b608084015260a08401359150808211156112ed57600080fd5b6112f9858386016110d5565b60a084015260c084013591508082111561131257600080fd5b61131e858386016110d5565b60c084015260e084013591508082111561133757600080fd5b611343858386016110d5565b60e08401526101009150818401358181111561135e57600080fd5b61136a868287016110d5565b83850152506101209150818401358181111561138557600080fd5b611391868287016110d5565b8385015250610140915081840135818111156113ac57600080fd5b6113b88682870161119f565b8385015250610160915081840135818111156113d357600080fd5b6113df86828701611061565b8385015250610180915081840135818111156113fa57600080fd5b61140686828701611061565b83850152506101a09150818401358181111561142157600080fd5b61142d8682870161119f565b8385015250505092915050565b6000806040838503121561144d57600080fd5b823561145881610f87565b915060208301356001600160401b0381111561147357600080fd5b61147f8582860161121e565b9150509250929050565b602080825282518282018190526000919060409081850190868401855b8281101561151d5781518051855286810151878601528581015186860152606080820151908601526080808201516001600160a01b03169086015260a0808201519086015260c0808201519086015260e08082015190860152610100908101519085015261012090930192908501906001016114a6565b5091979650505050505050565b6000806040838503121561153d57600080fd5b823561154881610f87565b9150602083013561155881610f87565b809150509250929050565b6000610120828403121561157657600080fd5b61157e610fdb565b9050813581526020820135602082015260408201356040820152606082013560608201526115ae60808301611051565b608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525092915050565b60008060008061018085870312156115fa57600080fd5b8435935061160b8660208701611563565b92506101408501356001600160401b0381111561162757600080fd5b61163387828801611130565b92505061016085013561164581610f87565b939692955090935050565b6000806000806080858703121561166657600080fd5b843561167181610f87565b9350602085013561168181610f87565b9250604085013561169181610f87565b915060608501356001600160401b038111156116ac57600080fd5b6116b88782880161121e565b91505092959194509250565b600080600061016084860312156116da57600080fd5b6116e48585611563565b92506101208401356001600160401b0381111561170057600080fd5b61170c86828701611130565b92505061014084013561171e81610f87565b809150509250925092565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600181815b808511156117905781600019048211156117765761177661173f565b8085161561178357918102915b93841c939080029061175a565b509250929050565b6000826117a757506001610547565b816117b457506000610547565b81600181146117ca57600281146117d4576117f0565b6001915050610547565b60ff8411156117e5576117e561173f565b50506001821b610547565b5060208310610133831016604e8410600b8410161715611813575081810a610547565b61181d8383611755565b80600019048211156118315761183161173f565b029392505050565b60006105c68383611798565b60006020828403121561185757600080fd5b5051919050565b818103818111156105475761054761173f565b80820281158282048414176105475761054761173f565b808201808211156105475761054761173f565b6000600182016118ad576118ad61173f565b5060010190565b600081518084526020808501945080840160005b838110156118ed5781516001600160a01b0316875295820195908201906001016118c8565b509495945050505050565b600081518084526020808501945080840160005b838110156118ed5781518752958201959082019060010161190c565b6000815180845260005b8181101561194e57602081850181015186830182015201611932565b506000602082860101526020601f19601f83011685010191505092915050565b600081518084526020808501808196508360051b8101915082860160005b8581101561151d5782840389526119a4848351611928565b9885019893509084019060010161198c565b600060018060a01b038086168352808516602084015250606060408301528251606083015260208301516101c08060808501526119f76102208501836118b4565b91506040850151605f19808685030160a0870152611a1584836118f8565b935060608701519150808685030160c0870152611a3284836118f8565b935060808701519150808685030160e0870152611a4f84836118f8565b935060a08701519150610100818786030181880152611a6e85846118f8565b945060c08801519250610120828887030181890152611a8d86856118f8565b955060e089015193506101408389880301818a0152611aac87866118f8565b9650828a0151945061016092508389880301838a0152611acc87866118f8565b9650818a0151945061018091508389880301828a0152611aec87866118f8565b9650808a01519450506101a08389880301818a0152611b0b878661196e565b9650828a015194508389880301868a0152611b2687866118b4565b9650818a0151955083898803016101e08a0152611b4387876118b4565b9650808a0151955050505080868503016102008701525050611b65828261196e565b979650505050505050565b8281526040602082015260006107e66040830184611928565b600082611ba657634e487b7160e01b600052601260045260246000fd5b500490565b608081526000611bbe60808301876118f8565b8560208401528460408401528281036060840152611b658185611928565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220b2a61da25551cbc9cb9c7be0cf3519bd72bcda2db2d0ff813ffbc7a296980a5464736f6c63430008120033";

type OracleModuleTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleModuleTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleModuleTest__factory extends ContractFactory {
  constructor(...args: OracleModuleTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OracleModuleTest> {
    return super.deploy(overrides || {}) as Promise<OracleModuleTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OracleModuleTest {
    return super.attach(address) as OracleModuleTest;
  }
  override connect(signer: Signer): OracleModuleTest__factory {
    return super.connect(signer) as OracleModuleTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleModuleTestInterface {
    return new utils.Interface(_abi) as OracleModuleTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleModuleTest {
    return new Contract(address, _abi, signerOrProvider) as OracleModuleTest;
  }
}
