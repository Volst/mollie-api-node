import PaymentsResource from './base';
import Refund from '../../models/Refund';
import List from '../../models/List';
import { ICancelParams, ICreateParams, IGetParams, IListParams } from '../../types/payment/refund/params';
import { CancelCallback, CreateCallback, GetCallback, ListCallback } from '../../types/payment/refund/callback';
/**
 * The `payments_refunds` resource
 *
 * @since 1.1.1
 */
export default class PaymentsRefundsResource extends PaymentsResource {
    static resource: string;
    static model: typeof Refund;
    apiName: string;
    /**
     * Get all payment refunds. Alias of list.
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/refunds-api/list-refunds
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Refund>>;
    /**
     * Get all payment refunds. Alias of list.
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
     * Cancel a Payment Refund by ID
     *
     * @see https://docs.mollie.com/reference/v2/refunds-api/cancel-refund
     *
     * @public ✓ This method is part of the public API
     *
     * @alias cancel
     */
    delete: (id: string, params?: ICancelParams | CancelCallback, cb?: CancelCallback) => Promise<boolean>;
    /**
     * Create a payment refund
     *
     * @param params - Create Payment Refund parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The newly create Payment Refund
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/refunds-api/create-refund
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Refund>;
    /**
     * Get a payment refund by ID
     *
     * @param id - Refund ID
     * @param params - Retrieve Payment Refund parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/refunds-api/get-refund
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams | GetCallback, cb?: GetCallback): Promise<Refund>;
    /**
     * Get all payment refunds.
     *
     * @param params - List Payment Refunds parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/refunds-api/list-refunds
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Refund>>;
    /**
     * Cancel a payment refund by ID
     *
     * @param id - Refund ID
     * @param params - Cancel payment refund parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @return Success status
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/refunds-api/cancel-refund
     *
     * @public ✓ This method is part of the public API
     */
    cancel(id: string, params?: ICancelParams | CancelCallback, cb?: CancelCallback): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    update(): Promise<Refund>;
}
