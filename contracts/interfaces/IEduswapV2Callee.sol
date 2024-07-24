// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IEduswapV2Callee {
    function eduswapV2Call(
        address sender,
        uint amount0,
        uint amount1,
        bytes calldata data
    ) external;
}
