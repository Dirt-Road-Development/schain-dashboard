# SKALE Chain Admin Dashboard

<p align="center">
    <br>
    <img src="https://uploads-ssl.webflow.com/629d30c4a38bde0377ff6142/629d35ea8192da2c7c821e98_Animation_GIF_TransparentBackground.gif" width="50px"/>
    <br>
    <p style="text-align: center; color: grey;">Powered by MyLilius. Built for #SKALE</p>
<p>

## Overview
This dashboard provides nearly every functionality and utility needed to setup and manage a SKALE chain. All chains are available to connect to on Testnet and will be added to Mainnet. Once this repository is hosted in production, PRs can be submitted if additional chains need to be added. 

## Setup and Run (Development)
To run this locally in development follow this process

1. ```git clone https://github.com/mylilius/schain-dashboard```
2. ``` cd schain-dashboard && npm install```
3. ```mv .env.example .env```
4. ```nano .env``` and fill in the .env file with a RPC Url for Rinkeby
5. ```npm start```

## Branches and Contributions

### Features - SKL[#]

When creating a brand new feature, features should follow the SKL[#] format similar to the notion board above so it is well known what is a full feature. 

If a feature is being added to you should use the [FEATURES.md](./FEATURES.md) file to assign the proper feature number. 

### Bugs - BUG[#]

Bugs should follow the format BUG[#] where the decimal values are relative to the size of the bug, i.e SB[#] where the X.Y.Z is the versioning format.

If a bug is new it should increment the X value, if a bug is a follow up to another bug it should be X.Y, and if small adjustments are needed then it should increment the Z field. 

When a bug is being worked on you should make a PR to the [BUGS.md](./BUGS.md) log and add in your bug, what you are doing and the number so others know.

