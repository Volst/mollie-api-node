import Model from '../model';
import { ICapture } from '../types/payment/capture';

/**
 * The `Capture` model
 *
 * {@link ICapture}
 */
export default class Capture extends Model implements ICapture {
  public static resourcePrefix = 'cpt_';

  public resource = 'capture';
  public id = null;
  public mode = null;
  public amount = null;
  public settlementAmount = null;
  public paymentId = null;
  public createdAt = null;
  public _links = {
    self: null,
    payment: null,
    shipment: null,
    settlement: null,
    documentation: null,
  };
  public shipmentId = null;
  public settlementId = null;

  /**
   * Capture constructor
   *
   * @public ✓ This constructor is part of the public API
   */
  public constructor(props?: Partial<ICapture>) {
    super();

    Object.assign(this, props);
  }
}
