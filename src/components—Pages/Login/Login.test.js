
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Login from './Login';

// describe('<Login /> rendering', () => {


//     // it("renders input for email", () => {
//     //     const wrapper = render(
//     //         <Login  />
//     //     );
//     //     const element = wrapper.find("#email");
    
//     //     expect(element.length).toEqual(1);
//     //     expect(element[0].attribs['name']).toEqual('email');
//     // }); 

//     it("renders input for password", () => {
//         const wrapper = render(
//             <Login  />
//         );
//         const element = wrapper.find("#password");
//         expect(element.length).toEqual(1);
//         expect(element[0].attribs['password']).toEqual('password');
//     }); 
// });


it('renders correctly', () => {
    const wrapper = shallow(
        <Login />
    );
    expect(wrapper).toMatchSnapshot();
});