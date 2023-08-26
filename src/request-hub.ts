import
{
    ArbitratorRegistryChanged as ArbitratorRegistryChangedEvent,
    BurnAnswered as BurnAnsweredEvent,
    BurnArbitrateAsked as BurnArbitrateAskedEvent,
    Deployed as DeployedEvent,
    DisputeCreated as DisputeCreatedEvent,
    EntityAddedToRequest as EntityAddedToRequestEvent,
    OwnershipAdjusted as OwnershipAdjustedEvent,
    OwnershipAdjustmentAnswered as OwnershipAdjustmentAnsweredEvent,
    OwnershipAdjustmentArbitrateAsked as OwnershipAdjustmentArbitrateAskedEvent,
    OwnershipAdjustmentAsked as OwnershipAdjustmentAskedEvent,
    OwnershipRestoreAnswered as OwnershipRestoreAnsweredEvent,
    OwnershipRestoreAsked as OwnershipRestoreAskedEvent,
    OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/RequestHub/RequestHub"

import
{
    loadSystem
} from "./system"

import
{
    loadUser
} from "./user"


export function handleArbitratorRegistryChanged(event: ArbitratorRegistryChangedEvent): void {}

export function handleBurnAnswered(event: BurnAnsweredEvent): void {}

export function handleBurnArbitrateAsked(event: BurnArbitrateAskedEvent): void {}

export function handleDeployed(event: DeployedEvent): void
{
    const s = loadSystem("core");
}

export function handleDisputeCreated(event: DisputeCreatedEvent): void {}

export function handleEntityAddedToRequest(event: EntityAddedToRequestEvent): void {}

export function handleOwnershipAdjusted(event: OwnershipAdjustedEvent): void {}

export function handleOwnershipAdjustmentAnswered(event: OwnershipAdjustmentAnsweredEvent): void {}

export function handleOwnershipAdjustmentArbitrateAsked(event: OwnershipAdjustmentArbitrateAskedEvent): void {}

export function handleOwnershipAdjustmentAsked(event: OwnershipAdjustmentAskedEvent): void {}

export function handleOwnershipRestoreAnswered(event: OwnershipRestoreAnsweredEvent): void {}

export function handleOwnershipRestoreAsked(event: OwnershipRestoreAskedEvent): void {}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
    // do nothing
}
