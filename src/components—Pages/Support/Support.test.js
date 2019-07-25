import React from "react";
import Enzyme, { shallow } from "enzyme";
import Support from "./Support";

it('renders correctly', () => {
    const wrapper = shallow(
        <Support />
    );
    expect(wrapper).toMatchSnapshot();
});