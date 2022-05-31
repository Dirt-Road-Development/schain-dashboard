class ConfigController {

    static async getRoles(_contract, address) {

        return Promise.all([
            _contract.callStatic.DEFAULT_ADMIN_ROLE(),
            _contract.callStatic.DEPLOYER_ROLE(),
            _contract.callStatic.MTM_ADMIN_ROLE()
        ]).then(([a, b, c]) => {
            return Promise.all([
                _contract.callStatic.hasRole(a, address),
                _contract.callStatic.hasRole(b, address),
                _contract.callStatic.hasRole(c, address)
            ]).then(([d, e, f]) => {
                return {
                    'DEFAULT_ADMIN_ROLE': d,
                    'DEPLOYER_ROLE': e,
                    'MTM_ADMIN_ROLE': f
                }
            }).catch(err => console.log('inner', err))
        }).catch(err => console.log('outer', err));

        // const DEFAULT_ADMIN_ROLE = await _contract.callStatic.DEFAULT_ADMIN_ROLE();
        // const DEPLOYER_ADMIN_ROLE = await _contract.callStatic.DEPLOYER_ADMIN_ROLE();
        // const MTM_ADMIN_ROLE = await _contract.callStatic.MTM_ADMIN_ROLE();
        
        // const isDefaultAdminRole = await _contract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, address);
        // const isDeployerAdminRole = await _contract.callStatic.hasRole(DEPLOYER_ADMIN_ROLE, address);
        // const isMtmAdminRole = await _contract.callStatic.hasRole(MTM_ADMIN_ROLE, address);

        // return {
        //     'DEFAULT_ADMIN_ROLE': isDefaultAdminRole,
        //     'DEPLOYER_ADMIN_ROLE': isDeployerAdminRole,
        //     'MTM_ADMIN_ROLE': isMtmAdminRole
        // };
    }
}

export {
    ConfigController
}