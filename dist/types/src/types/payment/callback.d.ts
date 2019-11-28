import { IPayment } from '../payment';
import { IList } from '../list';
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type CreateCallback = (err: any, payment?: IPayment) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type GetCallback = (err: any, payment?: IPayment) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type ListCallback = (err: any, payments?: IList<IPayment>) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type UpdateCallback = (err: any, payment?: IPayment) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type CancelCallback = (err: any, payment?: IPayment) => void;
