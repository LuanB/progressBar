import testReducer from '../reducers'

const initialState = {
  buttons: [],
  bars: [],
  limit: 100,
  selectedBtn: {id:0},
  barsIsLoading: false,
  loading: false,
  error: ''
};

describe('reducer correct initial state', () => {

  it('should have initial state', () => {
    expect(testReducer()).toEqual(initialState);
  });

});
