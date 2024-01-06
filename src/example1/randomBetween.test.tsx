import { randomBetween } from "./randomBetween";

const randomSpy = vi.spyOn(Math, "random");
// 監聽 Math.random

describe("randomBetween", () => {
  describe("when Math.random() return 0", () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0);
      // 先設置 Math.random 會返回 0
      // 如果不加上 mockClear() 這樣測試會報錯 expected "random" to be called 1 times, but got 2 times
    });
    it("called with min=3 and max=5 return 3", () => {
      expect(randomBetween(3, 5)).toBe(3);
      //expect(Math.random).toHaveBeenCalledTimes(1);

      expect(randomSpy).toHaveBeenCalled();
      //和上面結果是一樣的
    });
    // it should be same result, it will pass
    //afterEach(() => {
    //  vi.resetAllMocks();
    //});
  });

  describe("when Math.random() return 0.5", () => {
    beforeEach(() => {
      // it should be same as mockClear() result, it will pass
      vi.resetAllMocks();
      randomSpy.mockReturnValue(0.5);
    });
    it("called with min=3 and max=5 return 4", () => {
      expect(randomBetween(3, 5)).toBe(4);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
  describe("when Math.random() return 0.9999", () => {
    beforeEach(() => {
      randomSpy.mockClear().mockImplementation(() => 0.9999);
      // mockImplementation 跟 mockReturnValue 會是一樣的
    });
    it("called with min=3 and max=5 return 5", () => {
      expect(randomBetween(3, 5)).toBe(5);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
});
