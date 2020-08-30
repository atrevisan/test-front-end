import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Grid from "./Grid";

configure({ adapter: new Adapter() });

describe("<Grid />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Grid filterData={
      [
        {
          name: "salary",
          value: "",
          placeholder: "user salary",
        }
      ]
    }/>);
  });

  it("should render <input /> filter controls for each filterData Prop", () => {
    expect(wrapper.contains(<input />));
  });
});
