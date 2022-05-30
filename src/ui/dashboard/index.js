import * as Widget from './widgets';
import * as Component from './components';
import { Title } from '../widgets/title';
import { useAccount, useNetwork } from 'wagmi';
import { GlobalController } from '../../logic/controller';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChainState, setRoles } from '../../state/data.slice';


const DashboardPage = () => {

    const [isInitialized, setIsInitialized] = useState(false);
    const [address, setAddress] = useState(null);

    const network = useNetwork();
    const { data: account } = useAccount();
    const controller = new GlobalController(network.activeChain?.rpcUrls.default);
    const dispatch = useDispatch();
    const chain_state = useSelector((state) => state.chain_state);
    
    useEffect(() => {
        if (account?.address !== undefined && !isInitialized) {
            setIsInitialized(true);
            controller._getRoles(account?.address)
                .then((res) => {
                    console.log("Roles Result: ", res);
                    dispatch(setRoles(res))
                })
                .catch(err => console.log("ERROR RETRIEVING: ", err));
            
        }
    }, [account?.address]);

    useEffect(() => {
        controller._initializeChainState()
            .then((result) => {
                console.log("RESULT");
                console.log(result);
                dispatch(setChainState({
                    'freeContractDeploymentEnabled': result[0][1],
                    'multiTransactionModeEnabled': result[1][1]
                }))
            }) 
            .catch(err => console.log(err));
        
        // dispatch(setChainState({
        //     checks[]
        // }))
    }, [])

    return (
        <Widget.DashboardPageContainer>
            <Title title='Dashboard' />
            <Component.ChainInfo />
            <Component.DashboardChart />
            <Component.DashboardBadges />
        </Widget.DashboardPageContainer>
    );
}

export {
    DashboardPage
}