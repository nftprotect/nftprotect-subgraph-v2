import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  BurnOnActionChanged,
  Deployed,
  MetaEvidenceLoaderChanged,
  OwnershipTransferred,
  ProtectorFactoryRegistered,
  ProtectorFactoryUnregistered,
  RequestHubChanged,
  TechnicalOwnerChanged,
  UserRegistryChanged
} from "../generated/NFTProtect2/NFTProtect2"

export function createBurnOnActionChangedEvent(
  boa: boolean
): BurnOnActionChanged {
  let burnOnActionChangedEvent = changetype<BurnOnActionChanged>(newMockEvent())

  burnOnActionChangedEvent.parameters = new Array()

  burnOnActionChangedEvent.parameters.push(
    new ethereum.EventParam("boa", ethereum.Value.fromBoolean(boa))
  )

  return burnOnActionChangedEvent
}

export function createDeployedEvent(): Deployed {
  let deployedEvent = changetype<Deployed>(newMockEvent())

  deployedEvent.parameters = new Array()

  return deployedEvent
}

export function createMetaEvidenceLoaderChangedEvent(
  param0: Address
): MetaEvidenceLoaderChanged {
  let metaEvidenceLoaderChangedEvent = changetype<MetaEvidenceLoaderChanged>(
    newMockEvent()
  )

  metaEvidenceLoaderChangedEvent.parameters = new Array()

  metaEvidenceLoaderChangedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )

  return metaEvidenceLoaderChangedEvent
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

export function createProtectorFactoryRegisteredEvent(
  param0: Address
): ProtectorFactoryRegistered {
  let protectorFactoryRegisteredEvent = changetype<ProtectorFactoryRegistered>(
    newMockEvent()
  )

  protectorFactoryRegisteredEvent.parameters = new Array()

  protectorFactoryRegisteredEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )

  return protectorFactoryRegisteredEvent
}

export function createProtectorFactoryUnregisteredEvent(
  param0: Address
): ProtectorFactoryUnregistered {
  let protectorFactoryUnregisteredEvent = changetype<
    ProtectorFactoryUnregistered
  >(newMockEvent())

  protectorFactoryUnregisteredEvent.parameters = new Array()

  protectorFactoryUnregisteredEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )

  return protectorFactoryUnregisteredEvent
}

export function createRequestHubChangedEvent(
  param0: Address
): RequestHubChanged {
  let requestHubChangedEvent = changetype<RequestHubChanged>(newMockEvent())

  requestHubChangedEvent.parameters = new Array()

  requestHubChangedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )

  return requestHubChangedEvent
}

export function createTechnicalOwnerChangedEvent(
  param0: Address
): TechnicalOwnerChanged {
  let technicalOwnerChangedEvent = changetype<TechnicalOwnerChanged>(
    newMockEvent()
  )

  technicalOwnerChangedEvent.parameters = new Array()

  technicalOwnerChangedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )

  return technicalOwnerChangedEvent
}

export function createUserRegistryChangedEvent(
  param0: Address
): UserRegistryChanged {
  let userRegistryChangedEvent = changetype<UserRegistryChanged>(newMockEvent())

  userRegistryChangedEvent.parameters = new Array()

  userRegistryChangedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )

  return userRegistryChangedEvent
}
