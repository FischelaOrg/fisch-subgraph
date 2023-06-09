import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CollateralLiquidated } from "../generated/schema"
import { CollateralLiquidated as CollateralLiquidatedEvent } from "../generated/loan/loan"
import { handleCollateralLiquidated } from "../src/loan"
import { createCollateralLiquidatedEvent } from "./loan-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let lenderId = BigInt.fromI32(234)
    let borrowerId = BigInt.fromI32(234)
    let lender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let borrower = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let liquidator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let currentAvailableLendAmount = BigInt.fromI32(234)
    let amountRepaid = BigInt.fromI32(234)
    let currentBorrowAmount = BigInt.fromI32(234)
    let isRepaid = "boolean Not implemented"
    let amountAlreadyRemitted = BigInt.fromI32(234)
    let newCollateralLiquidatedEvent = createCollateralLiquidatedEvent(
      lenderId,
      borrowerId,
      lender,
      borrower,
      amount,
      liquidator,
      currentAvailableLendAmount,
      amountRepaid,
      currentBorrowAmount,
      isRepaid,
      amountAlreadyRemitted
    )
    handleCollateralLiquidated(newCollateralLiquidatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CollateralLiquidated created and stored", () => {
    assert.entityCount("CollateralLiquidated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "lenderId",
      "234"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrowerId",
      "234"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "lender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrower",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "liquidator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currentAvailableLendAmount",
      "234"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountRepaid",
      "234"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currentBorrowAmount",
      "234"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isRepaid",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "CollateralLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountAlreadyRemitted",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
