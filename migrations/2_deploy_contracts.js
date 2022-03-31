const WombotoToken = artifacts.require("WombotoToken");

module.exports = function(deployer) {
    deployer.deploy(WombotoToken, 0, 2000);
};