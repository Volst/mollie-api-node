import Model from '../model';
import { IOrder } from '../types/order';
import { IAmount } from '../types/global';
/**
 * The `Order` model
 *
 * {@link IOrder}
 */
export default class Order extends Model implements IOrder {
    static resourcePrefix: string;
    resource: string;
    id: any;
    amount: any;
    profileId: any;
    createdAt: any;
    method: any;
    mode: any;
    status: any;
    isCancelable: any;
    billingAddress: any;
    orderNumber: any;
    shippingAddress: any;
    locale: any;
    metadata: any;
    redirectUrl: any;
    lines: any;
    _links: {
        self: any;
        documentation: any;
        checkout: any;
        payment: any;
        settlement: any;
    };
    _embedded: any;
    webhookUrl?: string;
    expiresAt?: string;
    expiredAt?: string;
    paidAt?: string;
    authorizedAt?: string;
    canceledAt?: string;
    completedAt?: string;
    amountCaptured?: IAmount | null;
    amountRefunded?: IAmount | null;
    consumerDateOfBirth?: string;
    /**
     * Order constructor
     *
     * @public ✓ This constructor is part of the public API
     */
    constructor(props?: Partial<IOrder>);
    /**
     * Returns whether the order has been created, but nothing else has happened yet.
     *
     * @public ✓ This method is part of the public API
     */
    isCreated(): boolean;
    /**
     * Returns whether the order's payment is successfully completed with a payment method that does not support
     * authorizations.
     *
     * @public ✓ This method is part of the public API
     */
    isPaid(): boolean;
    /**
     * Returns whether the order's payment is successfully completed with a payment method that does support
     * authorizations. The money will only be transferred once a shipment is created for the order.
     *
     * @public ✓ This method is part of the public API
     */
    isAuthorized(): boolean;
    /**
     * Returns whether the order has been canceled.
     *
     * @public ✓ This method is part of the public API
     */
    isCanceled(): boolean;
    /**
     * Returns whether the first order line or part of an order line has started shipping. When the order is in this
     * state, it means that your order is partially shipped.
     *
     * @public ✓ This method is part of the public API
     */
    isShipping(): boolean;
    /**
     * Returns whether the order has been completed.
     *
     * @public ✓ This method is part of the public API
     */
    isCompleted(): boolean;
    /**
     * Returns whether the order has expired.
     *
     * @public ✓ This method is part of the public API
     */
    isExpired(): boolean;
    /**
     * Returns whether the the payment supplier is manually checking the order.
     *
     * @public ✓ This method is part of the public API
     */
    isPending(): boolean;
    /**
     * Returns the URL your customer should visit to make the payment for the order. This is where you should redirect
     * the customer to after creating the order.
     *
     * As long as the order is still in the `'created'` state, this link can be used by your customer to pay for this
     * order. You can safely share this URL with your customer.
     *
     * Recurring, authorized, paid and finalized orders do not have a checkout URL.
     *
     * @public ✓ This method is part of the public API
     */
    getCheckoutUrl(): string | null;
}
