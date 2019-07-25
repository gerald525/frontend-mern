import React from "react";
import Enzyme, { shallow } from "enzyme";
import ProgramDashboard from "./ProgramDashboard";

it('renders correctly', () => {
    const wrapper = shallow(
        <ProgramDashboard />
    );
    expect(wrapper).toMatchSnapshot();
});