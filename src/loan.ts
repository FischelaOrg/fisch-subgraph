import {
  CollateralLiquidated as CollateralLiquidatedEvent,
  FundsAdded as FundsAddedEvent,
  LoanApproved as LoanApprovedEvent,
  LoanBorrowed as LoanBorrowedEvent,
  LoanCancelled as LoanCancelledEvent,
  LoanCreated as LoanCreatedEvent,
  LoanLocked as LoanLockedEvent,
  LoanRepayed as LoanRepayedEvent,
  LoanUnLocked as LoanUnLockedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/loan/loan"
import {
  Borrow,
  Loan,
  User
} from "../generated/schema"

export function handleCollateralLiquidated(
  event: CollateralLiquidatedEvent
): void {

  let loan = Loan.load(event.params.lenderId.toHex())
  let borrow = Borrow.load(event.params.borrowerId.toHex())

  if(borrow){
    borrow.currentBorrowAmount = event.params.currentBorrowAmount
    borrow.amountAlreadyRemitted = event.params.amountAlreadyRemitted
    borrow.isRepaid = event.params.isRepaid
    borrow.save()


  }
  if(loan){
    loan.amountRepaid =  event.params.amountRepaid
    loan.currentAvailableLendAmount = event.params.currentAvailableLendAmount
    loan.save()
  }

  
}

export function handleFundsAdded(event: FundsAddedEvent): void {
  let loan = Loan.load(event.params.loanId.toHex())
  if(loan){
    loan.currentAvailableLendAmount = event.params.currentAvailableLendAmount
    loan.innitialLendAmount = event.params.innitialLendAmount
    loan.save()
  }
}

export function handleLoanApproved(event: LoanApprovedEvent): void {
  let borrow = Borrow.load(event.params.borrowerId.toHex())

  if(borrow){
    borrow.currentBorrowAmount = event.params.currentBorrowAmount
    borrow.deadline = event.params.deadline
    borrow.isApproved = event.params.isApproved
    borrow.save()

  }
}

export function handleLoanBorrowed(event: LoanBorrowedEvent): void {
  let borrow = Borrow.load(event.params.borrowId.toHex())
  if(!borrow){
    borrow = new Borrow(event.params.borrowId.toHex())
    borrow.borrowerId = event.params.borrowId
    borrow.lenderId = event.params.lenderId
    borrow.lender = event.params.lender.toHexString()
    borrow.borrower = event.params.borrower.toHexString()
    borrow.innitialBorrowAmount = event.params.innitialBorrowAmount
    borrow.currentBorrowAmount = event.params.currentBorrowAmount
    borrow.amountAlreadyRemitted = event.params.amountAlreadyRemitted
    borrow.deadline = event.params.deadline
    borrow.interest = event.params.interest
    borrow.nftCollateralTokenId = event.params.nftCollateralTokenId
    borrow.receiverAddress = event.params.receiverAddress.toHexString()
    borrow.isApproved = event.params.isApproved
    borrow.isRepaid = event.params.isRepaid
    borrow.save()
  }

  let user = User.load(event.transaction.from.toHexString())
  if(!user){
    user = new User(event.transaction.from.toHexString())
    user.save()
  }
}

export function handleLoanCancelled(event: LoanCancelledEvent): void {
  let loan = Loan.load(event.params.lenderId.toHex())
  if(loan){
    loan.isActive = event.params.isActive
    loan.save()
  }

}

export function handleLoanCreated(event: LoanCreatedEvent): void {
  let loan = Loan.load(event.params.loanId.toHex())
  if(!loan){
    loan = new Loan(event.params.loanId.toHex())
    loan.loanId = event.params.loanId
    loan.innitialLendAmount = event.params.innitialLendAmount
    loan.currentAvailableLendAmount = event.params.currentAvailableLendAmount
    loan.amountRepaid = event.params.amountRepaid
    loan.borrowerId = event.params.borrowerId
    loan.interestRate = event.params.interestRate
    loan.loanOutDuration = event.params.loanOutDuration
    loan.locked = event.params.locked
    loan.isActive = event.params.isActive
    loan.lender = event.params.lender.toHexString()
    loan.loanDurationInMonthCount = event.params.loanDurationInMonthCount
    loan.save()
  }
 

  let user = User.load(event.transaction.from.toHexString())
  if(!user){
    user = new User(event.transaction.from.toHexString())
    user.save()
  }
}

export function handleLoanLocked(event: LoanLockedEvent): void {

  let loan = Loan.load(event.params.loanId.toHex())
  if(loan){
    loan.locked = event.params.locked
    loan.save()
  }

}

export function handleLoanRepayed(event: LoanRepayedEvent): void {
  let loan = Loan.load(event.params.lenderId.toHex())
  let borrow = Borrow.load(event.params.borrowerId.toHex())

  if(borrow){
    borrow.amountAlreadyRemitted = event.params.amountAlreadyRemitted
    borrow.currentBorrowAmount = event.params.currentBorrowAmount
    borrow.isRepaid = event.params.isRepaid
    borrow.save()
  }

  if(loan){
    loan.currentAvailableLendAmount = event.params.currentAvailableLendAmount
    loan.amountRepaid = event.params.amountRepaid
    loan.save()
    
  }

}

export function handleLoanUnLocked(event: LoanUnLockedEvent): void {
  let loan = Loan.load(event.params.loanId.toHex())
  if(loan){
    loan.locked = event.params.locked
    loan.save()
  }
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  
}
