/**
 * @since 3.0.0
 */
export default class NotImplementedError extends Error {
    apiName: string;
    constructor(message: any, apiName: any);
}
