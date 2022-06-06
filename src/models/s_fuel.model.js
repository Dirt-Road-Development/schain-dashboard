class SFuelModel {

    constructor(arr) {
        this.contractAddress = arr['contractAddress'];
        this.whitelistType = arr['contractType'];
        this.dAppName = arr['dAppName'];
        this.isActive = arr['isActive'];
        this.owner = arr['owner'];
        this.timestamp = arr['timestamp']
    }
}

export {
    SFuelModel
}