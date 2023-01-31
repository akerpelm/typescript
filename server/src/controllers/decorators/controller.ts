import 'reflect-metadata';
import express from 'express';

export const router = express.Router();

export function controller(routePrefix: string) {
  return function (target: Function) {
    //when applying to a class, target is constructor, not prototype.
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
