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


export function handleBurnOnActionChanged(event: BurnOnActionChanged): void {}

export function handleDeployed(event: Deployed): void {}

export function handleMetaEvidenceLoaderChanged(event: MetaEvidenceLoaderChanged): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProtectorFactoryRegistered(event: ProtectorFactoryRegistered): void {}

export function handleProtectorFactoryUnregistered(event: ProtectorFactoryUnregistered): void {}

export function handleRequestHubChanged(event: RequestHubChanged): void {}

export function handleTechnicalOwnerChanged(event: TechnicalOwnerChanged): void {}

export function handleUserRegistryChanged(event: UserRegistryChanged): void {}
