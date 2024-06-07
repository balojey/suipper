import { Grid, Box } from "@radix-ui/themes"
import { TestnetSDK } from "../utils/init"
import { useState, useEffect } from "react"
import { Pool } from "@cetusprotocol/cetus-sui-clmm-sdk"
import PoolBox from "./PoolBox"
import SwapBox from "./SwapBox"

export default function Body() {

    const [pools, setPools] = useState<Pool[]>([])

    useEffect(() => {
        async function getPools() {
            const pools = await TestnetSDK.Pool.getPoolsWithPage([
                '0xbed3136f15b0ea649fb94bcdf9d3728fb82ba1c3e189bf6062d78ff547850054',
                '0x74dcb8625ddd023e2ef7faf1ae299e3bc4cb4c337d991a5326751034676acdae',
            ])
            console.log(`pool length: ${pools.length}`)
            setPools(pools)
        }
        getPools()
    }, [])


    return (
        <Grid columns="2fr 1fr" gap="2" width="auto" p="4" position="relative">
            <Box my="6">
                {pools.map((pool, index) => {
                    return <PoolBox key={index} pool={pool} />
                })}
            </Box>
            <SwapBox />
        </Grid>
    )
}