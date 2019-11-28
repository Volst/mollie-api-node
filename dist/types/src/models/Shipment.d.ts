import Model from '../model';
import { IShipment } from '../types/shipment';
/**
 * The `Shipment` model
 *
 * {@link IShipment}
 */
export default class Shipment extends Model implements IShipment {
    static resourcePrefix: string;
    resource: string;
    id: any;
    orderId: any;
    createdAt: any;
    tracking: any;
    lines: any;
    _links: {
        self: any;
        order: any;
        documentation: any;
    };
    testmode?: boolean;
    /**
     * Shipment constructor
     *
     * @public ✓ This constructor is part of the public API
     */
    constructor(props?: Partial<IShipment>);
}
