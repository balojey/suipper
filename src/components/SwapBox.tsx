import { Box, Heading, TextField, Flex, Text, Button, Container } from "@radix-ui/themes"

export default function SwapBox() {

    return (
        <Box py="9" pl="6" position="sticky" right="3" top="9" bottom="9">
            <Heading>Exchange Token</Heading>
            <Flex direction="column" gap="3">
                <Box maxWidth="500px" pt="6">
                    <Text color="gray">From</Text>
                    <TextField.Root size="3" placeholder="" />
                </Box>
                <Box maxWidth="500px" pt="6">
                    <Text color="gray">To</Text>
                    <TextField.Root size="3" placeholder="" />
                </Box>
                <Box maxWidth="500px" pt="6">
                    <Button size="4">
                        Swap
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}