import {
  getCounter,
  resetCounter,
  incrementCounter,
  decrementCounter
} from '../index';

import { context, storage, VM } from 'near-sdk-as';

describe("Counter ", () => {
  it("should increment by one", () => {
      incrementCounter(1);
      expect(getCounter()).toBe(1, "counter should be one after a single increment.");
  });
});