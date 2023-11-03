import
{
    BigInt,
    store
} from "@graphprotocol/graph-ts"

import {
    NFTProtect2,
    AllowAnonymousChanged,
    BurnOnActionChanged,
    Deployed,
    EntityOriginalOwnerChanged,
    EntityProtected,
    EntityUnprotected,
    EntityWrappedOwnerChanged,
    MetaEvidenceLoaderChanged,
    OwnershipTransferred,
    ProtectorCreated,
    ProtectorFactoryRegistered,
    ProtectorFactoryUnregistered,
    RequestHubChanged,
    TechnicalOwnerChanged,
    UserRegistryChanged
} from "../generated/NFTProtect2/NFTProtect2"

import
{
    Protector,
    ProtectorFactory,
    MyEntity
} from "../generated/schema"

import
{
    loadSystem
} from "./system"


export function handleAllowAnonymousChanged(event: AllowAnonymousChanged): void
{
    const s = loadSystem("core");
    s.allowAnonymous = event.params.allow;
    s.save();
}

export function handleBurnOnActionChanged(event: BurnOnActionChanged): void
{
    const s = loadSystem("core");
    s.burnOnAction = event.params.boa;
    s.save();
}

export function handleDeployed(event: Deployed): void
{
    const s = loadSystem("core");
}

export function handleEntityOriginalOwnerChanged(event: EntityOriginalOwnerChanged): void
{
    let e = MyEntity.load(event.params.entityId.toString()) as MyEntity;
    e.ownerOriginal = event.params.owner.toHex().toString();
    e.save();
}

export function handleEntityProtected(event: EntityProtected): void
{
    let e = new MyEntity(event.params.entityId.toString());
    e.protection = BigInt.fromI32(event.params.pr);
    e.ownerOriginal = event.params.owner.toHex().toString();
    e.ownerWrapped = event.params.owner.toHex().toString();
    e.protector = event.params.protector.toHex().toString();
    e.timestamp = event.block.timestamp;
    e.blocknumber = event.block.number;
    e.burned = false;
    e.save();
}

export function handleEntityUnprotected(event: EntityUnprotected): void
{
    //store.remove("MyEntity", event.params.entityId.toString());
    let e = MyEntity.load(event.params.entityId.toString()) as MyEntity;
    e.burned = true
}

export function handleEntityWrappedOwnerChanged(event: EntityWrappedOwnerChanged): void
{
    let e = MyEntity.load(event.params.entityId.toString()) as MyEntity;
    e.ownerWrapped = event.params.owner.toHex().toString();
    e.save();
}

export function handleMetaEvidenceLoaderChanged(event: MetaEvidenceLoaderChanged): void
{
    // do nothing
}

export function handleProtectorCreated(event: ProtectorCreated): void
{
    let p = new Protector(event.params.protector.toHex().toString());
    p.address = event.params.protector;
    p.original = event.params.original;
    p.factory = event.params.factory.toHex().toString();
    p.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void
{
    // do nothing
}

export function handleProtectorFactoryRegistered(event: ProtectorFactoryRegistered): void
{
    let pf = new ProtectorFactory(event.params.factory.toHex().toString());
    pf.address = event.params.factory;
    pf.registered = true;
    pf.save();
}

export function handleProtectorFactoryUnregistered(event: ProtectorFactoryUnregistered): void
{
    let pf = ProtectorFactory.load(event.params.factory.toHex().toString());
    pf = pf as ProtectorFactory;
    pf.registered = false;
    pf.save();
}

export function handleRequestHubChanged(event: RequestHubChanged): void
{
    // do nothing
}

export function handleTechnicalOwnerChanged(event: TechnicalOwnerChanged): void
{
    const s = loadSystem("core");
    s.technicalOwner = event.params.towner;
    s.save();
}

export function handleUserRegistryChanged(event: UserRegistryChanged): void
{
    // do nothing
}
