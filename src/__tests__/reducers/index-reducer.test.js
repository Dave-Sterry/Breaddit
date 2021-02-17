import rootReducer from '../../reducers/index';
import * as c from '../../actions/ActionTypes';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);

describe ('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null})).toEqual({
      masterPostList: {},
      formVisibleOnPage: false
    });
  });
  test('Check that initial state of postListReducers matches root reducer', ()=> {
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, { type: null }));
  });
  test('Check that initial state of formVisibleReducer matches root reducer', ()=>{
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_POST works for postListReducer, rootReducer', () => {
    const action ={
      type: c.ADD_POST,
      title: "All About Rye",
      body: "It's the best bread",
      votecount: 5,
      timestamp: "2/16/2021 2:2",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM works for formVisibleReducer, rootReducer', ()=>{
    const action ={
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});