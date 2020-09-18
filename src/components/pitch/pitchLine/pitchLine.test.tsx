import React from 'react';
import PitchLine from './';
import { render } from '@testing-library/react';

describe('Menu Component', () => {
  it('should render properly', () => {
    const subject = render(<h1>vzv</h1>);
    //<PitchLine startingPos={0} positions={[]} />
    const tree = subject.container;
    expect(tree).toMatchSnapshot();
  });
});
