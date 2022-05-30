import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { configureChains, createClient, useAccount, WagmiConfig } from 'wagmi';
import SKALE_CHAINS from '../../config/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { GlobalController } from '../../logic/controller';

const PageContainer = styled.div`
`

const GlobalContainer = (props) => {

    const { chains, provider } = configureChains(
        SKALE_CHAINS,
        SKALE_CHAINS.map((config) => {
            return jsonRpcProvider({
                rpc: (chain) => {
                  if (chain.id !== config.id) return null;
                  return { http: chain.rpcUrls.default };
                }
              })
        })
      );
      
    const { connectors } = getDefaultWallets({ appName: 'SKALE Dashboard', chains });
    
    const wagmiClient = createClient({ autoConnect: true, connectors, provider });

    return (
        <PageContainer>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    {props.widget}
                </RainbowKitProvider>
            </WagmiConfig>
        </PageContainer>
    );
}

export { 
    GlobalContainer
}