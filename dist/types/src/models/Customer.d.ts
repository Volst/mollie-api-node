import Model from '../model';
import { ICustomer } from '../types/customer';
/**
 * The `Customer` model
 *
 * {@link ICustomer}
 */
export default class Customer extends Model implements ICustomer {
    static resourcePrefix: string;
    resource: string;
    id: any;
    mode: any;
    name: any;
    email: any;
    locale: any;
    metadata: any;
    recentlyUsedMethods: any;
    createdAt: any;
    _links: {
        self: any;
        documentation: any;
        mandates: any;
        subscriptions: any;
        payments: any;
    };
    testmode?: boolean;
    /**
     * Customer constructor
     *
     * @public ✓ This constructor is part of the public API
     */
    constructor(props?: Partial<ICustomer>);
}
