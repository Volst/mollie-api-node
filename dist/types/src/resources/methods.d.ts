import Resource from '../resource';
import Method from '../models/Method';
import List from '../models/List';
import { IGetParams, IListParams } from '../types/method/params';
import { GetCallback, ListCallback } from '../types/method/callback';
/**
 * The `methods` resource
 *
 * @since 1.0.0
 */
export default class MethodsResource extends Resource {
    static resource: string;
    static model: typeof Method;
    apiName: string;
    /**
     * Retrieve a single Payment Method
     *
     * @param id - Method ID
     * @param params - Retrieve Payment Method parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The Payment Method object
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/methods-api/get-method
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params?: IGetParams): Promise<Method>;
    /**
     * Retrieve a single Payment Method
     *
     * @param id - Method ID
     * @param params - Retrieve Payment Method parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns The Payment Method object
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/methods-api/get-method
     *
     * @public ✓ This method is part of the public API
     */
    get(id: string, params: IGetParams | GetCallback, cb?: GetCallback): void;
    /**
     * Retrieve a list of Payment Methods
     *
     * @since 2.0.0
     *
     * @see https://docs.mollie.com/reference/v2/methods-api/list-methods
     *
     * @public ✓ This method is part of the public API
     */
    all: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Method>>;
    /**
     * Retrieve a list of Payment Methods
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/methods-api/list-methods
     *
     * @public ✓ This method is part of the public API
     */
    page: (params?: IListParams | ListCallback, cb?: ListCallback) => Promise<List<Method>>;
    /**
     * Retrieve a list of Payment Methods
     *
     * @param params - Retrieve Payment Method parameters
     *                 (DEPRECATED SINCE 3.0.0) Can also be a callback function
     * @param cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned `Promise` object
     *
     * @returns A list of found Payment Methods
     *
     * @since 3.0.0
     *
     * @see https://docs.mollie.com/reference/v2/methods-api/list-methods
     *
     * @public ✓ This method is part of the public API
     */
    list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Method>>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    create(): Promise<Method>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    update(): Promise<Method>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    cancel(): Promise<boolean>;
    /**
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    delete(): Promise<boolean>;
}
