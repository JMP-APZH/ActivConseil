import { render } from '@redwoodjs/testing/web'

import MesprestasPage from './MesprestasPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MesprestasPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MesprestasPage />)
    }).not.toThrow()
  })
})
