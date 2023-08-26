import
{
    AffiliatePayment as AffiliatePaymentEvent,
    AffiliatePercentChanged as AffiliatePercentChangedEvent,
    ArbitratorRegistryChanged as ArbitratorRegistryChangedEvent,
    DIDRegistered as DIDRegisteredEvent,
    DIDUnregistered as DIDUnregisteredEvent,
    Deployed as DeployedEvent,
    FeeChanged as FeeChangedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
    PartnerSet as PartnerSetEvent,
    ReferrerSet as ReferrerSetEvent,
    RewardedCouponsChanged as RewardedCouponsChangedEvent,
    ScoreThresholdChanged as ScoreThresholdChangedEvent,
    SuccessorApproved as SuccessorApprovedEvent,
    SuccessorRejected as SuccessorRejectedEvent,
    SuccessorRequested as SuccessorRequestedEvent
} from "../generated/UserRegistry/UserRegistry"

import
{
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
} from "../generated/schema"


export function handleAffiliatePayment(event: AffiliatePaymentEvent): void{}

export function handleAffiliatePercentChanged(event: AffiliatePercentChangedEvent): void {}

export function handleArbitratorRegistryChanged(event: ArbitratorRegistryChangedEvent): void {}

export function handleDIDRegistered(event: DIDRegisteredEvent): void {}

export function handleDIDUnregistered(event: DIDUnregisteredEvent): void {}

export function handleDeployed(event: DeployedEvent): void {}

export function handleFeeChanged(event: FeeChangedEvent): void {}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {}

export function handlePartnerSet(event: PartnerSetEvent): void {}

export function handleReferrerSet(event: ReferrerSetEvent): void {}

export function handleRewardedCouponsChanged(event: RewardedCouponsChangedEvent): void {}

export function handleScoreThresholdChanged(event: ScoreThresholdChangedEvent): void {}

export function handleSuccessorApproved(event: SuccessorApprovedEvent): void {}

export function handleSuccessorRejected(event: SuccessorRejectedEvent): void {}

export function handleSuccessorRequested(event: SuccessorRequestedEvent): void {}
