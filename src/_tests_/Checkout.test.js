/**
 * @jest-environment jsdom
 */
import * as React from "react";

import renderer from "react-test-renderer";
import Checkout from "../components/billingInfo/Checkout";
import { checkoutData } from "../utils/checkoutData";

describe("It renders Sucessfully", () => {
  test("eventHandler called on click", () => {
    const tree = renderer.create(<Checkout checkoutData={checkoutData} />);
    //create a snapshot for the component
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
