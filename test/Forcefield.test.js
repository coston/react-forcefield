import React from 'react'
import Forcefield from '../src/Forcefield'

test('Render Table', () => {
  const wrapper = shallow(
    <Forcefield>
    <iframe
      src="http://oira.ua.edu/maps/ache/"
      style={{ border: '1px #eee solid' }}
      name="myiFrame"
      scrolling="no"
      height="800px"
      width="100%"
      allowFullScreen
    />
</Forcefield>
  )
  expect(wrapper).toMatchSnapshot()
})
