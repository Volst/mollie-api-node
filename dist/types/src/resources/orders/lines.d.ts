import OrderLine from '../../models/OrderLine';
import OrdersResource from './base';
import Order from '../../models/Order';
import { ICancelParams, IUpdateParams } from '../../types/order/line/params';
import { CancelCallback, UpdateCallback } from '../../types/order/line/callback';
/**
 * The `orders_lines` resource
 *
 * @since 3.0.0
 */
export default class OrdersLinesResource extends OrdersResource {
    static resource: string;
    static model: typeof OrderLine;
    apiName: string;
    /**
     * Cancel an order line by ID or multiple order lines
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/cancel-order-lines
     *
     * @public ✓ This method is part of the public API
     *
     * @alias cancel
     */
    delete: (id: string, params?: ICancelParams, cb?: CancelCallback) => Promise<boolean>;
    /**
     * Update order lines
     *
     * @param id - Order ID
     * @param params - Update order parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The updated Order object
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/update-orderline
     *
     * @public ✓ This method is part of the public API
     */
    update(id: string, params: IUpdateParams | UpdateCallback, cb?: UpdateCallback): Promise<Order>;
    /**
     * Cancel an order line by ID or multiple order lines
     *
     * @param id - Order ID
     * @param params - Cancel order lines parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns Success status
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/cancel-order-lines
     *
     * @public ✓ This method is part of the public API
     */
    cancel(id: string, params?: ICancelParams, cb?: CancelCallback): Promise<boolean>;
}
