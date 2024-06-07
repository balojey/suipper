import { Flex, Text } from '@radix-ui/themes';
import { ConnectButton, useCurrentWallet, useDisconnectWallet } from '@mysten/dapp-kit';

export default function AppBar() {

    const { isDisconnected } = useCurrentWallet();
    const { mutate: disconnect } = useDisconnectWallet();

    return (
        <Flex gap="2" justify="between" align="center" p="4">
            <Text weight="bold" size="5">SUIPPER</Text>
            {
                isDisconnected
                ? <ConnectButton />
                : <ConnectButton connectText="Disconnect" onClick={() => disconnect()} />
            }
        </Flex>
    )
}