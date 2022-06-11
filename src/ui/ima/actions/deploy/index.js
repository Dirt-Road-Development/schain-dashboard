import { useState } from "react"
import { DeployContainer } from "./containers"
import { DeploymentType } from "./type"
import { ERCAutomaticDeploy } from "./automated"
import { DeployContract } from "../../../../logic/ima/deploy"
import { ERCCustomDeploy } from "./custom"
import { ERCPreDeployedDeploy } from "./deployed"

const DeployContractSchain = ({ type }) => {

    const [deployType, setDeployType] = useState('automated');

    const imaDeployer = new DeployContract(deployType);

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


    const nextStep = (e) => {
        e.preventDefault();
        if (deployType === 'automated') {

        } else if (deployType === 'custom') {

        } else if (deployType === 'predeployed') {

        } else {
            alert('Error: Not an acceptable type');
        }
    }

    const setDeployTypeMulti = (_type) => {
        setDeployType(_type);
        imaDeployer.setType(_type);
    }

    let widget;
    if (deployType === 'automated') {
        widget = <ERCAutomaticDeploy type={type} contractParams={contractParams} setContractParams={setContractParams} nextStep={nextStep} />
    } else if (deployType === 'custom') {
        widget = <ERCCustomDeploy type={type} customParams={customParams} setCustomParams={setCustomParams} contractParams={contractParams} setContractParams={setContractParams} nextStep={nextStep} />
    } else if (deployType === 'deployed') {
        widget = <ERCPreDeployedDeploy type={type} address={address} setAddress={setAddress} nextStep={nextStep} />
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