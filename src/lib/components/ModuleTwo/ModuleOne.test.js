import React from "react";
import ModuleTwoComponent from "./ModuleTwo.component";
import renderer from "react-test-renderer";

describe("TextInput", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<ModuleTwoComponent title="Two"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
