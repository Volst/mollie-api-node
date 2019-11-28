import Model from '../model';
import { ICapture } from '../types/payment/capture';
/**
 * The `Capture` model
 *
 * {@link ICapture}
 */
export default class Capture extends Model implements ICapture {
    static resourcePrefix: string;
    resource: string;
    id: any;
    mode: any;
    amount: any;
    settlementAmount: any;
    paymentId: any;
    createdAt: any;
    _links: {
        self: any;
        payment: any;
        shipment: any;
        settlement: any;
        documentation: any;
    };
    shipmentId: any;
    settlementId: any;
    /**
     * Capture constructor
     *
     * @public ✓ This constructor is part of the public API
     */
    constructor(props?: Partial<ICapture>);
}
