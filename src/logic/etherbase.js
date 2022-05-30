class Etherbase {

    static async getRoles(_contract, address) {
        // const DEFAULT_ADMIN_ROLE = await _contract.callStatic.DEFAULT_ADMIN_ROLE();
        // const ETHER_MANAGER_ROLE = await _contract.callStatic.ETHER_MANAGER_ROLE();
        
        // const isDefaultAdminRole = await _contract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, address);
        // const isEtherManagerRole = await _contract.callStatic.hasRole(ETHER_MANAGER_ROLE, address);

        // return {
        //     'DEFAULT_ADMIN_ROLE': isDefaultAdminRole,
        //     'ETHER_MANAGER_ROLE': isEtherManagerRole
        // };


        return Promise.all([
            _contract.callStatic.DEFAULT_ADMIN_ROLE(),
            _contract.callStatic.ETHER_MANAGER_ROLE()
        ]).then(([a, b]) => {
            console.log(a, b);
            return Promise.all([
                _contract.callStatic.hasRole(a, address),
                _contract.callStatic.hasRole(b, address),
            ]).then(([c, d]) => {
                return {
                    'DEFAULT_ADMIN_ROLE': c,
                    'ETHER_MANAGER_ROLE': d,
                }
            }).catch(err => console.log(err, 'inner'))
        })
        .catch(err => console.log(err));
    }
}

export {
    Etherbase
}