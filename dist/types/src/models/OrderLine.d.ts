import Model from '../model';
import { IOrderLine } from '../types/order/line';
/**
 * The `OrderLine` model
 *
 * {@link IOrderLine}
 */
export default class OrderLine extends Model implements IOrderLine {
    static resourcePrefix: string;
    resource: string;
    id: any;
    name: any;
    quantity: any;
    unitPrice: any;
    discountAmount: any;
    totalAmount: any;
    vatRate: any;
    vatAmount: any;
    sku: any;
    imageUrl: any;
    productUrl: any;
    _links: {
        productUrl: null;
        imageUrl: null;
    };
    orderId: any;
    type: any;
    status: any;
    isCancelable: any;
    quantityShipped: any;
    amountShipped: any;
    quantityRefunded: any;
    amountRefunded: any;
    quantityCanceled: any;
    amountCanceled: any;
    shippableQuantity: any;
    refundableQuantity: any;
    cancelableQuantity: any;
    createdAt: any;
    metadata: any;
    /**
     * OrderLine constructor
     *
     * @public ✓ This constructor is part of the public API
     */
    constructor(props?: Partial<IOrderLine>);
}
