import React from "react";
import Enzyme, { shallow } from "enzyme";
import ProfileEdit from './ProfileEdit';

it('renders correctly', () => {
    const wrapper = shallow(
        <ProfileEdit />
    );
    expect(wrapper).toMatchSnapshot();
});