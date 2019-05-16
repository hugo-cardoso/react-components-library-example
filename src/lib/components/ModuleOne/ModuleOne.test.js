import React from "react";
import ModuleOneComponent from "./ModuleOne.component";
import renderer from "react-test-renderer";

describe("TextInput", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<ModuleOneComponent title="Hugo"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
