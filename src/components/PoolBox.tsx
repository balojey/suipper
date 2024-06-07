import { Box, Card, Flex, Avatar, Text, Button } from "@radix-ui/themes"
// import { Pool } from "@cetusprotocol/cetus-sui-clmm-sdk"

export default function PoolBox({ pool }) {
    console.log(pool)
    return (
        <Box mb="4">
            <Card>
                <Flex gap="3" align="center" justify="between">
                    <Flex gap="3" align="center">
                        <Avatar
                            size="3"
                            src={pool.uri}
                            radius="full"
                            fallback="P"
                        />
                        <Box>
                            <Text as="div" size="2" weight="bold">
                                {pool.coinTypeA.split("::")[2]} / {pool.coinTypeB.split("::")[2]}
                            </Text>
                            <Text as="div" size="2" color="gray">
                                {Number(BigInt(pool.current_sqrt_price) / BigInt(100000000))}
                                {/* {pool.current_sqrt_price} */}
                            </Text>
                        </Box>
                    </Flex>
                    <Box>
                        <Button>
                            <Text as="div" size="2" weight="bold">
                                Join
                            </Text>
                        </Button>
                    </Box>
                </Flex>
            </Card>
        </Box>
    )
}