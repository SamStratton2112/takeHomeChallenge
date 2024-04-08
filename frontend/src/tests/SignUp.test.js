import { render } from '@testing-library/react';
import SignUp from '../components/SignUp';

test('renders without crashing', () => {
  render(<SignUp/>);
});