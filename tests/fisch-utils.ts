import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  AssetPromotedToCollateral,
  MintedNft,
  OwnershipTransferred,
  Transfer
} from "../generated/fisch/fisch"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createAssetPromotedToCollateralEvent(
  _tokenId: BigInt,
  isCollateral: boolean
): AssetPromotedToCollateral {
  let assetPromotedToCollateralEvent = changetype<AssetPromotedToCollateral>(
    newMockEvent()
  )

  assetPromotedToCollateralEvent.parameters = new Array()

  assetPromotedToCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  assetPromotedToCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "isCollateral",
      ethereum.Value.fromBoolean(isCollateral)
    )
  )

  return assetPromotedToCollateralEvent
}

export function createMintedNftEvent(
  owner: Address,
  title: string,
  description: string,
  tokenId: BigInt,
  price: BigInt,
  assetURI: string,
  revenue: BigInt,
  expenses: BigInt,
  traffic: BigInt,
  productLink: string,
  isFrozen: boolean,
  ownerEmail: string,
  isCollateral: boolean
): MintedNft {
  let mintedNftEvent = changetype<MintedNft>(newMockEvent())

  mintedNftEvent.parameters = new Array()

  mintedNftEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam("assetURI", ethereum.Value.fromString(assetURI))
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam(
      "revenue",
      ethereum.Value.fromUnsignedBigInt(revenue)
    )
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam(
      "expenses",
      ethereum.Value.fromUnsignedBigInt(expenses)
    )
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam(
      "traffic",
      ethereum.Value.fromUnsignedBigInt(traffic)
    )
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam(
      "productLink",
      ethereum.Value.fromString(productLink)
    )
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam("isFrozen", ethereum.Value.fromBoolean(isFrozen))
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam("ownerEmail", ethereum.Value.fromString(ownerEmail))
  )
  mintedNftEvent.parameters.push(
    new ethereum.EventParam(
      "isCollateral",
      ethereum.Value.fromBoolean(isCollateral)
    )
  )

  return mintedNftEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
