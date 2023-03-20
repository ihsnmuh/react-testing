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

  // expect the text to be 'Change color to red'
  expect(colorButton).toHaveTextContent('Change color to red')

});

test("initial condition", () => {
  render(<App/>)

  // check the button starts out enable
  const colorButton = screen.getByRole("button", {name: "Change color to blue"})
  expect(colorButton).toBeEnabled()

  // check the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox")
  expect(checkBox).not.toBeChecked()
})

test("Checkbox disables botton on first click and enable on second click", () => {
  render(<App/>)

  // check the button starts out enable
  const colorButton = screen.getByRole("button", {name: "Change color to blue"})
  expect(colorButton).toBeEnabled()

  // check the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox")
  expect(checkBox).not.toBeChecked()

  fireEvent.click(checkBox)

  // check the checkbox starts out checked
  expect(checkBox).toBeChecked()

  // check the checkbox start out disable
  expect(colorButton).toBeDisabled()

})