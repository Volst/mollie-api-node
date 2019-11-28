import { ApiMode } from './types/global';
/**
 * Base model
 */
export default class Model {
    id: string;
    mode: ApiMode;
    resource: string;
    /**
     * Converts a model into a plain object
     *
     * @returns {Object}
     * @public ✓ This method is part of the public API
     */
    toPlainObject(): this;
}
