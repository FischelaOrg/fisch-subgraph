import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AmountReceived,
  AmountSent,
  AuctionCancelled,
  AuctionConfirmed,
  AuctionCreated,
  AuctionEnded,
  OwnershipTransferred,
  PlacedBid
} from "../generated/ marketplace/ marketplace"

export function createAmountReceivedEvent(
  sender: Address,
  amount: BigInt
): AmountReceived {
  let amountReceivedEvent = changetype<AmountReceived>(newMockEvent())

  amountReceivedEvent.parameters = new Array()

  amountReceivedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  amountReceivedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return amountReceivedEvent
}

export function createAmountSentEvent(to: Address, amount: BigInt): AmountSent {
  let amountSentEvent = changetype<AmountSent>(newMockEvent())

  amountSentEvent.parameters = new Array()

  amountSentEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  amountSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return amountSentEvent
}

export function createAuctionCancelledEvent(
  auctionId: BigInt,
  tokenId: BigInt,
  seller: Address,
  started: boolean
): AuctionCancelled {
  let auctionCancelledEvent = changetype<AuctionCancelled>(newMockEvent())

  auctionCancelledEvent.parameters = new Array()

  auctionCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionCancelledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  auctionCancelledEvent.parameters.push(
    new ethereum.EventParam("started", ethereum.Value.fromBoolean(started))
  )

  return auctionCancelledEvent
}

export function createAuctionConfirmedEvent(
  auctionId: BigInt,
  winner: Address,
  settledPrice: BigInt,
  confirmed: boolean
): AuctionConfirmed {
  let auctionConfirmedEvent = changetype<AuctionConfirmed>(newMockEvent())

  auctionConfirmedEvent.parameters = new Array()

  auctionConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionConfirmedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  auctionConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "settledPrice",
      ethereum.Value.fromUnsignedBigInt(settledPrice)
    )
  )
  auctionConfirmedEvent.parameters.push(
    new ethereum.EventParam("confirmed", ethereum.Value.fromBoolean(confirmed))
  )

  return auctionConfirmedEvent
}

export function createAuctionCreatedEvent(
  auctionId: BigInt,
  tokenId: BigInt,
  seller: Address,
  startTime: BigInt,
  endTime: BigInt,
  reservePrice: BigInt,
  started: boolean,
  resulted: boolean,
  buyer: Address,
  confirmed: boolean
): AuctionCreated {
  let auctionCreatedEvent = changetype<AuctionCreated>(newMockEvent())

  auctionCreatedEvent.parameters = new Array()

  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "reservePrice",
      ethereum.Value.fromUnsignedBigInt(reservePrice)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("started", ethereum.Value.fromBoolean(started))
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("resulted", ethereum.Value.fromBoolean(resulted))
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("confirmed", ethereum.Value.fromBoolean(confirmed))
  )

  return auctionCreatedEvent
}

export function createAuctionEndedEvent(
  auctionId: BigInt,
  winner: Address,
  settledPrice: BigInt,
  resulted: boolean,
  started: boolean
): AuctionEnded {
  let auctionEndedEvent = changetype<AuctionEnded>(newMockEvent())

  auctionEndedEvent.parameters = new Array()

  auctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "settledPrice",
      ethereum.Value.fromUnsignedBigInt(settledPrice)
    )
  )
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam("resulted", ethereum.Value.fromBoolean(resulted))
  )
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam("started", ethereum.Value.fromBoolean(started))
  )

  return auctionEndedEvent
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

export function createPlacedBidEvent(
  bidAmount: BigInt,
  bidder: Address,
  bidTime: BigInt,
  auctionId: BigInt,
  tokenId: BigInt
): PlacedBid {
  let placedBidEvent = changetype<PlacedBid>(newMockEvent())

  placedBidEvent.parameters = new Array()

  placedBidEvent.parameters.push(
    new ethereum.EventParam(
      "bidAmount",
      ethereum.Value.fromUnsignedBigInt(bidAmount)
    )
  )
  placedBidEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  placedBidEvent.parameters.push(
    new ethereum.EventParam(
      "bidTime",
      ethereum.Value.fromUnsignedBigInt(bidTime)
    )
  )
  placedBidEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  placedBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return placedBidEvent
}
