import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AffiliatePayment,
  AffiliatePercentChanged,
  ArbitratorRegistryChanged,
  DIDRegistered,
  DIDUnregistered,
  Deployed,
  FeeChanged,
  OwnershipTransferred,
  PartnerSet,
  ReferrerSet,
  RewardedCouponsChanged,
  ScoreThresholdChanged,
  SuccessorApproved,
  SuccessorRejected,
  SuccessorRequested
} from "../generated/UserRegistry/UserRegistry"

export function createAffiliatePaymentEvent(
  from: Address,
  to: Address,
  amountWei: BigInt
): AffiliatePayment {
  let affiliatePaymentEvent = changetype<AffiliatePayment>(newMockEvent())

  affiliatePaymentEvent.parameters = new Array()

  affiliatePaymentEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  affiliatePaymentEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  affiliatePaymentEvent.parameters.push(
    new ethereum.EventParam(
      "amountWei",
      ethereum.Value.fromUnsignedBigInt(amountWei)
    )
  )

  return affiliatePaymentEvent
}

export function createAffiliatePercentChangedEvent(
  percent: BigInt
): AffiliatePercentChanged {
  let affiliatePercentChangedEvent = changetype<AffiliatePercentChanged>(
    newMockEvent()
  )

  affiliatePercentChangedEvent.parameters = new Array()

  affiliatePercentChangedEvent.parameters.push(
    new ethereum.EventParam(
      "percent",
      ethereum.Value.fromUnsignedBigInt(percent)
    )
  )

  return affiliatePercentChangedEvent
}

export function createArbitratorRegistryChangedEvent(
  areg: Address
): ArbitratorRegistryChanged {
  let arbitratorRegistryChangedEvent = changetype<ArbitratorRegistryChanged>(
    newMockEvent()
  )

  arbitratorRegistryChangedEvent.parameters = new Array()

  arbitratorRegistryChangedEvent.parameters.push(
    new ethereum.EventParam("areg", ethereum.Value.fromAddress(areg))
  )

  return arbitratorRegistryChangedEvent
}

export function createDIDRegisteredEvent(
  did: Address,
  provider: string
): DIDRegistered {
  let didRegisteredEvent = changetype<DIDRegistered>(newMockEvent())

  didRegisteredEvent.parameters = new Array()

  didRegisteredEvent.parameters.push(
    new ethereum.EventParam("did", ethereum.Value.fromAddress(did))
  )
  didRegisteredEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromString(provider))
  )

  return didRegisteredEvent
}

export function createDIDUnregisteredEvent(did: Address): DIDUnregistered {
  let didUnregisteredEvent = changetype<DIDUnregistered>(newMockEvent())

  didUnregisteredEvent.parameters = new Array()

  didUnregisteredEvent.parameters.push(
    new ethereum.EventParam("did", ethereum.Value.fromAddress(did))
  )

  return didUnregisteredEvent
}

export function createDeployedEvent(): Deployed {
  let deployedEvent = changetype<Deployed>(newMockEvent())

  deployedEvent.parameters = new Array()

  return deployedEvent
}

export function createFeeChangedEvent(pr: i32, feeWei: BigInt): FeeChanged {
  let feeChangedEvent = changetype<FeeChanged>(newMockEvent())

  feeChangedEvent.parameters = new Array()

  feeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "pr",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(pr))
    )
  )
  feeChangedEvent.parameters.push(
    new ethereum.EventParam("feeWei", ethereum.Value.fromUnsignedBigInt(feeWei))
  )

  return feeChangedEvent
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

export function createPartnerSetEvent(
  partnet: Address,
  percent: BigInt
): PartnerSet {
  let partnerSetEvent = changetype<PartnerSet>(newMockEvent())

  partnerSetEvent.parameters = new Array()

  partnerSetEvent.parameters.push(
    new ethereum.EventParam("partnet", ethereum.Value.fromAddress(partnet))
  )
  partnerSetEvent.parameters.push(
    new ethereum.EventParam(
      "percent",
      ethereum.Value.fromUnsignedBigInt(percent)
    )
  )

  return partnerSetEvent
}

export function createReferrerSetEvent(
  user: Address,
  referrer: Address
): ReferrerSet {
  let referrerSetEvent = changetype<ReferrerSet>(newMockEvent())

  referrerSetEvent.parameters = new Array()

  referrerSetEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  referrerSetEvent.parameters.push(
    new ethereum.EventParam("referrer", ethereum.Value.fromAddress(referrer))
  )

  return referrerSetEvent
}

export function createRewardedCouponsChangedEvent(
  param0: BigInt
): RewardedCouponsChanged {
  let rewardedCouponsChangedEvent = changetype<RewardedCouponsChanged>(
    newMockEvent()
  )

  rewardedCouponsChangedEvent.parameters = new Array()

  rewardedCouponsChangedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromUnsignedBigInt(param0))
  )

  return rewardedCouponsChangedEvent
}

export function createScoreThresholdChangedEvent(
  threshold: BigInt
): ScoreThresholdChanged {
  let scoreThresholdChangedEvent = changetype<ScoreThresholdChanged>(
    newMockEvent()
  )

  scoreThresholdChangedEvent.parameters = new Array()

  scoreThresholdChangedEvent.parameters.push(
    new ethereum.EventParam(
      "threshold",
      ethereum.Value.fromUnsignedBigInt(threshold)
    )
  )

  return scoreThresholdChangedEvent
}

export function createSuccessorApprovedEvent(
  requestId: BigInt
): SuccessorApproved {
  let successorApprovedEvent = changetype<SuccessorApproved>(newMockEvent())

  successorApprovedEvent.parameters = new Array()

  successorApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return successorApprovedEvent
}

export function createSuccessorRejectedEvent(
  requestId: BigInt
): SuccessorRejected {
  let successorRejectedEvent = changetype<SuccessorRejected>(newMockEvent())

  successorRejectedEvent.parameters = new Array()

  successorRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return successorRejectedEvent
}

export function createSuccessorRequestedEvent(
  requestId: BigInt,
  user: Address,
  successor: Address
): SuccessorRequested {
  let successorRequestedEvent = changetype<SuccessorRequested>(newMockEvent())

  successorRequestedEvent.parameters = new Array()

  successorRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  successorRequestedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  successorRequestedEvent.parameters.push(
    new ethereum.EventParam("successor", ethereum.Value.fromAddress(successor))
  )

  return successorRequestedEvent
}
