import React from 'react'
import renderer from 'react-test-renderer'
import TestComponent from './fake/TestComponent'

test('withState should wrap', () => {
  const component = renderer.create(<TestComponent />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})