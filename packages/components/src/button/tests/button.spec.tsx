import { mount } from "@vue/test-utils";
import { test, expect, describe } from "@jest/globals";
import { Button } from "..";

describe("Button Test", () => {
  test("Button render", () => {
    const warpper = mount(Button);
    expect(warpper.isVueInstance()).toBe(true);
  });
});
