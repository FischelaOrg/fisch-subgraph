import {
  AmountReceived as AmountReceivedEvent,
  AmountSent as AmountSentEvent,
  AuctionCancelled as AuctionCancelledEvent,
  AuctionConfirmed as AuctionConfirmedEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionEnded as AuctionEndedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PlacedBid as PlacedBidEvent
} from "../generated/ marketplace/ marketplace"
import {
  AmountReceived,
  AmountSent,
  AuctionCancelled,
  AuctionConfirmed,
  AuctionCreated,
  AuctionEnded,
  OwnershipTransferred,
  PlacedBid
} from "../generated/schema"

export function handleAmountReceived(event: AmountReceivedEvent): void {
  let entity = new AmountReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAmountSent(event: AmountSentEvent): void {
  let entity = new AmountSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionCancelled(event: AuctionCancelledEvent): void {
  let entity = new AuctionCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auctionId = event.params.auctionId
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.started = event.params.started

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionConfirmed(event: AuctionConfirmedEvent): void {
  let entity = new AuctionConfirmed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auctionId = event.params.auctionId
  entity.winner = event.params.winner
  entity.settledPrice = event.params.settledPrice
  entity.confirmed = event.params.confirmed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let entity = new AuctionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auctionId = event.params.auctionId
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.reservePrice = event.params.reservePrice
  entity.started = event.params.started
  entity.resulted = event.params.resulted
  entity.buyer = event.params.buyer
  entity.confirmed = event.params.confirmed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionEnded(event: AuctionEndedEvent): void {
  let entity = new AuctionEnded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auctionId = event.params.auctionId
  entity.winner = event.params.winner
  entity.settledPrice = event.params.settledPrice
  entity.resulted = event.params.resulted
  entity.started = event.params.started

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlacedBid(event: PlacedBidEvent): void {
  let entity = new PlacedBid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bidAmount = event.params.bidAmount
  entity.bidder = event.params.bidder
  entity.bidTime = event.params.bidTime
  entity.auctionId = event.params.auctionId
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
