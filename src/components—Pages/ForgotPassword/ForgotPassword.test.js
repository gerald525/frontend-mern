import React from "react";
import Enzyme, { shallow } from "enzyme";
import ForgotPassword from "./ForgotPassword"

it('renders correctly', () => {
    const wrapper = shallow(
        <ForgotPassword />
    );
    expect(wrapper).toMatchSnapshot();
});