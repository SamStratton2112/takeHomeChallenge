import { render } from '@testing-library/react';
import Admin from '../components/Admin';

test('renders without crashing', () => {
  render(<Admin/>);
});