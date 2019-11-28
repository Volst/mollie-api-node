import { ICustomer } from '../customer';
import { IList } from '../list';
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type CreateCallback = (error: any, customer?: ICustomer) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type GetCallback = (error: any, customer?: ICustomer) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type UpdateCallback = (error: any, customer?: ICustomer) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type DeleteCallback = (error: any, success?: boolean) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type ListCallback = (error: any, customers?: IList<ICustomer>) => void;
