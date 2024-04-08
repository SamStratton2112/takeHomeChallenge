import React from 'react';
import { render } from '@testing-library/react';
import UserContext from '../UserContext';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';

describe("<App/>", ()=>{
  it('should render welcome page without crashing', () => {
    const testContext = [{
        "id": 1, 
        "email": "test@getyodlr.com", 
        "firstName": "testUserFirst", 
        "lastName": "testUserLast", 
        "state": "active"
      },{
        "id": 2, 
        "email": "test2@getyodlr.com", 
        "firstName": "test2UserFirst", 
        "lastName": "test2UserLast", 
        "state": "pending"
      }]


      render(
      <MemoryRouter initialEntries={['/']}>
      <UserContext.Provider value={testContext}>
        <App />
      </UserContext.Provider>
     </MemoryRouter>
    );
  });
})
