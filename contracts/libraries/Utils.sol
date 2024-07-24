// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

import "../EduswapV2Pair.sol";

contract Utils {
    function initcodehash() external pure returns (bytes32 bytecode) {
        bytecode = keccak256(type(EduswapV2Pair).creationCode);
    }
}
