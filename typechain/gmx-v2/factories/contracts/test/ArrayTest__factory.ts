/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ArrayTest,
  ArrayTestInterface,
} from "../../../contracts/test/ArrayTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "arr",
        type: "uint256[]",
      },
    ],
    name: "getMedian",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102b4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e8787f4114610030575b600080fd5b61004361003e366004610131565b610055565b60405190815260200160405180910390f35b600061006082610066565b92915050565b6000600282516100769190610204565b6001036100ab57816002835161008c919061022e565b8151811061009c5761009c610242565b60200260200101519050919050565b6002826001600285516100be919061022e565b6100c89190610258565b815181106100d8576100d8610242565b602002602001015183600285516100ef919061022e565b815181106100ff576100ff610242565b6020026020010151610111919061026b565b610060919061022e565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561014457600080fd5b82356001600160401b038082111561015b57600080fd5b818501915085601f83011261016f57600080fd5b8135818111156101815761018161011b565b8060051b604051601f19603f830116810181811085821117156101a6576101a661011b565b6040529182528482019250838101850191888311156101c457600080fd5b938501935b828510156101e2578435845293850193928501926101c9565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082610213576102136101ee565b500690565b634e487b7160e01b600052601160045260246000fd5b60008261023d5761023d6101ee565b500490565b634e487b7160e01b600052603260045260246000fd5b8181038181111561006057610060610218565b808201808211156100605761006061021856fea2646970667358221220a8838d839d82881688f2c9d9aa8c0c75744af49ed00f8cc5ab7443de4fafad3d64736f6c63430008120033";

type ArrayTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArrayTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArrayTest__factory extends ContractFactory {
  constructor(...args: ArrayTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ArrayTest> {
    return super.deploy(overrides || {}) as Promise<ArrayTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ArrayTest {
    return super.attach(address) as ArrayTest;
  }
  override connect(signer: Signer): ArrayTest__factory {
    return super.connect(signer) as ArrayTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArrayTestInterface {
    return new utils.Interface(_abi) as ArrayTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArrayTest {
    return new Contract(address, _abi, signerOrProvider) as ArrayTest;
  }
}
