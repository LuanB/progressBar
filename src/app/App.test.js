import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from './App';


const mockStore = configureMockStore();
const store = mockStore({"buttons": [
45,
43,
-47,
-19
],
"bars": [
18,
63
],
"limit": 130});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(

 <Provider store={store}>
    <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
