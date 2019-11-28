import PaymentsBaseResource from './base';
import Chargeback from '../../models/Chargeback';
import List from '../../models/List';
import { IGetParams, IListParams } from '../../types/payment/chargeback/params';
import { GetCallback, ListCallback } from '../../types/payment/chargeback/callback';
/**
 * The `payments_chargebacks` resource
 *
 * @since 1.1.1
 */
export default class PaymentsChargebacksResource extends PaymentsBaseResource {
    static resource: string;
    static model: typeof Chargeback;
    apiName: string;
    /**
     * Retrieve a list of Payment Chargebacks
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Chargeback>>;
    /**
     * Retrieve a list of Payment Chargebacks
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
     * Get a Payment Chargeback by ID
     *
     * @param id - Chargeback ID
     * @param params - Get Payment Chargeback parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The found Payment Chargeback object
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/chargebacks-api/get-chargeback
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams | GetCallback, cb?: GetCallback): Promise<Chargeback>;
    /**
     * Retrieve a list of Payment Chargebacks
     *
     * @param params - Retrieve Payment Chargebacks list parameters
     * @param cb - Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found Payment Chargebacks
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
    update(): Promise<Chargeback>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    cancel(): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    delete(): Promise<boolean>;
}
