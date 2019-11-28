import Resource from '../resource';
import Chargeback from '../models/Chargeback';
import List from '../models/List';
import { IListParams } from '../types/chargeback/params';
import { ListCallback } from '../types/chargeback/callback';
/**
 * The `chargebacks` resource
 *
 * @since 2.0.0-rc.1
 */
export default class ChargebacksResource extends Resource {
    static resource: string;
    static model: typeof Chargeback;
    apiName: string;
    /**
     * List chargebacks
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Chargeback>>;
    /**
     * List chargebacks
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Chargeback>>;
    /**
     * List chargebacks
     *
     * @param params - List chargebacks parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found Chargebacks
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Chargeback>>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    create(): Promise<Chargeback>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    update(id: string, data: any, cb?: Function): Promise<Chargeback>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    get(id: string, params: any, cb?: Function): Promise<Chargeback>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    cancel(): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    delete(): Promise<boolean>;
}
