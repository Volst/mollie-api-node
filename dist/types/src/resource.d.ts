import { AxiosInstance, AxiosResponse } from 'axios';
import Model from './model';
import List from './models/List';
/**
 * @deprecated since 3.0.0
 */
export declare type ResourceCallback = (error: any, resource: any) => void;
export interface IParentParams {
    resource: string;
    id: string;
}
/**
 * The base resource
 */
export default class Resource {
    /**
     * Resource code such as `payments`
     * @var {string} resource
     */
    static resource: string;
    /**
     * Refers to a Model class
     * @var {Model} model
     */
    static model: any;
    /**
     * @var {string} apiName
     */
    readonly apiName: string;
    /**
     * @var {string} resourcePrefix
     */
    readonly resourcePrefix: string;
    /**
     * @var {AxiosInstance} httpClient
     */
    protected readonly httpClient: AxiosInstance;
    /**
     * @var {string} parentId
     */
    protected parentId: string;
    /**
     * Constructor
     */
    constructor(httpClient: AxiosInstance);
    /**
     * Creates an API error, based on the passed response.
     *
     * This method throws an error if the passed callback is falsy. It calls the passed callback providing the error
     * otherwise, and then throws the error nevertheless.
     *
     * In other words, this method calls the passed callback ‒ if any ‒ providing the error it creates, and then (always)
     * throws said error.
     */
    protected static createApiError(response: AxiosResponse, cb?: Function): never;
    /**
     * Creates an API error with the passed message.
     *
     * This method throws an error if the passed callback is falsy. It calls the passed callback providing the error
     * otherwise, and then throws the error nevertheless.
     *
     * In other words, this method calls the passed callback ‒ if any ‒ providing the error it creates, and then (always)
     * throws said error.
     */
    protected static createApiError(message: string, cb?: Function): never;
    /**
     * Set the parent ID by providing the parent
     *
     * @since 1.1.1
     *
     * @deprecated 2.0.0. This method is not supported by the v2 API.
     */
    withParent(parent: IParentParams): this;
    /**
     * Create a resource by ID
     *
     * @params params - Resource-specific parameters
     * @params cb - (DEPRECATED SINCE 3.0.0) Callback function, can be used instead of the returned Promise
     *
     * @returns The resource
     *
     * @since 1.0.0
     *
     * @public ✓ This method is part of the public API
     */
    create(prms: any, cb?: ResourceCallback): Promise<Model>;
    /**
     * Get a resource by ID
     *
     * @params id - Resource ID
     * @params params - Resource-specific parameters
     * @params cb - (DEPRECATED SINCE 3.0.0) Optional callback function
     *
     * @returns {Promise<Model>}
     *
     * @since 1.0.0
     */
    get(id: string, prms?: any, cb?: ResourceCallback): Promise<Model>;
    /**
     * List resources
     *
     * @param prms - Resource-specific parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Optional callback function
     *
     * @returns Resource list
     *
     * @since 1.0.0
     */
    list(prms?: any, cb?: ResourceCallback): Promise<List<Model>>;
    /**
     * Update a resource by ID
     *
     * @param id - Resource id
     * @param params - Resource-specific parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Optional callback function
     *
     * @returns {Promise<Model>}
     *
     * @since 1.0.0
     */
    update(id: string, params: any, cb?: ResourceCallback): Promise<Model>;
    /**
     * Delete a resource by ID
     *
     * @param id - Resource ID
     * @param params - Resource-specific parameters
     * @param cb - (DEPRECATED SINCE 3.0.0) Optional callback function
     *
     * @returns In case the API returns the updated object it we'll return a Model.
     *          In other cases the API should respond with `204 No Content`. This is translated
     *          to a boolean value with `true` meaning the correct `204 No Content` response was given.
     *
     * @since 1.0.0
     */
    delete(id: string, params?: any, cb?: ResourceCallback): Promise<Model | boolean>;
    /**
     * Get the HTTP client
     *
     * @since 2.0.0
     */
    protected getClient(): AxiosInstance;
    /**
     * Set the parent ID
     *
     * @since 2.0.0
     */
    protected setParentId(parentId: string): void;
    /**
     * If the parent ID is set
     *
     * @since 2.0.0
     */
    protected hasParentId(): boolean;
    /**
     * Create a resource URL with the parent ID
     *
     * @since 2.0.0
     */
    protected getResourceUrl(): string;
    /**
     * Get the resource name from the resource identifier
     *
     * @since 2.0.0-rc.2
     */
    protected getResourceName(): string;
}
