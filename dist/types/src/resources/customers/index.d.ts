import CustomersBaseResource from '../../resources/customers/base';
import Customer from '../../models/Customer';
import List from '../../models/List';
import { ICreateParams, IDeleteParams, IGetParams, IListParams, IUpdateParams } from '../../types/customer/params';
import { CreateCallback, DeleteCallback, GetCallback, ListCallback, UpdateCallback } from '../../types/customer/callback';
/**
 * The `Customers` resource
 */
export default class CustomersResource extends CustomersBaseResource {
    static resource: string;
    static model: typeof Customer;
    apiName: string;
    /**
     * List Customers.
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/list-customers
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Customer>>;
    /**
     * List Customers.
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/list-customers
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Customer>>;
    /**
     * Delete a Customer.
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/delete-customer
     *
     * @public ✓ This method is part of the public API
     *
     * @alias delete
     */
    cancel: (id: string, params?: IDeleteParams | DeleteCallback, cb?: DeleteCallback) => Promise<boolean>;
    /**
     * Creates a simple minimal representation of a customer in the Mollie API
     * to use for the {@link https://www.mollie.com/en/checkout Mollie Checkout}
     * and Recurring features.
     * These customers will appear in your
     * {@link https://www.mollie.com/dashboard/ Mollie Dashboard}
     * where you can manage their details,
     * and also see their payments and subscriptions.
     *
     * @param params - Create customer parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The newly created customer object
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/create-customer
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Customer>;
    /**
     * Retrieve a single customer by its ID
     *
     * @param id - Customer ID
     * @param params - Retrieve customer parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns Customer object
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/get-customer
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams | GetCallback, cb?: GetCallback): Promise<Customer>;
    /**
     * List customers
     *
     * @param params - List customer parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/list-customers
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Customer>>;
    /**
     * Update a customer
     *
     * @param id - Customer ID
     * @param params - Update customer parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The updated Customer object
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/update-customer
     *
     * @public ✓ This method is part of the public API
     */
    update(id: string, params: IUpdateParams | UpdateCallback, cb?: UpdateCallback): Promise<Customer>;
    /**
     * Delete a customer
     *
     * @param id - Customer ID
     * @param params - Delete customer parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns Success status
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/customers-api/delete-customer
     *
     * @public ✓ This method is part of the public API
     */
    delete(id: string, params?: IDeleteParams | DeleteCallback, cb?: DeleteCallback): Promise<boolean>;
}
