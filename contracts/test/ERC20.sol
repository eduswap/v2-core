// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../EduswapV2ERC20.sol";

contract ERC20 is EduswapV2ERC20 {
    constructor(uint _totalSupply) {
        _mint(msg.sender, _totalSupply);
    }
}
