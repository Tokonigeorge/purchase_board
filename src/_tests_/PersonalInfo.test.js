/**
 * @jest-environment jsdom
 */
import * as React from "react";
import renderer from "react-test-renderer"
import PersonalInfo from "../components/personalInfo/PersonalInfo";

describe("It renders Sucessfully", () => {
  test("eventHandler called on click", () => {
    const tree = renderer.create(<PersonalInfo />);
    //create a snapshot for the component
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
