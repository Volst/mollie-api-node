import { IShipment } from './index';
import { IList } from '../list';
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type CreateCallback = (error: any, shipment?: IShipment) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type GetCallback = (error: any, shipment?: IShipment) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type ListCallback = (error: any, shipments?: IList<IShipment>) => void;
/**
 * @deprecated since 3.0.0 - All callbacks will be removed in a future version
 */
export declare type UpdateCallback = (error: any, shipment?: IShipment) => void;
