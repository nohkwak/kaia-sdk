const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_maxPriorityFeePerGas API', () => {
    test('should return eth_maxPriorityFeePerGas', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        sdk.eth.maxPriorityFeePerGas({}, callbackOne);
    });
});
