import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// // Set the default serializer for Jest to be the from enzyme-to-json
// // This produces an easier to read (for humans) serialized format.
// expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

Enzyme.configure({ adapter: new Adapter() });