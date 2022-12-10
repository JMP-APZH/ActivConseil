import { render } from '@redwoodjs/testing/web'

import AproposPage from './AproposPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AproposPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AproposPage />)
    }).not.toThrow()
  })
})
