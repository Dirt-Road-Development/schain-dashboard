import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import React from 'react';
import styled from 'styled-components';
import { configureChains, createClient, useAccount, WagmiConfig } from 'wagmi';
import SKALE_CHAINS from '../../config/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const PageContainer = styled.div`
`

const GlobalContainer = (props) => {

    const { chains, provider } = configureChains(
        SKALE_CHAINS,
        // [
        //     jsonRpcProvider({
        //       rpc: (chain) => {
        //         if (chain.id !== SKALE_CHAINS[0].id) return null;
        //         return { http: chain.rpcUrls.default };
        //       }
        //     }),
        //     jsonRpcProvider({
        //       rpc: (chain) => {
        //         if (chain.id !== SKALE_CHAINS[1].id) return null;
        //         return { http: chain.rpcUrls.default };
        //       }
        //     }),
        //   ]
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

    console.log(wagmiClient);
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