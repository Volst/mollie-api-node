import CustomersBaseResource from './base';
import Payment from '../../models/Payment';
import List from '../../models/List';
import { ICreateParams, IListParams } from '../../types/customer/payment/params';
import { CreateCallback, ListCallback } from '../../types/customer/payment/callback';
/**
 * The `customers_payments` resource.
 *
 * @since 1.1.1
 */
export default class CustomersPaymentsResource extends CustomersBaseResource {
    static resource: string;
    static model: typeof Payment;
    apiName: string;
    /**
     * Get all of a customer's payments.
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/list-customer-payments
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Payment>>;
    /**
     * Get all of a customer's payments.
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/list-customer-payments
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Payment>>;
    /**
     * Create a customer payment.
     *
     * @param params - Create Customer Payment parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The newly created Payment object
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/create-customer-payment
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Payment>;
    /**
     * Get all of a customer's payments.
     *
     * @param params - List Customer Payments parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found Customer Payments
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/list-customer-payments
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Payment>>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    get(): Promise<Payment>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    update(): Promise<Payment>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    delete(): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    cancel(): Promise<boolean>;
}
