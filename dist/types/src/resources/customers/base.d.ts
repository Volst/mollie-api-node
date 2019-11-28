import Resource from '../../resource';
/**
 * Customers base resource.
 */
export default class CustomersBaseResource extends Resource {
    /**
     * Set the parent.
     *
     * @since 2.0.0
     *
     * @deprecated 2.2.0 Please use setParentId instead
     */
    protected setParent(params?: any): void;
    /**
     * Set Parent ID
     *
     * @param parentId - Parent resource ID
     *
     * @since 3.0.0
     */
    protected setParentId(parentId: string): void;
}
