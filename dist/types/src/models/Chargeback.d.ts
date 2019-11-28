import Model from '../model';
import { IChargeback } from '../types/chargeback';
/**
 * The `Chargeback` model
 *
 * {@link IChargeback}
 */
export default class Chargeback extends Model implements IChargeback {
    static resourcePrefix: string;
    resource: string;
    id: any;
    amount: any;
    settlementAmount: any;
    createdAt: any;
    reversedAt: any;
    paymentId: any;
    _links: {
        self: any;
        documentation: any;
        payment: any;
    };
    /**
     * Chargeback constructor
     *
     * @public ✓ This method is part of the public API
     */
    constructor(props?: Partial<IChargeback>);
}
