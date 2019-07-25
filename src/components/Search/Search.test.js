import React from "react";
import Enzyme, { shallow } from "enzyme";
import Search from "./Search";

it('renders correctly', () => {
    const wrapper = shallow(
        <Search />
    );
    expect(wrapper).toMatchSnapshot();
});