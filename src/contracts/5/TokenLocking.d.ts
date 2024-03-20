/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from ".";

interface TokenLockingInterface extends Interface {
  functions: {
    authority: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    setAuthority: TypedFunctionDescription<{
      encode([authority_]: [string]): string;
    }>;

    setOwner: TypedFunctionDescription<{ encode([owner_]: [string]): string }>;

    setColonyNetwork: TypedFunctionDescription<{
      encode([_colonyNetwork]: [string]): string;
    }>;

    getColonyNetwork: TypedFunctionDescription<{ encode([]: []): string }>;

    lockToken: TypedFunctionDescription<{ encode([_token]: [string]): string }>;

    unlockTokenForUser: TypedFunctionDescription<{
      encode([_token, _user, _lockId]: [string, string, BigNumberish]): string;
    }>;

    incrementLockCounterTo: TypedFunctionDescription<{
      encode([_token, _lockId]: [string, BigNumberish]): string;
    }>;

    deposit: TypedFunctionDescription<{
      encode([_token, _amount]: [string, BigNumberish]): string;
    }>;

    depositFor: TypedFunctionDescription<{
      encode([_token, _amount, _recipient]: [
        string,
        BigNumberish,
        string
      ]): string;
    }>;

    claim: TypedFunctionDescription<{
      encode([_token, _force]: [string, boolean]): string;
    }>;

    transfer: TypedFunctionDescription<{
      encode([_token, _amount, _recipient, _force]: [
        string,
        BigNumberish,
        string,
        boolean
      ]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([_token, _amount, _force]: [
        string,
        BigNumberish,
        boolean
      ]): string;
    }>;

    approveStake: TypedFunctionDescription<{
      encode([_user, _amount, _token]: [string, BigNumberish, string]): string;
    }>;

    obligateStake: TypedFunctionDescription<{
      encode([_user, _amount, _token]: [string, BigNumberish, string]): string;
    }>;

    deobligateStake: TypedFunctionDescription<{
      encode([_user, _amount, _token]: [string, BigNumberish, string]): string;
    }>;

    transferStake: TypedFunctionDescription<{
      encode([_user, _amount, _token, _recipient]: [
        string,
        BigNumberish,
        string,
        string
      ]): string;
    }>;

    reward: TypedFunctionDescription<{
      encode([_recipient, _amount]: [string, BigNumberish]): string;
    }>;

    burn: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    getTotalLockCount: TypedFunctionDescription<{
      encode([_token]: [string]): string;
    }>;

    getUserLock: TypedFunctionDescription<{
      encode([_token, _user]: [string, string]): string;
    }>;

    getTotalObligation: TypedFunctionDescription<{
      encode([_user, _token]: [string, string]): string;
    }>;

    getApproval: TypedFunctionDescription<{
      encode([_user, _token, _obligator]: [string, string, string]): string;
    }>;

    getObligation: TypedFunctionDescription<{
      encode([_user, _token, _obligator]: [string, string, string]): string;
    }>;
  };

  events: {
    ColonyNetworkSet: TypedEventDescription<{
      encodeTopics([colonyNetwork]: [null]): string[];
    }>;

    LogSetAuthority: TypedEventDescription<{
      encodeTopics([authority]: [string | null]): string[];
    }>;

    LogSetOwner: TypedEventDescription<{
      encodeTopics([owner]: [string | null]): string[];
    }>;

    TokenLocked: TypedEventDescription<{
      encodeTopics([token, lockCount]: [null, null]): string[];
    }>;

    UserTokenClaimed: TypedEventDescription<{
      encodeTopics([token, user, amount]: [null, null, null]): string[];
    }>;

    UserTokenDeposited: TypedEventDescription<{
      encodeTopics([token, user, amount]: [null, null, null]): string[];
    }>;

    UserTokenTransferred: TypedEventDescription<{
      encodeTopics([token, user, recipient, amount]: [
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    UserTokenUnlocked: TypedEventDescription<{
      encodeTopics([token, user, lockId]: [null, null, null]): string[];
    }>;

    UserTokenWithdrawn: TypedEventDescription<{
      encodeTopics([token, user, amount]: [null, null, null]): string[];
    }>;
  };
}

export class TokenLocking extends Contract {
  connect(signerOrProvider: Signer | Provider | string): TokenLocking;
  attach(addressOrName: string): TokenLocking;
  deployed(): Promise<TokenLocking>;

  on(event: EventFilter | string, listener: Listener): TokenLocking;
  once(event: EventFilter | string, listener: Listener): TokenLocking;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): TokenLocking;
  removeAllListeners(eventName: EventFilter | string): TokenLocking;
  removeListener(eventName: any, listener: Listener): TokenLocking;

  interface: TokenLockingInterface;

  functions: {
    authority(overrides?: TransactionOverrides): Promise<string>;

    "authority()"(overrides?: TransactionOverrides): Promise<string>;

    owner(overrides?: TransactionOverrides): Promise<string>;

    "owner()"(overrides?: TransactionOverrides): Promise<string>;

    setAuthority(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "setAuthority(address)"(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setOwner(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setColonyNetwork(
      _colonyNetwork: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "setColonyNetwork(address)"(
      _colonyNetwork: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getColonyNetwork(overrides?: TransactionOverrides): Promise<string>;

    "getColonyNetwork()"(overrides?: TransactionOverrides): Promise<string>;

    lockToken(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "lockToken(address)"(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    unlockTokenForUser(
      _token: string,
      _user: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "unlockTokenForUser(address,address,uint256)"(
      _token: string,
      _user: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    incrementLockCounterTo(
      _token: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "incrementLockCounterTo(address,uint256)"(
      _token: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deposit(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "deposit(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    depositFor(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "depositFor(address,uint256,address)"(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    claim(
      _token: string,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "claim(address,bool)"(
      _token: string,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transfer(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256,address,bool)"(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdraw(
      _token: string,
      _amount: BigNumberish,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256,bool)"(
      _token: string,
      _amount: BigNumberish,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    approveStake(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "approveStake(address,uint256,address)"(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    obligateStake(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "obligateStake(address,uint256,address)"(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deobligateStake(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "deobligateStake(address,uint256,address)"(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferStake(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      _recipient: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "transferStake(address,uint256,address,address)"(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      _recipient: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    reward(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<void>;

    "reward(address,uint256)"(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<void>;

    burn(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "burn(uint256)"(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getTotalLockCount(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getTotalLockCount(address)"(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getUserLock(
      _token: string,
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        lockCount: BigNumber;
        balance: BigNumber;
        DEPRECATED_timestamp: BigNumber;
        pendingBalance: BigNumber;
      }
    >;

    "getUserLock(address,address)"(
      _token: string,
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        lockCount: BigNumber;
        balance: BigNumber;
        DEPRECATED_timestamp: BigNumber;
        pendingBalance: BigNumber;
      }
    >;

    getTotalObligation(
      _user: string,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getTotalObligation(address,address)"(
      _user: string,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getApproval(
      _user: string,
      _token: string,
      _obligator: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getApproval(address,address,address)"(
      _user: string,
      _token: string,
      _obligator: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getObligation(
      _user: string,
      _token: string,
      _obligator: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getObligation(address,address,address)"(
      _user: string,
      _token: string,
      _obligator: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };

  authority(overrides?: TransactionOverrides): Promise<string>;

  "authority()"(overrides?: TransactionOverrides): Promise<string>;

  owner(overrides?: TransactionOverrides): Promise<string>;

  "owner()"(overrides?: TransactionOverrides): Promise<string>;

  setAuthority(
    authority_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "setAuthority(address)"(
    authority_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setOwner(
    owner_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "setOwner(address)"(
    owner_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setColonyNetwork(
    _colonyNetwork: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "setColonyNetwork(address)"(
    _colonyNetwork: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getColonyNetwork(overrides?: TransactionOverrides): Promise<string>;

  "getColonyNetwork()"(overrides?: TransactionOverrides): Promise<string>;

  lockToken(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "lockToken(address)"(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  unlockTokenForUser(
    _token: string,
    _user: string,
    _lockId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "unlockTokenForUser(address,address,uint256)"(
    _token: string,
    _user: string,
    _lockId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  incrementLockCounterTo(
    _token: string,
    _lockId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "incrementLockCounterTo(address,uint256)"(
    _token: string,
    _lockId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  deposit(
    _token: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "deposit(address,uint256)"(
    _token: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  depositFor(
    _token: string,
    _amount: BigNumberish,
    _recipient: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "depositFor(address,uint256,address)"(
    _token: string,
    _amount: BigNumberish,
    _recipient: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  claim(
    _token: string,
    _force: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "claim(address,bool)"(
    _token: string,
    _force: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transfer(
    _token: string,
    _amount: BigNumberish,
    _recipient: string,
    _force: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256,address,bool)"(
    _token: string,
    _amount: BigNumberish,
    _recipient: string,
    _force: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdraw(
    _token: string,
    _amount: BigNumberish,
    _force: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256,bool)"(
    _token: string,
    _amount: BigNumberish,
    _force: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256)"(
    _token: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  approveStake(
    _user: string,
    _amount: BigNumberish,
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "approveStake(address,uint256,address)"(
    _user: string,
    _amount: BigNumberish,
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  obligateStake(
    _user: string,
    _amount: BigNumberish,
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "obligateStake(address,uint256,address)"(
    _user: string,
    _amount: BigNumberish,
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  deobligateStake(
    _user: string,
    _amount: BigNumberish,
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "deobligateStake(address,uint256,address)"(
    _user: string,
    _amount: BigNumberish,
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferStake(
    _user: string,
    _amount: BigNumberish,
    _token: string,
    _recipient: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "transferStake(address,uint256,address,address)"(
    _user: string,
    _amount: BigNumberish,
    _token: string,
    _recipient: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  reward(
    _recipient: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<void>;

  "reward(address,uint256)"(
    _recipient: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<void>;

  burn(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "burn(uint256)"(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getTotalLockCount(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  "getTotalLockCount(address)"(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  getUserLock(
    _token: string,
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      lockCount: BigNumber;
      balance: BigNumber;
      DEPRECATED_timestamp: BigNumber;
      pendingBalance: BigNumber;
    }
  >;

  "getUserLock(address,address)"(
    _token: string,
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      lockCount: BigNumber;
      balance: BigNumber;
      DEPRECATED_timestamp: BigNumber;
      pendingBalance: BigNumber;
    }
  >;

  getTotalObligation(
    _user: string,
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  "getTotalObligation(address,address)"(
    _user: string,
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  getApproval(
    _user: string,
    _token: string,
    _obligator: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  "getApproval(address,address,address)"(
    _user: string,
    _token: string,
    _obligator: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  getObligation(
    _user: string,
    _token: string,
    _obligator: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  "getObligation(address,address,address)"(
    _user: string,
    _token: string,
    _obligator: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  filters: {
    ColonyNetworkSet(colonyNetwork: null): EventFilter;

    LogSetAuthority(authority: string | null): EventFilter;

    LogSetOwner(owner: string | null): EventFilter;

    TokenLocked(token: null, lockCount: null): EventFilter;

    UserTokenClaimed(token: null, user: null, amount: null): EventFilter;

    UserTokenDeposited(token: null, user: null, amount: null): EventFilter;

    UserTokenTransferred(
      token: null,
      user: null,
      recipient: null,
      amount: null
    ): EventFilter;

    UserTokenUnlocked(token: null, user: null, lockId: null): EventFilter;

    UserTokenWithdrawn(token: null, user: null, amount: null): EventFilter;
  };

  estimate: {
    authority(overrides?: TransactionOverrides): Promise<BigNumber>;

    "authority()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    owner(overrides?: TransactionOverrides): Promise<BigNumber>;

    "owner()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    setAuthority(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "setAuthority(address)"(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    setOwner(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "setOwner(address)"(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    setColonyNetwork(
      _colonyNetwork: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "setColonyNetwork(address)"(
      _colonyNetwork: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getColonyNetwork(overrides?: TransactionOverrides): Promise<BigNumber>;

    "getColonyNetwork()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    lockToken(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "lockToken(address)"(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    unlockTokenForUser(
      _token: string,
      _user: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "unlockTokenForUser(address,address,uint256)"(
      _token: string,
      _user: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    incrementLockCounterTo(
      _token: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "incrementLockCounterTo(address,uint256)"(
      _token: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    deposit(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "deposit(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    depositFor(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "depositFor(address,uint256,address)"(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    claim(
      _token: string,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "claim(address,bool)"(
      _token: string,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    transfer(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "transfer(address,uint256,address,bool)"(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    withdraw(
      _token: string,
      _amount: BigNumberish,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "withdraw(address,uint256,bool)"(
      _token: string,
      _amount: BigNumberish,
      _force: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "withdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    approveStake(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "approveStake(address,uint256,address)"(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    obligateStake(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "obligateStake(address,uint256,address)"(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    deobligateStake(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "deobligateStake(address,uint256,address)"(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    transferStake(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      _recipient: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "transferStake(address,uint256,address,address)"(
      _user: string,
      _amount: BigNumberish,
      _token: string,
      _recipient: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    reward(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "reward(address,uint256)"(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    burn(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "burn(uint256)"(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getTotalLockCount(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getTotalLockCount(address)"(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getUserLock(
      _token: string,
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getUserLock(address,address)"(
      _token: string,
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getTotalObligation(
      _user: string,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getTotalObligation(address,address)"(
      _user: string,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getApproval(
      _user: string,
      _token: string,
      _obligator: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getApproval(address,address,address)"(
      _user: string,
      _token: string,
      _obligator: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getObligation(
      _user: string,
      _token: string,
      _obligator: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getObligation(address,address,address)"(
      _user: string,
      _token: string,
      _obligator: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}
