import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("render without crashing", function(){
    render(<NewTodoForm />)
});

test("if it matches snapshot", function(){
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});
