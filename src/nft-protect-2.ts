import
{
    BigInt
} from "@graphprotocol/graph-ts"

import {
    NFTProtect2,
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

import
{
    loadSystem
} from "./system"


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

export function handleMetaEvidenceLoaderChanged(event: MetaEvidenceLoaderChanged): void
{
    // do nothing
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void
{
    // do nothing
}

export function handleProtectorFactoryRegistered(event: ProtectorFactoryRegistered): void
{
    // TODO
}

export function handleProtectorFactoryUnregistered(event: ProtectorFactoryUnregistered): void
{
    // TODO
}

export function handleRequestHubChanged(event: RequestHubChanged): void
{
    // do nothing
}

export function handleTechnicalOwnerChanged(event: TechnicalOwnerChanged): void
{
    // do nothing
}

export function handleUserRegistryChanged(event: UserRegistryChanged): void
{
    // do nothing
}
