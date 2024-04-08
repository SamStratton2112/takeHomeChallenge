import { render, } from '@testing-library/react';
import NavigationBar from '../components/NavigationBar';

describe("<Navigation/>", ()=>{
  test('Navigation should have two three links', () => {
    render(<NavigationBar/>);
});})

