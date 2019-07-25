import React from "react";
import Enzyme, { shallow } from "enzyme";
import Navbar from "./Navbar"

it('renders correctly', () => {
    const wrapper = shallow(
        <Navbar />
    );
    expect(wrapper).toMatchSnapshot();
});