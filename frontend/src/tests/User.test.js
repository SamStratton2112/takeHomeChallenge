import { render } from '@testing-library/react';
import User from '../components/User';

test('renders without crashing', () => {
  render(<User/>);
});