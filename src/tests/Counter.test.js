import Counter from '../components/Counter';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';

describe("Counter", () => {

  let container;

  beforeEach(() => {
    container = render(<Counter/>)
  });

  it('should start the counter at zero', () => {
    const counterh1 = container.getByTestId("counter")
    expect(counterh1.textContent).toEqual('0');
    
  });

  it("should increment counter on click", () => {
    const upButton = container.getByTestId("button-up") // gets hold of the button
    fireEvent.click(upButton) // that fire-event is clicking the button without physically clicking it
    const counterh1 = container.getByTestId("counter") // getting hold of h1 tag
    expect(counterh1.textContent).toEqual('1'); //testing the values 
    
   
    
  });

  it("should decrement counter on click", () => {
   const downButton = container.getByTestId("button-down")
   fireEvent.click(downButton)
   const counterh1 = container.getByTestId("counter")
   expect(counterh1.textContent).toEqual("-1");

  });

})