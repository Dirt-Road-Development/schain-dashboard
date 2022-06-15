# Features

## SKL1.0 Core Architecture
- [x] 1.0 - Repo Creation
- [x] 1.1 - Github Creation
- [x] 1.2 - Empty
- [x] 1.3 - Package Installation
- [x] 1.4 - Environment Variables Added
- [x] 1.5 - Remove React Template
- [x] 1.6 - Core CSS
- [x] 1.7 - Folder Setup
- [x] 1.8 - Network Config

## SKL2.0 Navigation and Routing
- [x] 2.0 - Create Router
- [x] 2.1 - Create Navigation
- [x] 2.2 - Wallet Connection
    - [x] Wagmi
    - [x] RainbowKit
    - [x] Watch Connection

## SKL3.0 Dashboard
- [x] 3.0 - Initial Dashboard Page Creation
- [x] 3.1 - Empty Containers Spaced
- [x] 3.2 - Add SKALE Npm Libraries
    - [x] Create File Structure for Controllers
    - [x] Create State for Read Data
- [x] 3.3 - Load Core SKALE Chain Data provided by Wallet

## SKL4.0 Core Logic
- [x] 4.0 - Rebuild with Metamask-React over Wagmi
- [x] 4.1 - Load Multisig Information on Application Load
    - [x]  Owner List
    - [x]  Transaction Count - Pending
    - [x]  Transaction Count - Executed
    - [x]  Transaction Count - Total
    - [x]  Is Owner - Boolean
- [x] SKL4.2 - Assign Role
    - [x]  Auto Routing
    - [x]  Proper Role Checks
    - [x]  Direct (Normal)
    - [x]  Multisig
    - [x]  Marionette
    - [x]  Multisig Marionette

## SKL5.0 UI Updates
- [x]  SKL5.0.0 - Navigation Button Overhaul
- [x]  SKL5.0.1 - Connected Account Clean Up
- [x]  SKL5.0.2 - Add Switch Networks
- [x]  SKL5.0.3 - Wrong Chain Check & Add Chain
- [x]  SKL5.0.4 - Add Powered by MyLilius in Bottom Left
- [x]  SKL5.0.5 - Add MyLilius to Top Left
- [x]  SKL5.0.6 - Test Lines on Screen as grey instead of blue
- [x]  SKL5.0.7 - License and License Files

## SKL6.0 S-Fuel
- [x]  SKL6.0 → SFuelRegistry
    - [x]  If No SFuelRegistry → Deploy via Insecure Private Key
        - [x]  Check off of predetermined address
    - [x]  If SFuelRegistry → Show Rest of Page
- [x]  SKL6.1 → UI Layout - Empty Functions
- [x]  SKL6.2 → Create Whitelist
- [x]  SKL6.3 → Manage Roles on Whitelist
    - [x]  Add Role → If Default Admin
    - [x]  Revoke Role → If Default Admin
- [ ]  SKL6.4 → Delete Whitelist (Requires Contract Update)
- [ ]  SKL6.5 → Core Analytics (User Usage) (Requires Contract Update)
- [ ]  SKL6.6 → Mass Fill Up (Use Batch Tx)

## SKL7.0 Multi Signature Wallet
- [x]  SKL7.0 - Core Page Setup
- [x]  SKL7.1 - Core UI That Loads Data
- [x]  SKL7.2 - Add Owner to Multisig
- [ ]  SKL7.3 - Remove Owner from Multisig
- [ ]  SKL7.4 - Submit Tx with Encoded Data (Goal)
- [ ]  SKL7.5 - Encode Tx Data (May be moved to general/chain manager)
    - [ ]  Multi Step Process
    - [ ]  Utilize Address to get ABI
    - [ ]  Pick Function from ABI
    - [ ]  Add Parameters
    - [ ]  Submit via Multisig
- [ ]  SKL7.6 - Create new Multisig (Goal)

## SKL8.0 Chain Manager
- [x]  SKL8.0 - Core UI for Chain Manager
    - [x]  Display Current Status of MTM and FCD
- [x]  SKL8.1
    - [x]  Add Deployer Admin Role to Role Assigner and Dashboard Display
    - [x]  Show Display to Enable/Disable MTM or FCD if Proper Roles
- [x]  SKL8.2 - Enable/Disable Roles (Functions)

## SKL9.0 IMA
- [x]  SKL9.0 → Basic UI
- [x]  SKL9.1
    - [x]  Rebuild Core UI for Dynamic between chains
    - [x]  Bug Fixes and Minor Tweaks to Success
    - [x]  Remove IMA-JS library
    - [x]  Remove Web3Js
    - [x]  Remove All Polyfill/Hacks
    - [x]  Confirm React-Scripts Highest Version
    - [x]  Initialize Chain on click with all ABIs in Ethers.js
    - [x]  Find Bug that is freezing the page
- [x]  SKL9.2 Core UI for IMA Functions
    - [x]  Step Process Creation
    - [x]  Automated UI
    - [x]  Custom UI
    - [x]  Pre-deployed UI
    - [x]  Deploy Clone to SChain - ERC20
    - [x]  Deploy Clone to Schain - ERC721
    - [x]  Deploy Clone to Schain - ERC1155
- [x]  SKL9.3 - Clone Deployment
    - [x]  Automated
    - [x]  Custom
    - [x]  Confirm Pre-deployed
    - [x]  Add ABI to Shared State
    - [x]  ABI on Pre-deployed
    - [x]  ABI Check
    - [x]  ABI Upload
    - [x]  Stepper Cleanup
    - [x]  To Mint Page - Confirm
    - [x]  Loading Screen to Avoid Duplicate Deployment
    - [x]  Deploy Clone Function - ERC20
    - [x]  Deploy Clone Function - ERC721
    - [x]  Deploy Clone Function - ERC1155
- [x]  SKL9.4 - Assign Minter Role
    - [x]  Assign Minter Role to TokenManagerERC20
    - [x]  Assign Minter Role to TokenManagerERC721
    - [x]  Assign Minter Role to TokenManagerERC1155
- [x]  SKL9.5 - Cleanup Role Assignment
    - [x]  Automate Burner Role
    - [x]  Clean Up Initial Check to Confirm Something Already Complete
    - [x]  Add (Add) Token State to Redux to persist on page movement
- [x]  SKL9.6 - Assign Mainnet Contract to IMA
    - [x]  Check Token Is Added ERC20 (DepositBox)
    - [x]  Check Token Is Added ERC721 (DepositBox)
    - [x]  Check Token Is Added ERC1155 (DepositBox)
    - [x]  Input Origin Token Address
    - [x]  Automatically Grab Deposit Box Address
    - [x]  Generate Encoded Data on Input of Origin Token
    - [x]  Automatically Grab Chain Name
    - [x]  Split UI into Stepper
    - [x]  Final Confirmation Page
- [x]  SKL9.7 - Assign Clone to IMA (SCHAIN)
    - [x]  Check Token Is Added ERC20 (TokenManager)
    - [x]  Check Token Is Added ERC721 (TokenManager)
    - [x]  Check Token Is Added ERC1155 (TokenManager)
    - [x]  Add Token if Not → ERC20 (TokenManager)
    - [x]  Add Token if Not → ERC721 (TokenManager)
    - [x]  Add Token if Not → ERC1155 (TokenManager)
- [x]  SKL9.8 - Select Chain (Origin/Target for S2S)
- [x]  SKL9.9 → Select Target/Origin (The Chain you are working with)
- [x]  SKL9.10 → Connect SKALE Chains (Make Connection and Poll for Connection)
- [x]  SKL9.11 → Input and Deployment of Tokens on Target and Origin
- [x]  SKL9.12 → Token Registration
    - [x]  Automatically check
    - [x]  Input of Origin Chain Address
- [x]  SKL9.13 → Assign Target Roles
    - [x]  If Origin User → Show Completed
    - [x]  If Target User → Show Assign Roles Page
- [ ]  SKL9.14 (Automatic Mapping Enable/Disable)
    - [ ]  ERC-20
    - [ ]  ERC-721
    - [ ]  ERC-1155
- [ ]  SKL9.15 - Show All Mapped Tokens (Mainnet)
    - [ ]  Show By Chain