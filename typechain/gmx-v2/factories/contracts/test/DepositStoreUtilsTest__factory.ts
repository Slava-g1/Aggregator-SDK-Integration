/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DepositStoreUtilsTest,
  DepositStoreUtilsTestInterface,
} from "../../../contracts/test/DepositStoreUtilsTest";

const _abi = [
  {
    inputs: [],
    name: "getEmptyDeposit",
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
    stateMutability: "pure",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeDeposit",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
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
        name: "deposit",
        type: "tuple",
      },
    ],
    name: "setDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610890806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063706e666714610046578063db4f82a91461005b578063f3f9957614610079575b600080fd5b6100596100543660046103fb565b61008c565b005b6100636100fc565b60405161007091906105fe565b60405180910390f35b610059610087366004610701565b610111565b60405163151a2c8b60e11b815273__$b63e253a228f0e32f671cc49c7fc32477c$__90632a345916906100c790869086908690600401610743565b60006040518083038186803b1580156100df57600080fd5b505af41580156100f3573d6000803e3d6000fd5b50505050505050565b610104610160565b61010c610160565b919050565b6040516374b6fe1360e01b81526001600160a01b038085166004830152602482018490528216604482015273__$b63e253a228f0e32f671cc49c7fc32477c$__906374b6fe13906064016100c7565b604080516101808101909152600060608083018281526080840183905260a0840183905260c0840183905260e0840183905261010084018390526101208401929092526101408301819052610160830152819081526020016101f16040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526040805160208181019092526000815291015290565b6001600160a01b038116811461021e57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b038111828210171561025957610259610221565b60405290565b60405161012081016001600160401b038111828210171561025957610259610221565b803561010c81610209565b600082601f83011261029e57600080fd5b813560206001600160401b03808311156102ba576102ba610221565b8260051b604051601f19603f830116810181811084821117156102df576102df610221565b6040529384528581018301938381019250878511156102fd57600080fd5b83870191505b8482101561032557813561031681610209565b83529183019190830190610303565b979650505050505050565b600060c0828403121561034257600080fd5b60405160c081016001600160401b038111828210171561036457610364610221565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b6000602082840312156103bb57600080fd5b604051602081016001600160401b03811182821017156103dd576103dd610221565b604052905080823580151581146103f357600080fd5b905292915050565b60008060006060848603121561041057600080fd5b833561041b81610209565b92506020840135915060408401356001600160401b038082111561043e57600080fd5b818601915061010080838903121561045557600080fd5b61045d610237565b83358381111561046c57600080fd5b8401610120818b03121561047f57600080fd5b61048761025f565b61049082610282565b815261049e60208301610282565b60208201526104af60408301610282565b60408201526104c060608301610282565b60608201526104d160808301610282565b60808201526104e260a08301610282565b60a08201526104f360c08301610282565b60c082015260e08201358581111561050a57600080fd5b6105168c82850161028d565b60e083015250838201358581111561052d57600080fd5b6105398c82850161028d565b828601525082525061054e8960208601610330565b60208201526105608960e086016103a9565b6040820152809450505050509250925092565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156105b95781516001600160a01b031687529582019590820190600101610594565b509495945050505050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b602081526000610120835161010080602086015261061f8386018351610573565b6020820151610632610140870182610573565b506040820151610646610160870182610573565b50606082015161065a610180870182610573565b50608082015161066e6101a0870182610573565b5060a08201516106826101c0870182610573565b5060c08201516106966101e0870182610573565b5060e0820151836102008701526106b1610240870182610580565b9282015186840361011f19016102208801529293506106d290508383610580565b9250602086015191506106e860408601836105c4565b6040860151805115158683015291505090949350505050565b60008060006060848603121561071657600080fd5b833561072181610209565b925060208401359150604084013561073881610209565b809150509250925092565b60018060a01b0384168152826020820152606060408201526000825161010080606085015261077761016085018351610573565b602082015161078a610180860182610573565b50604082015161079e6101a0860182610573565b5060608201516107b26101c0860182610573565b5060808201516107c66101e0860182610573565b5060a08201516107da610200860182610573565b5060c08201516107ee610220860182610573565b5060e082015161012061024086015261080b610280860182610580565b9282015185840361015f190161026087015292905061082a8184610580565b92505050602084015161084060808501826105c4565b50604084015180511515610140850152509594505050505056fea26469706673582212209626ea78fc27e1216cd1567125119ebcbebdfd47d6fa072e832aec195e84874a64736f6c63430008120033";

type DepositStoreUtilsTestConstructorParams =
  | [
      linkLibraryAddresses: DepositStoreUtilsTestLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositStoreUtilsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class DepositStoreUtilsTest__factory extends ContractFactory {
  constructor(...args: DepositStoreUtilsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        DepositStoreUtilsTest__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: DepositStoreUtilsTestLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b63e253a228f0e32f671cc49c7fc32477c\\$__", "g"),
      linkLibraryAddresses[
        "contracts/deposit/DepositStoreUtils.sol:DepositStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DepositStoreUtilsTest> {
    return super.deploy(overrides || {}) as Promise<DepositStoreUtilsTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DepositStoreUtilsTest {
    return super.attach(address) as DepositStoreUtilsTest;
  }
  override connect(signer: Signer): DepositStoreUtilsTest__factory {
    return super.connect(signer) as DepositStoreUtilsTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositStoreUtilsTestInterface {
    return new utils.Interface(_abi) as DepositStoreUtilsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositStoreUtilsTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DepositStoreUtilsTest;
  }
}

export interface DepositStoreUtilsTestLibraryAddresses {
  ["contracts/deposit/DepositStoreUtils.sol:DepositStoreUtils"]: string;
}
