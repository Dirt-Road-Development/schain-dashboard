import * as Config from '../../config';

class Etherbase {

    _contracts = new Config.Contracts();

    static async getRoles(_contract, address) {
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