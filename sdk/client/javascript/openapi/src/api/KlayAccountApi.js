/**
 * KLAYTN OPEN API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.10.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AccountCreatedRequest from '../model/AccountCreatedRequest';
import AccountCreatedResponse from '../model/AccountCreatedResponse';

/**
* KlayAccount service.
* @module api/KlayAccountApi
* @version 1.10.0
*/
export default class KlayAccountApi {

    /**
    * Constructs a new KlayAccountApi. 
    * @alias module:api/KlayAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the accountCreated operation.
     * @callback module:api/KlayAccountApi~accountCreatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountCreatedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [accountCreated] Find if input address was created
     * Returns `true` if the account associated with the address is created. It returns `false` otherwise.  **JSONRPC:** `klay_accountCreated`  **NOTE:** *In versions earlier than Klaytn v1.7.0, only integer block number, the string \"earliest\" and \"latest\" are available.* 
     * @param {String} address Address
     * @param {module:model/AccountCreatedBlockNumberParameter} blockNumber Integer or hexadecimal block number, or the string `earliest`, `latest` or `pending` as in the [default block parameter](https://docs.klaytn.foundation/dapp/json-rpc/api-references/klay/block#the-default-block-parameter), or block hash. 
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountCreatedRequest} opts.accountCreatedRequest 
     * @param {module:api/KlayAccountApi~accountCreatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountCreatedResponse}
     */
    accountCreated(address, blockNumber, opts, callback) {
      opts = opts || {};
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling accountCreated");
      }
      // verify the required parameter 'blockNumber' is set
      if (blockNumber === undefined || blockNumber === null) {
        throw new Error("Missing the required parameter 'blockNumber' when calling accountCreated");
      }

      let postBody = new AccountCreatedRequest(undefined, undefined, undefined);
      postBody.params = [];
      
      postBody.params.push(address);
      postBody.params.push(blockNumber);

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AccountCreatedResponse;
      return this.apiClient.callApi(
        '/klay/account/accountCreated', 'POST', null, null, null, null,
        postBody, authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountCreated2 operation.
     * @callback module:api/KlayAccountApi~accountCreated2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountCreatedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [accountCreated] Find if input address was created
     * Returns `true` if the account associated with the address is created. It returns `false` otherwise.  **JSONRPC:** `klay_accountCreated`  **NOTE:** *In versions earlier than Klaytn v1.7.0, only integer block number, the string \"earliest\" and \"latest\" are available.* 
     * @param {String} address Address
     * @param {Object} opts Optional parameters
     * @param {Number} opts.blockNumber Address
     * @param {module:model/AccountCreatedRequest} opts.accountCreatedRequest 
     * @param {module:api/KlayAccountApi~accountCreated2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountCreatedResponse}
     */
    accountCreated2(address, opts, callback) {
      opts = opts || {};
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling accountCreated2");
      }

      let postBody = new AccountCreatedRequest(undefined, undefined, undefined);
      postBody.params = [];
      
      if(opts['blockNumber']) {
        postBody.params.push(opts['blockNumber']);
      }
      postBody.params.push(address);

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AccountCreatedResponse;
      return this.apiClient.callApi(
        '/klay/account/accountCreated2', 'POST', null, null, null, null,
        postBody, authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
