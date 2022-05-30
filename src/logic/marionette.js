class Marionette {

    static async getRoles(_contract, address) {

        return Promise.all([
            _contract.callStatic.DEFAULT_ADMIN_ROLE(),
            _contract.callStatic.IMA_ROLE(),
            _contract.callStatic.PUPPETEER_ROLE()
        ]).then(([a, b, c]) => {
            return Promise.all([
                _contract.callStatic.hasRole(a, address),
                _contract.callStatic.hasRole(b, address),
                _contract.callStatic.hasRole(c, address)
            ]).then(([d, e, f]) => {
                return {
                    'DEFAULT_ADMIN_ROLE': d,
                    'IMA_ROLE': e,
                    'PUPPETEER_ROLE': f
                };
            }).catch(err => console.log('inner', err))
        }).catch(err => console.log('outer', err));

        // const DEFAULT_ADMIN_ROLE = await _contract.callStatic.DEFAULT_ADMIN_ROLE();
        // const IMA_ROLE = await _contract.callStatic.IMA_ROLE();
        // const PUPPETEER_ROLE = await _contract.callStatic.PUPPETEER_ROLE();
        
        // const isDefaultAdminRole = await _contract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, address);
        // const isImaRole = await _contract.callStatic.hasRole(IMA_ROLE, address);
        // const isPuppeteerRole = await _contract.callStatic.hasRole(PUPPETEER_ROLE, address);

        // return {
        //     'DEFAULT_ADMIN_ROLE': isDefaultAdminRole,
        //     'IMA_ROLE': isImaRole,
        //     'PUPPETEER_ROLE': isPuppeteerRole
        // };
    }
}

export {
    Marionette
}