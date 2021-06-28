import { storage, logging } from "near-sdk-as";

@nearBindgen
export class Counter {
  private counter: i32 = 0;

  incrementCounter(value: i32): void {
    this.counter += value;
    logging.log("Counter is now: " + this.counter.toString());
  }

  decrementCounter(value: i32): void {
    this.counter -= value;
    logging.log("Counter is now: " + this.counter.toString());
  }

  getCounter(): i32 {
    return this.counter;
  }

  resetCounter(): void {
    this.counter = 0;
    logging.log("Counter is reset!");
  }
}

// --- contract code goes below

/*
export function incrementCounter(value: i32): void {
  const newCounter = storage.getPrimitive<i32>("counter", 0) + value;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function decrementCounter(value: i32): void {
  const newCounter = storage.getPrimitive<i32>("counter", 0) - value;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function getCounter(): i32 {
  return storage.getPrimitive<i32>("counter", 0);
}

export function resetCounter(): void {
  storage.set<i32>("counter", 0);
  logging.log("Counter is reset!");
}
*/