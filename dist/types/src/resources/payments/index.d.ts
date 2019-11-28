import Payment from '../../models/Payment';
import PaymentsBaseResource from './base';
import { ICancelParams, ICreateParams, IGetParams, IListParams } from '../../types/payment/params';
import { CancelCallback, CreateCallback, GetCallback, ListCallback } from '../../types/payment/callback';
import List from '../../models/List';
/**
 * The `payments` resource
 */
export default class PaymentsResource extends PaymentsBaseResource {
    static resource: string;
    static model: typeof Payment;
    apiName: string;
    /**
     * Retrieve all payments created with the current website profile, ordered from newest to oldest.
     * This is just an alias of the `list` method.
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/payments-api/list-payments
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Payment>>;
    /**
     * Retrieve all payments created with the current website profile, ordered from newest to oldest.
     * This is just an alias of the `list` method.
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/payments-api/list-payments
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Payment>>;
    /**
     * Delete the given Payment. This is just an alias of the 'cancel' method.
     *
     * Will throw an ApiError if the payment ID is invalid or if the resource cannot be found.
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/payments-api/cancel-payment
     *
     * @public ✓ This method is part of the public API
     *
     * @alias cancel
     */
    delete: (id: string, params?: ICancelParams, cb?: CancelCallback) => Promise<Payment>;
    /**
     * Create a payment in Mollie.
     *
     * @param params - Create Payment parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns {Promise<Payment>}
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/payments-api/create-payment
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Payment>;
    /**
     * Retrieve a single payment from Mollie.
     *
     * @param id - Payment ID
     * @param params - Retrieve Payment parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The found Payment object
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/payments-api/get-payment
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams | GetCallback, cb?: GetCallback): Promise<Payment>;
    /**
     * Retrieve all payments created with the current website profile, ordered from newest to oldest.
     *
     * @param params - List parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found Payments
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/payments-api/list-payments
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Payment>>;
    /**
     * Cancel the given payment.
     *
     * Will throw an ApiError if the payment id is invalid or the resource cannot be found.
     * Returns with HTTP status No Content (204) if successful.
     *
     * @param id - Payment Id
     * @param params - Cancel Payment parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The updated Payment object
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/payments-api/cancel-payment
     *
     * @public ✓ This method is part of the public API
     */
    cancel(id: string, params?: ICancelParams, cb?: CancelCallback): Promise<Payment>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    update(): Promise<Payment>;
}
