import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ArbitratorRegistryChanged,
  BurnAnswered,
  BurnArbitrateAsked,
  Deployed,
  DisputeCreated,
  EntityAddedToRequest,
  OwnershipAdjusted,
  OwnershipAdjustmentAnswered,
  OwnershipAdjustmentArbitrateAsked,
  OwnershipAdjustmentAsked,
  OwnershipRestoreAnswered,
  OwnershipRestoreAsked,
  OwnershipTransferred
} from "../generated/RequestHub/RequestHub"

export function createArbitratorRegistryChangedEvent(
  param0: Address
): ArbitratorRegistryChanged {
  let arbitratorRegistryChangedEvent = changetype<ArbitratorRegistryChanged>(
    newMockEvent()
  )

  arbitratorRegistryChangedEvent.parameters = new Array()

  arbitratorRegistryChangedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )

  return arbitratorRegistryChangedEvent
}

export function createBurnAnsweredEvent(
  requestId: BigInt,
  accept: boolean
): BurnAnswered {
  let burnAnsweredEvent = changetype<BurnAnswered>(newMockEvent())

  burnAnsweredEvent.parameters = new Array()

  burnAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  burnAnsweredEvent.parameters.push(
    new ethereum.EventParam("accept", ethereum.Value.fromBoolean(accept))
  )

  return burnAnsweredEvent
}

export function createBurnArbitrateAskedEvent(
  requestId: BigInt,
  dst: Address
): BurnArbitrateAsked {
  let burnArbitrateAskedEvent = changetype<BurnArbitrateAsked>(newMockEvent())

  burnArbitrateAskedEvent.parameters = new Array()

  burnArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  burnArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam("dst", ethereum.Value.fromAddress(dst))
  )

  return burnArbitrateAskedEvent
}

export function createDeployedEvent(): Deployed {
  let deployedEvent = changetype<Deployed>(newMockEvent())

  deployedEvent.parameters = new Array()

  return deployedEvent
}

export function createDisputeCreatedEvent(
  requestId: BigInt,
  arbitratorId: BigInt,
  disputeId: BigInt
): DisputeCreated {
  let disputeCreatedEvent = changetype<DisputeCreated>(newMockEvent())

  disputeCreatedEvent.parameters = new Array()

  disputeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  disputeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "arbitratorId",
      ethereum.Value.fromUnsignedBigInt(arbitratorId)
    )
  )
  disputeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "disputeId",
      ethereum.Value.fromUnsignedBigInt(disputeId)
    )
  )

  return disputeCreatedEvent
}

export function createEntityAddedToRequestEvent(
  requestId: BigInt,
  entityId: BigInt,
  src: Address,
  dst: Address
): EntityAddedToRequest {
  let entityAddedToRequestEvent = changetype<EntityAddedToRequest>(
    newMockEvent()
  )

  entityAddedToRequestEvent.parameters = new Array()

  entityAddedToRequestEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  entityAddedToRequestEvent.parameters.push(
    new ethereum.EventParam(
      "entityId",
      ethereum.Value.fromUnsignedBigInt(entityId)
    )
  )
  entityAddedToRequestEvent.parameters.push(
    new ethereum.EventParam("src", ethereum.Value.fromAddress(src))
  )
  entityAddedToRequestEvent.parameters.push(
    new ethereum.EventParam("dst", ethereum.Value.fromAddress(dst))
  )

  return entityAddedToRequestEvent
}

export function createOwnershipAdjustedEvent(
  newowner: Address,
  oldowner: Address,
  entityId: BigInt
): OwnershipAdjusted {
  let ownershipAdjustedEvent = changetype<OwnershipAdjusted>(newMockEvent())

  ownershipAdjustedEvent.parameters = new Array()

  ownershipAdjustedEvent.parameters.push(
    new ethereum.EventParam("newowner", ethereum.Value.fromAddress(newowner))
  )
  ownershipAdjustedEvent.parameters.push(
    new ethereum.EventParam("oldowner", ethereum.Value.fromAddress(oldowner))
  )
  ownershipAdjustedEvent.parameters.push(
    new ethereum.EventParam(
      "entityId",
      ethereum.Value.fromUnsignedBigInt(entityId)
    )
  )

  return ownershipAdjustedEvent
}

export function createOwnershipAdjustmentAnsweredEvent(
  requestId: BigInt,
  accept: boolean
): OwnershipAdjustmentAnswered {
  let ownershipAdjustmentAnsweredEvent = changetype<
    OwnershipAdjustmentAnswered
  >(newMockEvent())

  ownershipAdjustmentAnsweredEvent.parameters = new Array()

  ownershipAdjustmentAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipAdjustmentAnsweredEvent.parameters.push(
    new ethereum.EventParam("accept", ethereum.Value.fromBoolean(accept))
  )

  return ownershipAdjustmentAnsweredEvent
}

export function createOwnershipAdjustmentArbitrateAskedEvent(
  requestId: BigInt,
  dst: Address
): OwnershipAdjustmentArbitrateAsked {
  let ownershipAdjustmentArbitrateAskedEvent = changetype<
    OwnershipAdjustmentArbitrateAsked
  >(newMockEvent())

  ownershipAdjustmentArbitrateAskedEvent.parameters = new Array()

  ownershipAdjustmentArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipAdjustmentArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam("dst", ethereum.Value.fromAddress(dst))
  )

  return ownershipAdjustmentArbitrateAskedEvent
}

export function createOwnershipAdjustmentAskedEvent(
  requestId: BigInt,
  dst: Address
): OwnershipAdjustmentAsked {
  let ownershipAdjustmentAskedEvent = changetype<OwnershipAdjustmentAsked>(
    newMockEvent()
  )

  ownershipAdjustmentAskedEvent.parameters = new Array()

  ownershipAdjustmentAskedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipAdjustmentAskedEvent.parameters.push(
    new ethereum.EventParam("dst", ethereum.Value.fromAddress(dst))
  )

  return ownershipAdjustmentAskedEvent
}

export function createOwnershipRestoreAnsweredEvent(
  requestId: BigInt,
  accept: boolean
): OwnershipRestoreAnswered {
  let ownershipRestoreAnsweredEvent = changetype<OwnershipRestoreAnswered>(
    newMockEvent()
  )

  ownershipRestoreAnsweredEvent.parameters = new Array()

  ownershipRestoreAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipRestoreAnsweredEvent.parameters.push(
    new ethereum.EventParam("accept", ethereum.Value.fromBoolean(accept))
  )

  return ownershipRestoreAnsweredEvent
}

export function createOwnershipRestoreAskedEvent(
  requestId: BigInt,
  newowner: Address
): OwnershipRestoreAsked {
  let ownershipRestoreAskedEvent = changetype<OwnershipRestoreAsked>(
    newMockEvent()
  )

  ownershipRestoreAskedEvent.parameters = new Array()

  ownershipRestoreAskedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipRestoreAskedEvent.parameters.push(
    new ethereum.EventParam("newowner", ethereum.Value.fromAddress(newowner))
  )

  return ownershipRestoreAskedEvent
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
