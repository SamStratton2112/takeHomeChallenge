import { render } from '@testing-library/react';
import AllRoutes from '../components/AllRoutes';

test('renders without crashing', () => {
  render(<AllRoutes/>);
});