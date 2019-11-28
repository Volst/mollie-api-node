import Shipment from '../../models/Shipment';
import List from '../../models/List';
import OrdersBaseResource from './base';
import { ICreateParams, IGetParams, IListParams, IUpdateParams } from '../../types/shipment/params';
import { CreateCallback, GetCallback, ListCallback, UpdateCallback } from '../../types/shipment/callback';
/**
 * The `order_shipments` resource
 *
 * @since 3.0.0
 */
export default class OrdersShipmentsResource extends OrdersBaseResource {
    static resource: string;
    static model: typeof Shipment;
    apiName: string;
    /**
     * List order shipments
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/shipments-api/list-shipments
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Shipment>>;
    /**
     * List order shipments
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/shipments-api/list-shipments
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Shipment>>;
    /**
     * In addition to the
     * {@link https://docs.mollie.com/reference/v2/orders-api/create-order Orders API},
     * the create shipment endpoint can be used to ship order lines.
     *
     * When using Klarna Pay later and Klarna Slice it this is mandatory
     * for the order amount to be captured. An capture will automatically
     * be created for the shipment.
     *
     * The word “shipping” is used in the figurative sense here. It can also
     * mean that a service was provided or digital content was delivered.
     *
     * @param params - Create Shipment parameters
     * @param cb - Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The newly created Shipment object
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/shipments-api/create-shipment
     *
     * @public ✓ This method is part of the public API
     */
    create(params: ICreateParams, cb?: CreateCallback): Promise<Shipment>;
    /**
     * Update a Shipment
     *
     * @param id - Shipment ID
     * @param params - Update Shipment parameters
     * @param cb - Callback function, can be used instead of the returned `Promise` object
     *
     * @returns {Promise<Shipment>}
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/shipments-api/update-shipment
     *
     * @public ✓ This method is part of the public API
     */
    update(id: string, params: IUpdateParams | UpdateCallback, cb?: UpdateCallback): Promise<Shipment>;
    /**
     * Get a Shipment by ID
     *
     * @param id - Shipment ID
     * @param params - Get Shipment parameters
     * @param cb - Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The Shipment object
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/shipments-api/get-shipment
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams, cb?: GetCallback): Promise<Shipment>;
    /**
     * List order shipments
     *
     * @param params - List Order parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found Shipments
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/shipments-api/list-shipments
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Shipment>>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    cancel(): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    delete(): Promise<boolean>;
}
