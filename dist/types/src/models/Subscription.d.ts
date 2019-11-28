import Model from '../model';
import { ISubscription } from '../types/subscription';
/**
 * The `Subscription` model
 *
 * {@link ISubscription}
 */
export default class Subscription extends Model implements ISubscription {
    static resourcePrefix: string;
    resource: string;
    id: any;
    mode: any;
    createdAt: any;
    status: any;
    amount: {
        currency: any;
        value: any;
    };
    times: any;
    interval: any;
    startDate: any;
    description: any;
    method: any;
    canceledAt: any;
    webhookUrl: any;
    timesRemaining: any;
    metadata: any;
    _links: {
        self: any;
        documentation: any;
        customer: any;
    };
    mandateId: any;
    nextPaymentDate: any;
    testmode?: boolean;
    /**
     * Subscription constructor
     *
     * @public ✓ This constructor is part of the public API
     */
    constructor(props?: Partial<ISubscription>);
    /**
     * Get the webhook url
     *
     * @public ✓ This method is part of the public API
     */
    getWebhookUrl(): string;
    /**
     * If the subscription is active
     *
     * @public ✓ This method is part of the public API
     */
    isActive(): boolean;
    /**
     * If the subscription is pending
     *
     * @public ✓ This method is part of the public API
     */
    isPending(): boolean;
    /**
     * If the subscription is completed
     *
     * @public ✓ This method is part of the public API
     */
    isCompleted(): boolean;
    /**
     * If the subscription is suspended
     *
     * @public ✓ This method is part of the public API
     */
    isSuspended(): boolean;
    /**
     * If the subscription is canceled
     *
     * @public ✓ This method is part of the public API
     */
    isCanceled(): boolean;
}
