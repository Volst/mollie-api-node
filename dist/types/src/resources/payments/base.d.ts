import Resource from '../../resource';
/**
 * Payments base resource
 */
export default class PaymentsBaseResource extends Resource {
    protected setParentId(parentId: string): void;
    /**
     * Set the parent
     *
     * @since 2.0.0
     *
     * @deprecated 3.0.0 Please use setParentId instead
     */
    protected setParent(params?: any): void;
}
