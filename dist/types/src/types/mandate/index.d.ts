import { ApiMode, CardLabel, ILinks, IUrl } from '../global';
/**
 * Mandate Response object
 *
 * @see https://docs.mollie.com/reference/v2/mandates-api/get-mandate
 */
export interface IMandate {
    resource: string;
    id: string;
    mode: ApiMode;
    status: MandateStatus;
    method: MandateMethod;
    details: IMandateDetails;
    mandateReference: string;
    signatureDate: string;
    createdAt: string;
    _links: IMandateLinks;
    testmode?: boolean;
}
export interface IMandateLinks extends ILinks {
    customer: IUrl;
}
export declare type IMandateDetails = IMandateDetailsCreditCard | IMandateDetailsDirectDebit;
export interface IMandateDetailsDirectDebit {
    consumerName: string;
    consumerAccount: string;
    consumerBic: string;
}
export interface IMandateDetailsCreditCard {
    cardHolder: string;
    cardNumber: string;
    cardLabel: CardLabel;
    cardFingerprint: string;
    cardExpireDate: string;
}
export declare enum MandateMethod {
    directdebit = "directdebit",
    creditcard = "creditcard"
}
export declare enum MandateStatus {
    valid = "valid",
    invalid = "invalid",
    pending = "pending"
}
