import Payment from '../../models/Payment';
import OrdersResource from './base';
import { ICreateParams } from '../../types/order/payment/params';
import { CreateCallback } from '../../types/payment/callback';
import List from '../../models/List';
/**
 * The `orders_payments` resource
 *
 * @since 3.1.0
 */
export default class OrdersPaymentsResource extends OrdersResource {
    static resource: string;
    static model: typeof Payment;
    apiName: string;
    /**
     * Create order payment
     *
     * @param params - Create order payment parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The created Payment object
     *
     * @since 3.1.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/create-order-payment
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Payment>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    list(): Promise<List<Payment>>;
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
