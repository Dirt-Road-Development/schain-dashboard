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
 * @file src/ui/ima/actions/deploy/index.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { useState } from "react"
import { DeployContainer } from "./containers"
import { DeploymentType } from "./type"
import { ERCAutomaticDeploy } from "./automated"
import { DeployContract } from "../../../../logic/ima/deploy"
import { ERCCustomDeploy } from "./custom"
import { ERCPreDeployedDeploy } from "./deployed"
import { useConnectedMetaMask } from "metamask-react"
import { LoadingIcon } from "../../../widgets"
import { Colors } from "../../../../config"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setAddTokenIMA } from "../../../../state/ima.slice"

const DeployContractSchain = ({ type, setCurrentStep, state, setState }) => {

    const [deployType, setDeployType] = useState('automated');
    const { ethereum } = useConnectedMetaMask();
    const imaDeployer = new DeployContract(deployType);
    const dispatch = useDispatch();

    const [contractParams, setContractParams] = useState({
        name: null,
        symbol: null,
        decimals: null
    });

    const [customParams, setCustomParams] = useState({
        abi: null,
        bytecode: null
    });

    const [address, setAddress] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const _getContractParams = () => {
        if (type === 'erc20') {
            return [contractParams.name, contractParams.symbol, contractParams.decimals];
        } else if (type === 'erc721') {
            return [contractParams.name, contractParams.symbol];
        } else if (type === 'erc1155') {
            return "contractParams.name";
        } else {
            throw new Error('This Contract Type is Not Acceptable');
        }
    }

    const nextStep = () => {
        if (deployType === 'automated') {
            setIsLoading(true);
            imaDeployer.automatedDeploy(ethereum, type, _getContractParams())
                .then((res) => {
                    
                    state.targetAddress = res.contractAddress;
                    state.targetABI = res.abi;
                    dispatch(setAddTokenIMA({
                        targetAddress: res.contractAddress,
                        targetABI: res.abi
                    }));
                    setState(state);
                    setCurrentStep();
                    setIsLoading(false);

                })
                .catch((err) => {
                    alert("Error: ", err.toString());
                    throw new Error(err.toString());
                })
        } else if (deployType === 'custom') {
            setIsLoading(true);
            imaDeployer.manualDeployment(ethereum, customParams.abi, customParams.bytecode, _getContractParams(), type)
                .then((res) => {
                    state.targetAddress = res.contractAddress;
                    state.targetABI = res.abi;
                    dispatch(setAddTokenIMA({
                        targetAddress: res.contractAddress,
                        targetABI: res.abi
                    }));
                    setState(state);
                    setCurrentStep()
                    setIsLoading(false);
                })
                .catch((err) => {
                    alert("Error: ", err.toString())
                    throw new Error(err.toString())
                })
        } else if (deployType === 'deployed') {
            setIsLoading(true);
            imaDeployer.checkPreDeployedAddress(ethereum, address)
                .then((res) => {
                    state.targetAddress = res;
                    state.targetABI = customParams.abi;
                    dispatch(setAddTokenIMA({
                        targetAddress: res,
                        targetABI: customParams.abi
                    }));
                    setState(state);
                    setCurrentStep();
                    setIsLoading(false);
                })
                .catch((err) => {
                    alert('Error: ', JSON.parse(err));
                })
        } else {
            alert('Error: Not an acceptable type');
        }
    }

    const setDeployTypeMulti = (_type) => {
        setDeployType(_type);
        imaDeployer.setType(_type);
    }

    if (isLoading) {
        return (
            <DeployContainer>
                <div style={{ display: 'flex', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <LoadingIcon />
                    <p style={{ fontSize: '1rem', color: 'white', padding: '8px 0', margin: '8px 0'}}>{deployType === 'deployed' ? 'Checking Contract' : 'Deploying Contract'}</p>
                </div>
            </DeployContainer>
        )
    }

    let widget;
    if (deployType === 'automated') {
        widget = <ERCAutomaticDeploy type={type} contractParams={contractParams} setContractParams={setContractParams} nextStep={nextStep} />
    } else if (deployType === 'custom') {
        widget = <ERCCustomDeploy type={type} customParams={customParams} setCustomParams={setCustomParams} contractParams={contractParams} setContractParams={setContractParams} nextStep={nextStep} />
    } else if (deployType === 'deployed') {
        widget = <ERCPreDeployedDeploy type={type} address={address} setAddress={setAddress} nextStep={nextStep} customParams={customParams} setCustomParams={setCustomParams} />
    }

    return (
        <DeployContainer>
            <DeploymentType deploymentType={deployType} setDeploymentType={setDeployTypeMulti} />
            {widget}
        </DeployContainer>
    )

}

export {
    DeployContractSchain
}