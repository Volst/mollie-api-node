import Model from '../model';
import { IPayment } from '../types/payment';
import { IAmount } from '../types/global';
/**
 * The `Payment` model
 *
 * {@link IPayment}
 */
export default class Payment extends Model implements IPayment {
    static readonly resourcePrefix = "tr_";
    resource: 'payment';
    id: null;
    mode: null;
    createdAt: null;
    status: null;
    isCancelable: null;
    paidAt: null;
    canceledAt: null;
    expiresAt: null;
    expiredAt: null;
    failedAt: null;
    amount: {
        value: null;
        currency: null;
    };
    amountRefunded: null;
    amountRemaining: null;
    description: null;
    redirectUrl: null;
    webhookUrl: null;
    method: null;
    metadata: null;
    locale: null;
    countryCode: null;
    profileId: null;
    settlementAmount: null;
    settlementId: null;
    customerId: null;
    sequenceType: null;
    mandateId: null;
    subscriptionId: null;
    applicationFee: {
        amount: {
            value: null;
            currency: null;
        };
        description: null;
    };
    details: null;
    _links: {
        self: null;
        documentation: null;
        checkout: null;
        refunds: null;
        chargebacks: null;
        captures: null;
        order: null;
        settlement: null;
        mandate: null;
        subscription: null;
        customer: null;
    };
    _embedded: any;
    amountCaptured: any;
    orderId: any;
    /**
     * Payment constructor
     *
     * @public ✓ This constructor is part of the public API
     */
    constructor(props?: Partial<IPayment>);
    /**
     * If the payment is open
     *
     * @public ✓ This method is part of the public API
     */
    isOpen(): boolean;
    /**
     * If the payment is authorized
     *
     * @public ✓ This method is part of the public API
     */
    isAuthorized(): boolean;
    /**
     * If the payment is paid
     *
     * @public ✓ This method is part of the public API
     */
    isPaid(): boolean;
    /**
     * If the payment is canceled
     *
     * @public ✓ This method is part of the public API
     */
    isCanceled(): boolean;
    /**
     * If the payment is expired
     *
     * @public ✓ This method is part of the public API
     */
    isExpired(): boolean;
    /**
     * If the payment is refundable
     *
     * @public ✓ This method is part of the public API
     *
     * @since 2.0.0-rc.2
     */
    isRefundable(): boolean;
    /**
     * Get the payment URL
     *
     * @public ✓ This method is part of the public API
     */
    getPaymentUrl(): string;
    /**
     * Returns whether the payment has failed and cannot be completed with a different payment method.
     *
     * @public ✓ This method is part of the public API
     */
    isFailed(): boolean;
    /**
     * Returns whether the payment is in this temporary status that can occur when the actual payment process has been
     * started, but has not completed yet.
     *
     * @public ✓ This method is part of the public API
     */
    isPending(): boolean;
    /**
     * Returns whether there are refunds which belong to the payment.
     *
     * @public ✓ This method is part of the public API
     */
    hasRefunds(): boolean;
    /**
     * Returns whether there are chargebacks which belong to the payment.
     *
     * @public ✓ This method is part of the public API
     */
    hasChargebacks(): boolean;
    /**
     * Returns whether `sequenceType` is set to `'first'`. If a `'first'` payment has been completed successfully, the
     * consumer's account may be charged automatically using recurring payments.
     *
     * @public ✓ This method is part of the public API
     */
    hasSequenceTypeFirst(): boolean;
    /**
     * Returns whether `sequenceType` is set to `'recurring'`. This type of payment is processed without involving the
     * consumer.
     *
     * @public ✓ This method is part of the public API
     */
    hasSequenceTypeRecurring(): boolean;
    /**
     * Returns the URL your customer should visit to make the payment. This is where you should redirect the consumer to.
     *
     * Recurring payments don’t have a checkout URL.
     *
     * @public ✓ This method is part of the public API
     */
    getCheckoutUrl(): string | null;
    /**
     * @public ✓ This method is part of the public API
     */
    canBeRefunded(): boolean;
    /**
     * @public ✓ This method is part of the public API
     */
    canBePartiallyRefunded(): boolean;
    /**
     * Returns the total amount that is already refunded. For some payment methods, this amount may be higher than the
     * payment amount, for example to allow reimbursement of the costs for a return shipment to the customer.
     *
     * @public ✓ This method is part of the public API
     */
    getAmountRefunded(): IAmount;
    /**
     * Returns the remaining amount that can be refunded.
     *
     * @public ✓ This method is part of the public API
     */
    getAmountRemaining(): IAmount;
}
