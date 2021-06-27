import { hello_near } from '..';

describe("example", () => {
  it("should return hello near", () => {
    expect(hello_near()).toStrictEqual("hello near");
  })
});
