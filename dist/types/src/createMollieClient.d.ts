import { AxiosRequestConfig } from 'axios';
import PaymentsResource from './resources/payments';
import PaymentsRefundsResource from './resources/payments/refunds';
import PaymentsChargebacksResource from './resources/payments/chargebacks';
import MethodsResource from './resources/methods';
import RefundsResource from './resources/refunds';
import CustomersResource from './resources/customers';
import CustomersPaymentsResource from './resources/customers/payments';
import CustomersMandatesResource from './resources/customers/mandates';
import CustomersSubscriptionsResource from './resources/customers/subscriptions';
import ChargebacksResource from './resources/chargebacks';
import OrdersShipmentsResource from './resources/orders/shipments';
import OrdersRefundsResource from './resources/orders/refunds';
import OrdersResource from './resources/orders';
import OrdersLinesResource from './resources/orders/lines';
import PaymentsCapturesResource from './resources/payments/captures';
export interface MollieOptions extends AxiosRequestConfig {
    /**
     * The Mollie API key, starting with `'test_'` or `'live_'`.
     */
    apiKey: string;
    /**
     * One or an array of version strings of the software you are using, such as `'RockenbergCommerce/3.1.12'`.
     */
    versionStrings?: string | Array<string>;
}
export interface MollieClient {
    payments: PaymentsResource;
    methods: MethodsResource;
    payments_refunds: PaymentsRefundsResource;
    refunds: RefundsResource;
    payments_chargebacks: PaymentsChargebacksResource;
    chargebacks: ChargebacksResource;
    payments_captures: PaymentsCapturesResource;
    customers: CustomersResource;
    customers_payments: CustomersPaymentsResource;
    customers_mandates: CustomersMandatesResource;
    customers_subscriptions: CustomersSubscriptionsResource;
    orders: OrdersResource;
    orders_refunds: OrdersRefundsResource;
    orders_lines: OrdersLinesResource;
    orders_shipments: OrdersShipmentsResource;
}
/**
 * Create Mollie client.
 * @since 2.0.0
 */
export default function createMollieClient(options: MollieOptions): MollieClient;
export { createMollieClient };
export { ApiMode, Locale, PaymentMethod, HistoricPaymentMethod, SequenceType } from './types/global';
export { MandateMethod, MandateStatus } from './types/mandate/index';
export { MethodImageSize, MethodInclude } from './types/method/index';
export { OrderEmbed, OrderStatus } from './types/order/index';
export { OrderLineType } from './types/order/line/index';
export { PaymentEmbed, PaymentStatus } from './types/payment/index';
export { PaymentChargebackEmbed } from './types/payment/chargeback/index';
export { RefundEmbed, RefundStatus } from './types/refund/index';
export { SubscriptionStatus } from './types/subscription/index';
