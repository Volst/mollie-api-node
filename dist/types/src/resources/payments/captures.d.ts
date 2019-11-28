import PaymentsBaseResource from './base';
import Capture from '../../models/Capture';
import List from '../../models/List';
import { IGetParams, IListParams } from '../../types/payment/capture/params';
import { GetCallback, ListCallback } from '../../types/payment/capture/callback';
/**
 * The `payments_captures` resource
 *
 * @since 1.1.1
 */
export default class PaymentsCapturesResource extends PaymentsBaseResource {
    static resource: string;
    static model: typeof Capture;
    apiName: string;
    /**
     * Retrieve a list of Payment Captures
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/captures-api/list-captures
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Capture>>;
    /**
     * Retrieve a list of Payment Captures
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/captures-api/list-captures
     *
     * @public ✓ This method is part of the public API
     *
     * @alias list
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Capture>>;
    /**
     * Get a Payment Capture by ID
     *
     * @param id - Capture ID
     * @param params - Get Payment Capture parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The found Payment Capture object
     *
     * @since 1.1.1
     *
     * @see https://docs.mollie.com/reference/v2/captures-api/get-Capture
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams, cb?: GetCallback): Promise<Capture>;
    /**
     * Retrieve a list of Payment Captures
     *
     * @param params - Retrieve Payment Captures list parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found Payment Captures
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/captures-api/list-captures
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Capture>>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    create(): Promise<Capture>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    update(): Promise<Capture>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    cancel(): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    delete(): Promise<boolean>;
}
