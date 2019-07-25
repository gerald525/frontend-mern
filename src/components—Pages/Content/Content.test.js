import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Content from "./Content";

it('renders correctly', () => {
    const wrapper = shallow(
        <Content />
    );
    // expect(wrapper.exists()).toBe(true);
    const demoComponent = enzyme.mount(<Demo {...dummy_props}/>);
    expect(demoComponent.props().jsonpayload).toBeUndefined();
});