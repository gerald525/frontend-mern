import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from './components/Login/Login';
import App from './App';

// describe('Test case for testing login', () => {
//     const wrapper;

//     test('username check', () => {
//         wrapper = shallow(<Login />);
//     }

//     wrapper.find('input[type="text"]');
//     //.simulate('change'), {target: {name: 'username', value: 'xxx'}});

//     expect(wrapper.state('username')).toEqual('xxx');

// })

it('renders correctly', () => {
    const wrapper = shallow(
        <App />
    );
    expect(wrapper).toMatchSnapshot();
});
