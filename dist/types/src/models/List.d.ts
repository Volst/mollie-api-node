import Model from '../model';
import { ResourceCallback } from '../resource';
import { IListLinks } from '../types/global';
interface IInstantiable<T = any> {
    new (...args: Array<any>): T;
}
interface IResourceListParams {
    response: {
        _embedded: any;
        _links: IListLinks;
        count: number;
    };
    resourceName: string;
    params: any;
    getResources: Function;
    Model: IInstantiable<Model>;
    callback?: ResourceCallback;
}
/**
 * A list helper class
 */
export default class List<T> extends Array {
    links: IListLinks;
    count: number;
    nextPage: () => Promise<List<Model>>;
    previousPage: () => Promise<List<Model>>;
    nextPageCursor?: string;
    previousPageCursor?: string;
    static getNextPageParams(links: IListLinks): any;
    static getPreviousPageParams(links: IListLinks): any;
    static buildResourceList({ response, resourceName, params, callback, getResources, Model }: IResourceListParams): List<Model>;
}
export {};
