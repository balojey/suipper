import { TestnetSDK } from "./init"
import { Pool } from "@cetusprotocol/cetus-sui-clmm-sdk"

async function retrievelAllPools(): Promise<Pool[]> {
    // If you want to get all pools, just pass one empty array.
    const pools = await TestnetSDK.Pool.getPoolsWithPage([])
    console.log(`pool length: ${pools.length}`)
    return pools
}

export default retrievelAllPools
