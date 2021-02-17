import selectedPostReducer from '../../reducers/selected-post-reducer';
import * as a from '../../actions';

describe('selectedPostReducer', () => {
  let action;

  const post = {
    title: "All About Rye",
    body: "It's the best bread",
    votecount: 5,
    timestamp: "2/16/2021 2:2",
    id: 1
  }

  test('Should return default state if no type is recognized', ()=> {
    expect(selectedPostReducer({}, {type:null})).toEqual({});
  });

  test('Should return selected Post when SELECT_POST is called', () => {
    const action = a.selectPost(post);
    expect(selectedPostReducer({}, action)).toEqual(post);
  });

  test('Should return null when DESELECT_POST is called', () => {
    action = a.deselectPost();
    expect(selectedPostReducer({}, action)).toEqual(null);
  }); 
});
