import React from 'react';
import axios from 'axios';


import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


import * as actions from '../actions/index.js'
import * as types from '../actions/types.js'



const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);





describe('actions', () => {
    it('should create an action to set id', () => {
        const expectedAction = {type:SELECTED_PROGRESSBAR, payload: {
          id:1
        }};

        expect(actions.SelectedProgressBar(1)).toEqual(expectedAction);
    });
});





//
//
// describe('Actions Testing', () => {
//
//   beforeEach(function () {
//      moxios.install();
//    });
//
//    afterEach(function () {
//      moxios.uninstall();
//    });
//
//
//
//
// let store;
// beforeEach(() => {
//    store = mockStore({"buttons": [26,5,-30,-8] "bars": [31,48],"limit": 180});
//  });
//
//   it('should create an action', () => {
//
//     var mock = new MockAdapter(axios);
//     const data = {"buttons": [26,5,-30,-8] "bars": [31,48],"limit": 180};
//
//  mock.onGet('http://pb-api.herokuapp.com/bars').reply(200, data);
//
//
//
//     const BarId = 1;
//     const expectedAction = {
//       dispatch({
//         type: FETCH_PROGRESSBARSAPIDATA,
//         payload: {
//           buttons: [26,5,-30,-8],
//           bars: [31,48],
//           limit: 180
//         } } )
//     }
//
//     expect(actions.fetchProgressBarsAPIData()).toEqual(expectedAction)
//
//
//   });
// });
