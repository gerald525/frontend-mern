import React from "react";
import Enzyme, { shallow } from "enzyme";
import ProjectDashboard from "./ProjectDashboard";

it('renders correctly', () => {
    const wrapper = shallow(
        <ProjectDashboard />
    );
    expect(wrapper).toMatchSnapshot();
});