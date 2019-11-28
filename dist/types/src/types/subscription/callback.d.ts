import { IList } from '../list';
import { ISubscription } from '../subscription';
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type CreateCallback = (error: any, subscription?: ISubscription) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type GetCallback = (error: any, subscription?: ISubscription) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type ListCallback = (error: any, subscriptions?: IList<ISubscription>) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type UpdateCallback = (error: any, subscription?: ISubscription) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type CancelCallback = (error: any, success?: boolean) => void;
