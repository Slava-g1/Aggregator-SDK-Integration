/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface TokenUtilsInterface extends utils.Interface {
  functions: {};

  events: {
    "NativeTokenTransferReverted(string)": EventFragment;
    "TokenTransferReverted(string,bytes)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "NativeTokenTransferReverted"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenTransferReverted"): EventFragment;
}

export interface NativeTokenTransferRevertedEventObject {
  reason: string;
}
export type NativeTokenTransferRevertedEvent = TypedEvent<
  [string],
  NativeTokenTransferRevertedEventObject
>;

export type NativeTokenTransferRevertedEventFilter =
  TypedEventFilter<NativeTokenTransferRevertedEvent>;

export interface TokenTransferRevertedEventObject {
  reason: string;
  returndata: string;
}
export type TokenTransferRevertedEvent = TypedEvent<
  [string, string],
  TokenTransferRevertedEventObject
>;

export type TokenTransferRevertedEventFilter =
  TypedEventFilter<TokenTransferRevertedEvent>;

export interface TokenUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenUtilsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "NativeTokenTransferReverted(string)"(
      reason?: null
    ): NativeTokenTransferRevertedEventFilter;
    NativeTokenTransferReverted(
      reason?: null
    ): NativeTokenTransferRevertedEventFilter;

    "TokenTransferReverted(string,bytes)"(
      reason?: null,
      returndata?: null
    ): TokenTransferRevertedEventFilter;
    TokenTransferReverted(
      reason?: null,
      returndata?: null
    ): TokenTransferRevertedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
