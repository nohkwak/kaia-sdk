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

import ApiClient from '../ApiClient';
import ErrorMember from './ErrorMember';
import JsonRpcResponse from './JsonRpcResponse';
import Result from './Result';
import RewardsResp from './RewardsResp';

/**
 * The GetRewardsResponse model module.
 * @module model/GetRewardsResponse
 * @version 1.10.0
 */
class GetRewardsResponse {
    /**
     * Constructs a new <code>GetRewardsResponse</code>.
     * @alias module:model/GetRewardsResponse
     * @implements module:model/JsonRpcResponse
     * @implements module:model/RewardsResp
     * @param jsonrpc {String} 
     * @param id {Number} 
     */
    constructor(jsonrpc, id) { 
        JsonRpcResponse.initialize(this, jsonrpc, id);RewardsResp.initialize(this);
        GetRewardsResponse.initialize(this, jsonrpc, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, jsonrpc, id) { 
        obj['jsonrpc'] = jsonrpc || '2.0';
        obj['id'] = id;
    }

    /**
     * Constructs a <code>GetRewardsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRewardsResponse} obj Optional instance to populate.
     * @return {module:model/GetRewardsResponse} The populated <code>GetRewardsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRewardsResponse();
            JsonRpcResponse.constructFromObject(data, obj);
            RewardsResp.constructFromObject(data, obj);

            if (data.hasOwnProperty('jsonrpc')) {
                obj['jsonrpc'] = ApiClient.convertToType(data['jsonrpc'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ErrorMember.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = Result.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetRewardsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetRewardsResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetRewardsResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['jsonrpc'] && !(typeof data['jsonrpc'] === 'string' || data['jsonrpc'] instanceof String)) {
            throw new Error("Expected the field `jsonrpc` to be a primitive type in the JSON string but got " + data['jsonrpc']);
        }
        // validate the optional field `error`
        if (data['error']) { // data not null
          ErrorMember.validateJSON(data['error']);
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          Result.validateJSON(data['result']);
        }

        return true;
    }


}

GetRewardsResponse.RequiredProperties = ["jsonrpc", "id"];

/**
 * @member {String} jsonrpc
 * @default '2.0'
 */
GetRewardsResponse.prototype['jsonrpc'] = '2.0';

/**
 * @member {Number} id
 */
GetRewardsResponse.prototype['id'] = undefined;

/**
 * @member {module:model/ErrorMember} error
 */
GetRewardsResponse.prototype['error'] = undefined;

/**
 * @member {module:model/Result} result
 */
GetRewardsResponse.prototype['result'] = undefined;


// Implement JsonRpcResponse interface:
/**
 * @member {String} jsonrpc
 * @default '2.0'
 */
JsonRpcResponse.prototype['jsonrpc'] = '2.0';
/**
 * @member {Number} id
 */
JsonRpcResponse.prototype['id'] = undefined;
/**
 * @member {module:model/ErrorMember} error
 */
JsonRpcResponse.prototype['error'] = undefined;
/**
 * @member {Object} result
 */
JsonRpcResponse.prototype['result'] = undefined;
// Implement RewardsResp interface:
/**
 * @member {module:model/Result} result
 */
RewardsResp.prototype['result'] = undefined;




export default GetRewardsResponse;

