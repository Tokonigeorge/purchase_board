/**
 * @jest-environment jsdom
 */
import * as React from "react";

import renderer from "react-test-renderer";
import PaymentConfirmation from "../components/paymentConfirm/PaymentConfirmation";

describe("It renders Sucessfully", () => {
  test("eventHandler called on click", () => {
    const tree = renderer.create(<PaymentConfirmation />);
    //create a snapshot for the component
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
