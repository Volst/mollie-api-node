import { IMandate } from '../mandate';
import { IList } from '../list';
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type CreateCallback = (error: any, mandate?: IMandate) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type GetCallback = (error: any, mandate?: IMandate) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type ListCallback = (error: any, mandates?: IList<IMandate>) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type RevokeCallback = (error: any, success?: boolean) => void;
