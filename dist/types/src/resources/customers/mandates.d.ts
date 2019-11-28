import CustomersBaseResource from './base';
import List from '../../models/List';
import Mandate from '../../models/Mandate';
import { ICreateParams, IGetParams, IListParams, IRevokeParams } from '../../types/mandate/params';
import { CreateCallback, GetCallback, ListCallback, RevokeCallback } from '../../types/mandate/callback';
/**
 * The `customers_mandates` resource
 *
 * @since 1.2.0
 */
export default class CustomersMandatesResource extends CustomersBaseResource {
    static resource: string;
    static model: typeof Mandate;
    apiName: string;
    /**
     * Get all of a customer's mandates
     *
     * @since 1.2.0
     *
     * @see https://docs.mollie.com/reference/v2/mandates-api/list-mandates
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Mandate>>;
    /**
     * Get all of a customer's mandates
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/mandates-api/list-mandates
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Mandate>>;
    /**
     * Alias for revoke
     *
     * @since 1.3.2
     *
     * @see https://docs.mollie.com/reference/v2/mandates-api/revoke-mandate
     *
     * @public ✓ This method is part of the public API
     *
     * @alias revoke
     */
    cancel: (id: string, params?: IRevokeParams | RevokeCallback, cb?: RevokeCallback) => Promise<boolean>;
    /**
     * Alias for revoke
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/mandates-api/revoke-mandate
     *
     * @public ✓ This method is part of the public API
     *
     * @alias revoke
     */
    delete: (id: string, params?: IRevokeParams | RevokeCallback, cb?: RevokeCallback) => Promise<boolean>;
    /**
     * Create a customer mandate
     *
     * @param params Create customer mandate parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns
     *
     * @since 1.2.0
     *
     * @see https://docs.mollie.com/reference/v2/mandates-api/create-mandate
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Mandate>;
    /**
     * Get a customer mandate by ID
     *
     * @param id - customers_mandate id
     * @param params - Get customer mandate parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns Customer mandate
     *
     * @since 1.2.0
     *
     * @see https://docs.mollie.com/reference/v2/mandates-api/get-mandate
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams | GetCallback, cb?: GetCallback): Promise<Mandate>;
    /**
     * Get all of a customer's mandates
     *
     * @param params List mandates parameters
     *               (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found mandates
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/mandates-api/list-mandates
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Mandate>>;
    /**
     * Delete a customer subscription
     *
     * @param id - customers_mandate id
     * @param params - Delete Customer parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - Callback function, can be used instead of the returned `Promise` object
     *
     * @returns Success status
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/mandates-api/revoke-mandate
     *
     * @public ✓ This method is part of the public API
     */
    revoke(id: string, params?: IRevokeParams | RevokeCallback, cb?: RevokeCallback): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    update(): Promise<Mandate>;
}
