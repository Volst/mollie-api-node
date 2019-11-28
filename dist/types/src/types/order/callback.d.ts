import { IOrder } from '../order';
import { IList } from '../list';
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type CreateCallback = (error: any, order?: IOrder) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type GetCallback = (error: any, order?: IOrder) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type ListCallback = (error: any, orders?: IList<IOrder>) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type UpdateCallback = (error: any, order?: IOrder) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type CancelCallback = (error: any, order?: IOrder) => void;
