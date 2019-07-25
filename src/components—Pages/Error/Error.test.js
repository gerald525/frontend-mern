import React from "react";
import Enzyme, { shallow } from "enzyme";
import ErrorScreen from "./Error"

it('renders correctly', () => {
    const wrapper = shallow(
        <ErrorScreen />
    );
    expect(wrapper).toMatchSnapshot();
});