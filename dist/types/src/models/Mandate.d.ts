import Model from '../model';
import { IMandate } from '../types/mandate';
/**
 * The `Mandate` model
 *
 * {@link IMandate}
 */
export default class Mandate extends Model implements IMandate {
    static resourcePrefix: string;
    resource: string;
    id: any;
    status: any;
    method: any;
    details: any;
    mode: any;
    mandateReference: any;
    signatureDate: any;
    createdAt: any;
    _links: {
        self: any;
        documentation: any;
        customer: any;
    };
    testmode?: boolean;
    /**
     * Mandate constructor
     *
     * @public ✓ This constructor is part of the public API
     */
    constructor(props?: Partial<IMandate>);
    /**
     * If the mandate is valid
     *
     * @public ✓ This method is part of the public API
     */
    isValid(): boolean;
}
