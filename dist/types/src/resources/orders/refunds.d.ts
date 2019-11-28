import Refund from '../../models/Refund';
import OrdersResource from './base';
import List from '../../models/List';
import { CreateCallback, ListCallback } from '../../types/order/refund/callback';
import { ICreateParams, IListParams } from '../../types/order/refund/params';
/**
 * The `orders_refunds` resource
 *
 * @since 3.0.0
 */
export default class OrdersRefundsResource extends OrdersResource {
    static resource: string;
    static model: typeof Refund;
    apiName: string;
    /**
     * Get all order refunds
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/list-order-refunds
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Refund>>;
    /**
     * Get all order refunds
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/list-order-refunds
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Refund>>;
    /**
     * Create an order refund
     *
     * @param params - Create Order Refund parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The newly created Order Refund object
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/create-order-refund
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Refund>;
    /**
     * Get all order refunds
     *
     * @param params - List Order Refunds parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found Order Refunds
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/list-order-refunds
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Refund>>;
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
    delete(): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    cancel(): Promise<boolean>;
}
