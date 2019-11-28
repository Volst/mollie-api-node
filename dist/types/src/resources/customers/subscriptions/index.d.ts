import CustomersSubscriptionsBaseResource from '../base';
import Subscription from '../../../models/Subscription';
import List from '../../../models/List';
import { ICancelParams, ICreateParams, IGetParams, IListParams, IUpdateParams } from '../../../types/subscription/params';
import { CancelCallback, CreateCallback, GetCallback, ListCallback, UpdateCallback } from '../../../types/subscription/callback';
/**
 * The `customers_subscriptions` resource.
 *
 * @since 1.3.2
 */
export default class CustomersSubscriptionsResource extends CustomersSubscriptionsBaseResource {
    static resource: string;
    static model: typeof Subscription;
    apiName: string;
    /**
     * Delete a customer subscription.
     *
     * @since 1.3.2
     *
     * @alias cancel
     *
     * @see https://docs.mollie.com/reference/v2/subscriptions-api/cancel-subscription
     *
     * @public ✓ This method is part of the public API
     */
    delete: (id: string, params?: ICancelParams | CancelCallback, cb?: CancelCallback) => Promise<Subscription>;
    /**
     * List the Customer's Subscriptions.
     *
     * @since 1.3.2
     *
     * @alias list
     *
     * @see https://docs.mollie.com/reference/v2/subscriptions-api/list-subscriptions
     *
     * @public ✓ This method is part of the public API
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Subscription>>;
    /**
     * List the Customer's Subscriptions.
     *
     * @since 3.0.0
     *
     * @alias list
     *
     * @see https://docs.mollie.com/reference/v2/subscriptions-api/list-subscriptions
     *
     * @public ✓ This method is part of the public API
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Subscription>>;
    /**
     * Create a customer subscription.
     *
     * @param params - Create Subscription parameters
     *
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns Customer Subscription
     *
     * @since 1.3.2
     *
     * @see https://docs.mollie.com/reference/v2/subscriptions-api/create-subscription
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Subscription>;
    /**
     * Get a customer subscription.
     *
     * @param id - Subscription ID
     * @param params - Get Subscription parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @return Customer Subscription
     *
     * @since 1.3.2
     *
     * @see https://docs.mollie.com/reference/v2/subscriptions-api/get-subscription
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams | GetCallback, cb?: GetCallback): Promise<Subscription>;
    /**
     * Get all customer's subscriptions.
     *
     * @param params - List customer's subscriptions parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found subscriptions
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/subscriptions-api/list-subscriptions
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Subscription>>;
    /**
     * Update a customer's subscription.
     *
     * @param id - Subscription ID
     * @param params - Update customer subscription parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The updated Customer Subscription object
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/subscriptions-api/update-subscription
     *
     * @public ✓ This method is part of the public API
     */
    update(id: string, params: IUpdateParams | UpdateCallback, cb?: UpdateCallback): Promise<Subscription>;
    /**
     * Cancel a Subscription
     *
     * @param id - Subscription ID
     * @param params - Delete Subscription parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns Success status
     *
     * @since 1.3.2
     *
     * @see https://docs.mollie.com/reference/v2/subscriptions-api/cancel-subscription
     *
     * @public ✓ This method is part of the public API
     */
    cancel(id: string, params?: ICancelParams | CancelCallback, cb?: CancelCallback): Promise<Subscription>;
}
