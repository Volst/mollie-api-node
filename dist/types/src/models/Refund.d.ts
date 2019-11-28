import Model from '../model';
import { IRefund } from '../types/payment/refund';
/**
 * The `Refund` model
 *
 * {@link IRefund}
 */
export default class Refund extends Model implements IRefund {
    static resourcePrefix: string;
    resource: string;
    id: any;
    amount: {
        currency: any;
        value: any;
    };
    settlementAmount: any;
    description: any;
    status: any;
    createdAt: any;
    paymentId: any;
    _links: {
        payment: any;
        settlement: any;
        order: any;
        self: any;
        documentation: any;
    };
    lines: any;
    _embedded: any;
    orderId: any;
    /**
     * Refund constructor
     *
     * @public ✓ This constructor is part of the public API
     */
    constructor(props?: Partial<IRefund>);
    /**
     * The refund is queued until there is enough balance to process te refund.
     * You can still cancel the refund.
     *
     * @returns {boolean}
     *
     * @public ✓ This method is part of the public API
     */
    isQueued(): boolean;
    /**
     * The refund will be sent to the bank on the next business day. You can still cancel the refund.
     *
     * @public ✓ This method is part of the public API
     */
    isPending(): boolean;
    /**
     * The refund has been sent to the bank. The refund amount will be transferred to the consumer
     * account as soon as possible.
     *
     * @public ✓ This method is part of the public API
     */
    isProcessing(): boolean;
    /**
     * The refund amount has been transferred to the consumer.
     *
     * @public ✓ This method is part of the public API
     */
    isRefunded(): boolean;
    /**
     * The refund has failed during processing.
     *
     * @public ✓ This method is part of the public API
     */
    isFailed(): boolean;
}
