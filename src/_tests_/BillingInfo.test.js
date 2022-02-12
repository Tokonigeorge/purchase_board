/**
 * @jest-environment jsdom
 */
import * as React from "react";

import renderer from "react-test-renderer";
import BillingInfo from "../components/billingInfo/BillingInfo";

describe("It renders Sucessfully", () => {
  test("eventHandler called on click", () => {
    const tree = renderer.create(<BillingInfo />);
    //create a snapshot for the component
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
