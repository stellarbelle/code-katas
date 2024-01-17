import { chop, chop2, chop3, chop4 } from "./karate-chop.js";

test("test_chop", () => {
  expect(chop(3, [])).toBe(-1);
  expect(chop(3, [1])).toBe(-1);
  expect(chop(1, [1])).toBe(0);
  expect(chop(1, [1, 3, 5])).toBe(0);
  expect(chop(3, [1, 3, 5])).toBe(1);
  expect(chop(5, [1, 3, 5])).toBe(2);
  expect(chop(0, [1, 3, 5])).toBe(-1);
  expect(chop(2, [1, 3, 5])).toBe(-1);
  expect(chop(4, [1, 3, 5])).toBe(-1);
  expect(chop(6, [1, 3, 5])).toBe(-1);
  expect(chop(1, [1, 3, 5, 7])).toBe(0);
  expect(chop(3, [1, 3, 5, 7])).toBe(1);
  expect(chop(5, [1, 3, 5, 7])).toBe(2);
  expect(chop(7, [1, 3, 5, 7])).toBe(3);
  expect(chop(0, [1, 3, 5, 7])).toBe(-1);
  expect(chop(2, [1, 3, 5, 7])).toBe(-1);
  expect(chop(4, [1, 3, 5, 7])).toBe(-1);
  expect(chop(6, [1, 3, 5, 7])).toBe(-1);
  expect(chop(8, [1, 3, 5, 7])).toBe(-1);
});

test("test_chop2", () => {
  expect(chop2(3, [])).toBe(-1);
  expect(chop2(3, [1])).toBe(-1);
  expect(chop2(1, [1])).toBe(0);
  expect(chop2(1, [1, 3, 5])).toBe(0);
  expect(chop2(3, [1, 3, 5])).toBe(1);
  expect(chop2(5, [1, 3, 5])).toBe(2);
  expect(chop2(0, [1, 3, 5])).toBe(-1);
  expect(chop2(2, [1, 3, 5])).toBe(-1);
  expect(chop2(4, [1, 3, 5])).toBe(-1);
  expect(chop2(6, [1, 3, 5])).toBe(-1);
  expect(chop2(1, [1, 3, 5, 7])).toBe(0);
  expect(chop2(3, [1, 3, 5, 7])).toBe(1);
  expect(chop2(5, [1, 3, 5, 7])).toBe(2);
  expect(chop2(7, [1, 3, 5, 7])).toBe(3);
  expect(chop2(0, [1, 3, 5, 7])).toBe(-1);
  expect(chop2(2, [1, 3, 5, 7])).toBe(-1);
  expect(chop2(4, [1, 3, 5, 7])).toBe(-1);
  expect(chop2(6, [1, 3, 5, 7])).toBe(-1);
  expect(chop2(8, [1, 3, 5, 7])).toBe(-1);
});

test("test_chop3", () => {
  expect(chop3(3, [])).toBe(-1);
  expect(chop3(3, [1])).toBe(-1);
  expect(chop3(1, [1])).toBe(0);
  expect(chop3(1, [1, 3, 5])).toBe(0);
  expect(chop3(3, [1, 3, 5])).toBe(1);
  expect(chop3(5, [1, 3, 5])).toBe(2);
  expect(chop3(0, [1, 3, 5])).toBe(-1);
  expect(chop3(2, [1, 3, 5])).toBe(-1);
  expect(chop3(4, [1, 3, 5])).toBe(-1);
  expect(chop3(6, [1, 3, 5])).toBe(-1);
  expect(chop3(1, [1, 3, 5, 7])).toBe(0);
  expect(chop3(3, [1, 3, 5, 7])).toBe(1);
  expect(chop3(5, [1, 3, 5, 7])).toBe(2);
  expect(chop3(7, [1, 3, 5, 7])).toBe(3);
  expect(chop3(0, [1, 3, 5, 7])).toBe(-1);
  expect(chop3(2, [1, 3, 5, 7])).toBe(-1);
  expect(chop3(4, [1, 3, 5, 7])).toBe(-1);
  expect(chop3(6, [1, 3, 5, 7])).toBe(-1);
  expect(chop3(8, [1, 3, 5, 7])).toBe(-1);
});

test("test_chop4", () => {
  expect(chop4(3, [])).toBe(-1);
  expect(chop4(3, [1])).toBe(-1);
  expect(chop4(1, [1])).toBe(0);
  expect(chop4(1, [1, 3, 5])).toBe(0);
  expect(chop4(3, [1, 3, 5])).toBe(1);
  expect(chop4(5, [1, 3, 5])).toBe(2);
  expect(chop4(0, [1, 3, 5])).toBe(-1);
  expect(chop4(2, [1, 3, 5])).toBe(-1);
  expect(chop4(4, [1, 3, 5])).toBe(-1);
  expect(chop4(6, [1, 3, 5])).toBe(-1);
  expect(chop4(1, [1, 3, 5, 7])).toBe(0);
  expect(chop4(3, [1, 3, 5, 7])).toBe(1);
  expect(chop4(5, [1, 3, 5, 7])).toBe(2);
  expect(chop4(7, [1, 3, 5, 7])).toBe(3);
  expect(chop4(0, [1, 3, 5, 7])).toBe(-1);
  expect(chop4(2, [1, 3, 5, 7])).toBe(-1);
  expect(chop4(4, [1, 3, 5, 7])).toBe(-1);
  expect(chop4(6, [1, 3, 5, 7])).toBe(-1);
  expect(chop4(8, [1, 3, 5, 7])).toBe(-1);
});
