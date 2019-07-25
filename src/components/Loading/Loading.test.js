// import React from 'react';
// import App from '../../App';
// import Loading from './Loading';
// import { mount, configure } from "enzyme";
// import toJSON from 'enzyme-to-json';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
// ​
// describe('Loading message', () => {
// ​
//   let mountedApp;
// ​
//   const loading = () => {
//     if (!mountedApp) {
//       mountedApp = mount(<Loading />);
//     }
//     return mountedApp;
//   }
// ​
//   it('Loading message renders', () => {
//     expect(loading().find(App).length).toBe(1);
//   })
// ​
//   it('Page state renders correctly', () => {
//     const state = loading().state()
//     expect(toJSON(state)).toMatchSnapshot()
//   })
// ​
//   it("always renders a `Navbar`", () => {
//     expect(app().find(Navbar).length).toBe(1);
//   });
// ​
//   it("this.state.status is set to 'loading' by default", () => {
//     console.log(loading().state().status)
//     expect(loading().state().status).toEqual('loading')
//   })
// });