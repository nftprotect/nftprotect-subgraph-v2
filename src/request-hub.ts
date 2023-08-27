import
{
    BigInt
} from "@graphprotocol/graph-ts"

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
    Request
} from "../generated/schema"

import
{
    loadSystem
} from "./system"

import
{
    loadUser
} from "./user"


function closeDispute(requestId: BigInt, accept: boolean, timestamp: BigInt, blocknumber: BigInt): void
{
    let r = Request.load(requestId.toString()) as Request;
    if (r.status == "Initial")
    {
        r.status = accept ? "Accepted" : "Rejected";
    }
    else
    {
        r.status = accept ? "DisputeAccepted" : "DisputeRejected";
    }
    r.timestampChange = timestamp;
    r.blocknumberChange = blocknumber;
    r.save();
}

export function handleArbitratorRegistryChanged(event: ArbitratorRegistryChangedEvent): void
{
    // do nothing
}

export function handleBurnAnswered(event: BurnAnsweredEvent): void
{
    closeDispute(event.params.requestId, event.params.accept, event.block.timestamp, event.block.number);
}

export function handleBurnArbitrateAsked(event: BurnArbitrateAskedEvent): void
{
    let r = new Request(event.params.requestId.toString());
    r.type = "Burn";
    r.status = "Disputed";
    r.entities = [];
    r.newowner = loadUser(event.params.dst).id;
    r.timestamp = event.block.timestamp;
    r.blocknumber = event.block.number;
    r.save();
}

export function handleDeployed(event: DeployedEvent): void
{
    const s = loadSystem("requesthub");
}

export function handleDisputeCreated(event: DisputeCreatedEvent): void
{
    let r = Request.load(event.params.requestId.toString()) as Request;
    r.arbitrator = event.params.arbitratorId.toString();
    r.disputeId = event.params.disputeId;
    r.save();
}

export function handleEntityAddedToRequest(event: EntityAddedToRequestEvent): void
{
    let r = Request.load(event.params.requestId.toString()) as Request;
    r.entities.push(event.params.entityId.toString());
    r.save();
}

export function handleOwnershipAdjusted(event: OwnershipAdjustedEvent): void
{
    // do nothing
}

export function handleOwnershipAdjustmentAnswered(event: OwnershipAdjustmentAnsweredEvent): void
{
    closeDispute(event.params.requestId, event.params.accept, event.block.timestamp, event.block.number);
}

export function handleOwnershipAdjustmentArbitrateAsked(event: OwnershipAdjustmentArbitrateAskedEvent): void
{
    // do nothing
}

export function handleOwnershipAdjustmentAsked(event: OwnershipAdjustmentAskedEvent): void
{
    let r = new Request(event.params.requestId.toString());
    r.type = "OwnershipAdjustment";
    r.status = "Initial";
    r.entities = [];
    r.newowner = loadUser(event.params.dst).id;
    r.timestamp = event.block.timestamp;
    r.blocknumber = event.block.number;
    r.save();
}

export function handleOwnershipRestoreAnswered(event: OwnershipRestoreAnsweredEvent): void
{
    closeDispute(event.params.requestId, event.params.accept, event.block.timestamp, event.block.number);
}

export function handleOwnershipRestoreAsked(event: OwnershipRestoreAskedEvent): void
{
    let r = new Request(event.params.requestId.toString());
    r.type = "OwnershipRestore";
    r.status = "Disputed";
    r.entities = [];
    r.newowner = loadUser(event.params.newowner).id;
    r.timestamp = event.block.timestamp;
    r.blocknumber = event.block.number;
    r.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
    // do nothing
}
