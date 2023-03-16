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

/**
 * The RewardsMethod model module.
 * @module model/RewardsMethod
 * @version 1.10.0
 */
class RewardsMethod {
    /**
     * Constructs a new <code>RewardsMethod</code>.
     * @alias module:model/RewardsMethod
     * @param method {String} 
     */
    constructor(method) { 
        
        RewardsMethod.initialize(this, method);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, method) { 
        obj['method'] = method || 'klay_getRewards';
    }

    /**
     * Constructs a <code>RewardsMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardsMethod} obj Optional instance to populate.
     * @return {module:model/RewardsMethod} The populated <code>RewardsMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardsMethod();

            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RewardsMethod</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RewardsMethod</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RewardsMethod.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['method'] && !(typeof data['method'] === 'string' || data['method'] instanceof String)) {
            throw new Error("Expected the field `method` to be a primitive type in the JSON string but got " + data['method']);
        }

        return true;
    }


}

RewardsMethod.RequiredProperties = ["method"];

/**
 * @member {String} method
 * @default 'klay_getRewards'
 */
RewardsMethod.prototype['method'] = 'klay_getRewards';






export default RewardsMethod;

