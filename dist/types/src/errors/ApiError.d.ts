import { IMollieApiError, IMollieApiErrorLinks, IUrl } from '../types/global';
/**
 * @since 3.0.0
 */
export default class ApiError extends Error {
    protected title: string;
    protected status: number;
    protected field: string;
    protected links: IMollieApiErrorLinks;
    constructor(message: string, title?: string, status?: number, field?: string, links?: IMollieApiErrorLinks);
    /**
     * Get the error message
     *
     * @returns The error message
     *
     * @since 3.0.0
     *
     * @public ✓ This method is part of the public API
     */
    getMessage(): string;
    /**
     * Get the field name that contains an error
     *
     * @returns The error field
     *
     * @since 3.0.0
     *
     * @public ✓ This method is part of the public API
     */
    getField(): string;
    /**
     * Get the API status code
     *
     * @returns The status code
     *
     * @since 3.0.0
     *
     * @public ✓ This method is part of the public API
     */
    getStatusCode(): number;
    /**
     * Get the documentation URL
     *
     * @returns The documentation URL
     *
     * @since 3.0.0
     *
     * @public ✓ This method is part of the public API
     */
    getDocumentationUrl(): string;
    /**
     * Get the dashboard URL
     *
     * @returns The dashboard URL
     *
     * @since 3.0.0
     *
     * @public ✓ This method is part of the public API
     */
    getDashboardUrl(): string;
    /**
     * Check if the link exists
     *
     * @param key - Link name
     *
     * @returns Whether the link exists
     *
     * @since 3.0.0
     *
     * @public ✓ This method is part of the public API
     */
    hasLink(key: string): boolean;
    /***
     * Retrieve a link by name
     *
     * @param key - The link name
     *
     * @returns A link to the resource
     *
     * @since 3.0.0
     *
     * @public ✓ This method is part of the public API
     */
    getLink(key: string): IUrl;
    /**
     *
     * @param {string} key
     *
     * @returns {string}
     *
     * @since 3.0.0
     *
     * @public ✓ This method is part of the public API
     */
    getUrl(key: string): string;
    toString(): string;
    /**
     * Create an `ApiError` from a raw error format
     *
     * @param error - A raw Mollie API error
     *
     * @returns A new `ApiError`
     *
     * @since 3.0.0
     */
    static createFromResponse(error: IMollieApiError): ApiError;
}
