import Resource from '../resource';
import Refund from '../models/Refund';
import List from '../models/List';
import { IListParams } from '../types/refund/params';
import { ListCallback } from '../types/refund/callback';
/**
 * The `refunds` resource
 *
 * @since 2.0.0
 */
export default class RefundsResource extends Resource {
    static resource: string;
    static model: typeof Refund;
    apiName: string;
    /**
     * List Refunds
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/refunds-api/list-refunds
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Refund>>;
    /**
     * List Refunds
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/refunds-api/list-refunds
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Refund>>;
    /**
     * List Refunds
     *
     * @param params - List Refunds parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found Refunds
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/refunds-api/list-refunds
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Refund>>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    create(): Promise<Refund>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    get(): Promise<Refund>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    update(): Promise<Refund>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    cancel(): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    delete(): Promise<boolean>;
}
