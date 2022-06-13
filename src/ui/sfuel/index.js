/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @license
 * 
 * SChain Dashboard
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * /**
 * @file src/ui/sfuel/index.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import { ethers } from "ethers";
import { useConnectedMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import addresses from "../../config/addresses";
import { setData, setSFuelContracts } from "../../state/data.slice";
import { Title } from "../widgets/title";
import * as Component from './components';
import { LoadingIcon } from '../widgets';
import { Colors } from "../../config";
import { SFuelRegistry } from "../../logic/contracts/s_fuel_registry";
const SFuelPageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const SFuelPage = () => {

    const [timesChecked, setTimesChecked] = useState(0);
    const [deployingSFuelRegistry, setDeployingSFuelRegistry] = useState(false);
    const { ethereum, chainId, account } = useConnectedMetaMask();
    const dispatch = useDispatch();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const hasSFuelRegistry = useSelector((state) => state.chain_state.hasSFuelRegistry);
    const sFuelContracts = useSelector((state) => state.chain_state.sFuelContracts);
    const [currentPage, setCurrentPage] = useState('main');

    useEffect(() => {
        checkRegistry();
    }, []);

    const checkRegistry = async() => {
        try {
            const response = await provider.getCode(addresses.s_fuel_registry);
            dispatch(setData({
                key: 'hasSFuelRegistry',
                value: response === '0x' ? false : true
            }));
            await loadRegistry();
        } catch (err) {
            if (timesChecked < 10) {
                setTimesChecked(timesChecked + 1);
                await checkRegistry();
            }
        }
    }

    const loadRegistry = async() => {
        try {
            const s_fuel_registry = new SFuelRegistry();
            let data = await s_fuel_registry.loadRegistry(ethereum);
            dispatch(setSFuelContracts(data));
        } catch (err) {
            alert('Error Loading Registry');
        }
    }

    const deploySFuelRegistry = async () => {
        const s_fuel_registry_class = new SFuelRegistry();
        let deploy = await s_fuel_registry_class.deployRegistry(ethereum, chainId);
        await checkRegistry();

    }

    const deployWhitelist = async(_dAppName, _type) => {
        const s_fuel_registry_class = new SFuelRegistry();
        /// ethereum, chainId, dAppName, contractType, account
        let deployWhitelist = await s_fuel_registry_class.deployWhitelist(ethereum, chainId, _dAppName, _type, account);
        await checkRegistry();
        await loadRegistry();
    }

    if (hasSFuelRegistry === undefined) {
        return <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <LoadingIcon />
            <span style={{height: '15px'}} />
            <h3 style={{ color: 'white' }}>Checking for S-Fuel Registry</h3>
        </div>
    } else if (deployingSFuelRegistry) {
        return <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <LoadingIcon />
            <span style={{height: '15px'}} />
            <h3 style={{ color: 'white' }}>Deploying S-Fuel Registry</h3>
        </div>
    } else if (!hasSFuelRegistry) {
        return <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <h3 onClick={deploySFuelRegistry} style={{ padding: '16px', color: 'white', border: `1px solid ${Colors.primary}`, borderRadius: '16px' }}>Click to Deploy SFuel Registry</h3>
        </div>
    }

    
    return (
        <SFuelPageContainer>
            <Title title="SFuel"/>
            <Component.CreateWhitelistButton currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === 'create_whitelist' && <Component.CreateWhitelist deploy={deployWhitelist}/>}
            {currentPage === 'main' && <Component.Whitelists contracts={sFuelContracts} setCurrentPage={setCurrentPage} />}
            {currentPage.includes('contract') && <Component.SFuelContract contractInfo={sFuelContracts[parseInt(currentPage.split('_')[1])]} />}
            {currentPage === 'main' && <p style={{ color: 'grey', textAlign: 'center', position: 'absolute', bottom: '15px', left: '0', right: '0'}}>Click on a Whitelist to Manage it</p>}
        </SFuelPageContainer>

    );
}
export {
    SFuelPage
}