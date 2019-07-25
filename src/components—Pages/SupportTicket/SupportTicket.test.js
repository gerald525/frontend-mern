import React from "react";
import Enzyme, { shallow } from "enzyme";
import SupportRequest from "././SupportTicket";

it('renders correctly', () => {
    const wrapper = shallow(
        <SupportRequest />
    );
    expect(wrapper).toMatchSnapshot();
});