// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract TestContract {
    bool public solved;

    function solve() public {
        solved = true;
    }

    function isSolved() public view returns (bool) {
        return solved;
    }
}
