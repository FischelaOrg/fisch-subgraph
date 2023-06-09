import {
  AmountReceived as AmountReceivedEvent,
  AmountSent as AmountSentEvent,
  AuctionCancelled as AuctionCancelledEvent,
  AuctionConfirmed as AuctionConfirmedEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionEnded as AuctionEndedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PlacedBid as PlacedBidEvent
} from "../generated/marketplace/marketplace"
import {
  Auction,
  Bid,
  User,
} from "../generated/schema"

export function handleAmountReceived(event: AmountReceivedEvent): void {
  
}

export function handleAmountSent(event: AmountSentEvent): void {
  
}

export function handleAuctionCancelled(event: AuctionCancelledEvent): void {
  let auction = Auction.load(event.params.auctionId.toHex())
  if(auction){
    auction.started = event.params.started
    auction.save()
  }
}

export function handleAuctionConfirmed(event: AuctionConfirmedEvent): void {
  let auction = Auction.load(event.params.auctionId.toHex())
  if(auction){
    auction.confirmed = event.params.confirmed
    auction.save()
  }

  
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {

  let auction = Auction.load(event.params.auctionId.toHex())

  if(!auction){
    auction = new Auction(event.params.auctionId.toHex())
    auction.auctionId = event.params.auctionId
    auction.tokenId = event.params.tokenId
    auction.seller = event.params.seller.toHexString()
    auction.startTime = event.params.startTime
    auction.endTime = event.params.endTime
    auction.reservePrice = event.params.reservePrice
    auction.started = event.params.started
    auction.resulted = event.params.resulted
    auction.buyer = event.params.buyer.toHexString()
    auction.confirmed = event.params.confirmed
    auction.save()
  }

  let user = User.load(event.transaction.from.toHexString())
  if(!user){
    user = new User(event.transaction.from.toHexString())
    user.save()
  }
 
}

export function handleAuctionEnded(event: AuctionEndedEvent): void {
  let auction = Auction.load(event.params.auctionId.toHex())

 if(auction){
  auction.auctionId = event.params.auctionId
  auction.buyer = event.params.winner.toHexString()
  auction.reservePrice = event.params.settledPrice
  auction.resulted = event.params.resulted
  auction.started = event.params.started
  auction.resulted = event.params.resulted

  auction.save()
 }
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  
}

export function handlePlacedBid(event: PlacedBidEvent): void {
  let bid = Bid.load(event.params.auctionId.toHex())
  if(!bid){
    bid = new Bid(event.params.auctionId.toHex())
    bid.bid = event.params.bidAmount
    bid.bidder = event.params.bidder.toHexString()
    bid.bidTime = event.params.bidTime
    bid.auctionId = event.params.auctionId
    bid.save()
  }
  
  let user = User.load(event.transaction.from.toHexString())
  if(!user){
    user = new User(event.transaction.from.toHexString())
    user.save()
  }
}
