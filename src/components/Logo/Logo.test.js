import React from "react";
import Enzyme, { shallow } from "enzyme";
import Logo from "./Logo"

it('renders correctly', () => {
    const wrapper = shallow(
        <Logo />
    );
    expect(wrapper).toMatchSnapshot();
});