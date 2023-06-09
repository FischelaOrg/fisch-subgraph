import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CollateralLiquidated,
  FundsAdded,
  LoanApproved,
  LoanBorrowed,
  LoanCancelled,
  LoanCreated,
  LoanLocked,
  LoanRepayed,
  LoanUnLocked,
  OwnershipTransferred
} from "../generated/loan/loan"

export function createCollateralLiquidatedEvent(
  lenderId: BigInt,
  borrowerId: BigInt,
  lender: Address,
  borrower: Address,
  amount: BigInt,
  liquidator: Address,
  currentAvailableLendAmount: BigInt,
  amountRepaid: BigInt,
  currentBorrowAmount: BigInt,
  isRepaid: boolean,
  amountAlreadyRemitted: BigInt
): CollateralLiquidated {
  let collateralLiquidatedEvent = changetype<CollateralLiquidated>(
    newMockEvent()
  )

  collateralLiquidatedEvent.parameters = new Array()

  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "lenderId",
      ethereum.Value.fromUnsignedBigInt(lenderId)
    )
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowerId",
      ethereum.Value.fromUnsignedBigInt(borrowerId)
    )
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "currentAvailableLendAmount",
      ethereum.Value.fromUnsignedBigInt(currentAvailableLendAmount)
    )
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "amountRepaid",
      ethereum.Value.fromUnsignedBigInt(amountRepaid)
    )
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "currentBorrowAmount",
      ethereum.Value.fromUnsignedBigInt(currentBorrowAmount)
    )
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam("isRepaid", ethereum.Value.fromBoolean(isRepaid))
  )
  collateralLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "amountAlreadyRemitted",
      ethereum.Value.fromUnsignedBigInt(amountAlreadyRemitted)
    )
  )

  return collateralLiquidatedEvent
}

export function createFundsAddedEvent(
  currentAvailableLendAmount: BigInt,
  innitialLendAmount: BigInt,
  lender: Address,
  loanId: BigInt
): FundsAdded {
  let fundsAddedEvent = changetype<FundsAdded>(newMockEvent())

  fundsAddedEvent.parameters = new Array()

  fundsAddedEvent.parameters.push(
    new ethereum.EventParam(
      "currentAvailableLendAmount",
      ethereum.Value.fromUnsignedBigInt(currentAvailableLendAmount)
    )
  )
  fundsAddedEvent.parameters.push(
    new ethereum.EventParam(
      "innitialLendAmount",
      ethereum.Value.fromUnsignedBigInt(innitialLendAmount)
    )
  )
  fundsAddedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  fundsAddedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return fundsAddedEvent
}

export function createLoanApprovedEvent(
  lenderId: BigInt,
  borrowerId: BigInt,
  lender: Address,
  borrower: Address,
  amount: BigInt,
  deadline: BigInt,
  currentBorrowAmount: BigInt,
  isApproved: boolean
): LoanApproved {
  let loanApprovedEvent = changetype<LoanApproved>(newMockEvent())

  loanApprovedEvent.parameters = new Array()

  loanApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "lenderId",
      ethereum.Value.fromUnsignedBigInt(lenderId)
    )
  )
  loanApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowerId",
      ethereum.Value.fromUnsignedBigInt(borrowerId)
    )
  )
  loanApprovedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanApprovedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanApprovedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  loanApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )
  loanApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "currentBorrowAmount",
      ethereum.Value.fromUnsignedBigInt(currentBorrowAmount)
    )
  )
  loanApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "isApproved",
      ethereum.Value.fromBoolean(isApproved)
    )
  )

  return loanApprovedEvent
}

export function createLoanBorrowedEvent(
  borrowId: BigInt,
  amount: BigInt,
  lenderId: BigInt,
  lender: Address,
  borrower: Address,
  innitialBorrowAmount: BigInt,
  currentBorrowAmount: BigInt,
  amountAlreadyRemitted: BigInt,
  deadline: BigInt,
  interest: BigInt,
  nftCollateralTokenId: BigInt,
  receiverAddress: Address,
  isApproved: boolean,
  isRepaid: boolean
): LoanBorrowed {
  let loanBorrowedEvent = changetype<LoanBorrowed>(newMockEvent())

  loanBorrowedEvent.parameters = new Array()

  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowId",
      ethereum.Value.fromUnsignedBigInt(borrowId)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "lenderId",
      ethereum.Value.fromUnsignedBigInt(lenderId)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "innitialBorrowAmount",
      ethereum.Value.fromUnsignedBigInt(innitialBorrowAmount)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "currentBorrowAmount",
      ethereum.Value.fromUnsignedBigInt(currentBorrowAmount)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "amountAlreadyRemitted",
      ethereum.Value.fromUnsignedBigInt(amountAlreadyRemitted)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "interest",
      ethereum.Value.fromUnsignedBigInt(interest)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "nftCollateralTokenId",
      ethereum.Value.fromUnsignedBigInt(nftCollateralTokenId)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "receiverAddress",
      ethereum.Value.fromAddress(receiverAddress)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "isApproved",
      ethereum.Value.fromBoolean(isApproved)
    )
  )
  loanBorrowedEvent.parameters.push(
    new ethereum.EventParam("isRepaid", ethereum.Value.fromBoolean(isRepaid))
  )

  return loanBorrowedEvent
}

export function createLoanCancelledEvent(
  lenderId: BigInt,
  lender: Address,
  amount: BigInt,
  isActive: boolean
): LoanCancelled {
  let loanCancelledEvent = changetype<LoanCancelled>(newMockEvent())

  loanCancelledEvent.parameters = new Array()

  loanCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "lenderId",
      ethereum.Value.fromUnsignedBigInt(lenderId)
    )
  )
  loanCancelledEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanCancelledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  loanCancelledEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )

  return loanCancelledEvent
}

export function createLoanCreatedEvent(
  loanId: BigInt,
  innitialLendAmount: BigInt,
  currentAvailableLendAmount: BigInt,
  amountRepaid: BigInt,
  borrowerId: BigInt,
  interestRate: BigInt,
  loanOutDuration: BigInt,
  locked: boolean,
  isActive: boolean,
  lender: Address,
  loanDurationInMonthCount: BigInt
): LoanCreated {
  let loanCreatedEvent = changetype<LoanCreated>(newMockEvent())

  loanCreatedEvent.parameters = new Array()

  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "innitialLendAmount",
      ethereum.Value.fromUnsignedBigInt(innitialLendAmount)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "currentAvailableLendAmount",
      ethereum.Value.fromUnsignedBigInt(currentAvailableLendAmount)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "amountRepaid",
      ethereum.Value.fromUnsignedBigInt(amountRepaid)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowerId",
      ethereum.Value.fromUnsignedBigInt(borrowerId)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "interestRate",
      ethereum.Value.fromUnsignedBigInt(interestRate)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanOutDuration",
      ethereum.Value.fromUnsignedBigInt(loanOutDuration)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("locked", ethereum.Value.fromBoolean(locked))
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanDurationInMonthCount",
      ethereum.Value.fromUnsignedBigInt(loanDurationInMonthCount)
    )
  )

  return loanCreatedEvent
}

export function createLoanLockedEvent(
  loanId: BigInt,
  locked: boolean
): LoanLocked {
  let loanLockedEvent = changetype<LoanLocked>(newMockEvent())

  loanLockedEvent.parameters = new Array()

  loanLockedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  loanLockedEvent.parameters.push(
    new ethereum.EventParam("locked", ethereum.Value.fromBoolean(locked))
  )

  return loanLockedEvent
}

export function createLoanRepayedEvent(
  lenderId: BigInt,
  borrowerId: BigInt,
  lender: Address,
  borrower: Address,
  amount: BigInt,
  currentAvailableLendAmount: BigInt,
  amountRepaid: BigInt,
  amountAlreadyRemitted: BigInt,
  currentBorrowAmount: BigInt,
  isRepaid: boolean
): LoanRepayed {
  let loanRepayedEvent = changetype<LoanRepayed>(newMockEvent())

  loanRepayedEvent.parameters = new Array()

  loanRepayedEvent.parameters.push(
    new ethereum.EventParam(
      "lenderId",
      ethereum.Value.fromUnsignedBigInt(lenderId)
    )
  )
  loanRepayedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowerId",
      ethereum.Value.fromUnsignedBigInt(borrowerId)
    )
  )
  loanRepayedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanRepayedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanRepayedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  loanRepayedEvent.parameters.push(
    new ethereum.EventParam(
      "currentAvailableLendAmount",
      ethereum.Value.fromUnsignedBigInt(currentAvailableLendAmount)
    )
  )
  loanRepayedEvent.parameters.push(
    new ethereum.EventParam(
      "amountRepaid",
      ethereum.Value.fromUnsignedBigInt(amountRepaid)
    )
  )
  loanRepayedEvent.parameters.push(
    new ethereum.EventParam(
      "amountAlreadyRemitted",
      ethereum.Value.fromUnsignedBigInt(amountAlreadyRemitted)
    )
  )
  loanRepayedEvent.parameters.push(
    new ethereum.EventParam(
      "currentBorrowAmount",
      ethereum.Value.fromUnsignedBigInt(currentBorrowAmount)
    )
  )
  loanRepayedEvent.parameters.push(
    new ethereum.EventParam("isRepaid", ethereum.Value.fromBoolean(isRepaid))
  )

  return loanRepayedEvent
}

export function createLoanUnLockedEvent(
  loanId: BigInt,
  locked: boolean
): LoanUnLocked {
  let loanUnLockedEvent = changetype<LoanUnLocked>(newMockEvent())

  loanUnLockedEvent.parameters = new Array()

  loanUnLockedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  loanUnLockedEvent.parameters.push(
    new ethereum.EventParam("locked", ethereum.Value.fromBoolean(locked))
  )

  return loanUnLockedEvent
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
