import Resource from '../../resource';
import Order from '../../models/Order';
import List from '../../models/List';
import { ICancelParams, ICreateParams, IGetParams, IListParams, IUpdateParams } from '../../types/order/params';
import { CancelCallback, CreateCallback, GetCallback, ListCallback, UpdateCallback } from '../../types/order/callback';
/**
 * The `orders` resource
 *
 * @since 3.0.0
 */
export default class Orders extends Resource {
    static resource: string;
    static model: typeof Order;
    apiName: string;
    /**
     * Cancel an Order.
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/cancel-order
     *
     * @public ✓ This method is part of the public API
     *
     * @alias cancel
     */
    delete: (id: string, params?: ICancelParams | CancelCallback, cb?: CancelCallback) => Promise<Order>;
    /**
     * List Orders.
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/list-orders
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Order>>;
    /**
     * List Orders.
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/list-orders
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Order>>;
    /**
     * Using the Orders API is the preferred approach when integrating
     * the Mollie API into e-commerce applications such as webshops.
     * If you want to use pay after delivery methods such as Klarna Pay later,
     * using the Orders API is mandatory.
     *
     * Creating an order will automatically create the required payment to allow
     * your customer to pay for the order.
     *
     * Once you have created an order, you should redirect your customer to the
     * URL in the _links.checkout property from the response.
     *
     * Note that when the payment fails, expires or is canceled, you can create
     * a new payment using the Create order payment API. This is only possible
     * for orders that have a created status.
     *
     * @param params - Create Order parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of
     *             the returned `Promise` object
     *
     * @returns The newly created Order
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/create-order
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Order>;
    /**
     * Retrieve an Order.
     *
     * @param id - Order ID
     * @param params - Get Order parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The Order
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/get-order
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams | GetCallback, cb?: GetCallback): Promise<Order>;
    /**
     * List Orders.
     *
     * @param params - List Order parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of the Orders found
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/list-orders
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Order>>;
    /**
     * Update an Order.
     *
     * @param id - Order ID
     * @param params - Update Order parameters
     *               (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The updated Order
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/update-order
     *
     * @public ✓ This method is part of the public API
     */
    update(id: string, params: IUpdateParams | UpdateCallback, cb?: UpdateCallback): Promise<Order>;
    /**
     * Cancel an Order.
     *
     * @param id - Order ID
     * @param params - Cancel Order parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback object, can be used instead of the returned `Promise` object
     *
     * @returns Updated Order object
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/orders-api/cancel-order
     *
     * @public ✓ This method is part of the public API
     */
    cancel(id: string, params?: ICancelParams | CancelCallback, cb?: CancelCallback): Promise<Order>;
}
