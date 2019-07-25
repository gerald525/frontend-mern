import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Profile from './Profile';

it('renders correctly', () => {
    const wrapper = shallow(
        <Profile />
    );
    expect(wrapper.exists()).toBe(true);
    // const demoComponent = enzyme.mount(<Demo {...dummy_props}/>);
    // expect(demoComponent.props().jsonpayload).toBeUndefined();
});