import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ArbitratorRegistryChanged } from "../generated/schema"
import { ArbitratorRegistryChanged as ArbitratorRegistryChangedEvent } from "../generated/RequestHub/RequestHub"
import { handleArbitratorRegistryChanged } from "../src/request-hub"
import { createArbitratorRegistryChangedEvent } from "./request-hub-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let param0 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newArbitratorRegistryChangedEvent = createArbitratorRegistryChangedEvent(
      param0
    )
    handleArbitratorRegistryChanged(newArbitratorRegistryChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ArbitratorRegistryChanged created and stored", () => {
    assert.entityCount("ArbitratorRegistryChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ArbitratorRegistryChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "param0",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
