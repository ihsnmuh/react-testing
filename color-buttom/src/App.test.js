import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Button has correct initial color, and change the text', () => {
  render(<App/>)

  // find element with a role of button and text of "Change color to blue"
  const colorButton = screen.getByRole("button", {name: "Change color to blue"})

  // expect the color background to be red
  expect(colorButton).toHaveStyle({"background-color": "red"})

  // click button
  fireEvent.click(colorButton)

  // expect the color background to be blue
  expect(colorButton).toHaveStyle({"background-color": "blue"})

  // expect the text to be Change color to red
  expect(colorButton).toHaveTextContent('Change color to red')

});