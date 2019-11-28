import Model from '../model';
import { IMethod, MethodImageSize } from '../types/method';
/**
 * The `Method` model
 *
 * {@link IMethod}
 */
export default class Method extends Model implements IMethod {
    resource: string;
    id: any;
    description: any;
    image: {
        size1x: any;
        size2x: any;
        svg: any;
    };
    _links: {
        self: any;
        documentation: any;
    };
    /**
     * Method constructor
     *
     * @public ✓ This method is part of the public API
     */
    constructor(props?: Partial<IMethod>);
    /**
     * Method image URL
     *
     * @param size
     *
     * @returns Url string
     *
     * @since 2.0.0
     * @since 3.0.0 SVG support
     *
     * @public ✓ This method is part of the public API
     */
    getImage(size?: MethodImageSize | '1x' | '2x'): string;
}
