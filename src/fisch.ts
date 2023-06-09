import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  AssetPromotedToCollateral as AssetPromotedToCollateralEvent,
  MintedNft as MintedNftEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/fisch/fisch"
import {
  Asset, User,
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
}

export function handleAssetPromotedToCollateral(
  event: AssetPromotedToCollateralEvent
): void {
  let asset = Asset.load(event.params._tokenId.toHex())
  if(asset){
    asset.isCollateral = event.params.isCollateral
    asset.save()

  }
}

export function handleMintedNft(event: MintedNftEvent): void {

  let asset = Asset.load(event.params.tokenId.toHex());
  if(!asset){
    asset = new Asset(event.params.tokenId.toHex())
    asset.owner = event.params.owner.toHexString()
    asset.title = event.params.title
    asset.description = event.params.description
    asset.tokenId = event.params.tokenId
    asset.price = event.params.price
    asset.assetURI = event.params.assetURI
    asset.revenue = event.params.revenue
    asset.expenses = event.params.expenses
    asset.traffic = event.params.traffic
    asset.productLink = event.params.productLink
    asset.isFrozen = event.params.isFrozen
    asset.ownerEmail = event.params.ownerEmail
    asset.isCollateral = event.params.isCollateral
    asset.save()
  }
  
  let user = User.load(event.transaction.from.toHexString())
  if(!user){
    user = new User(event.transaction.from.toHexString())
    user.save()
  }
  
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  
}

export function handleTransfer(event: TransferEvent): void {

  let asset = Asset.load(event.params.tokenId.toHex())
  if(asset){
    asset.owner = event.params.to.toHexString()
    asset.save()
  }

  let user = User.load(event.transaction.from.toHexString())
  if(!user){
    user = new User(event.transaction.from.toHexString())
    user.save()
  }
  
}
