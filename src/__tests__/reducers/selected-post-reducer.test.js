import selectedPostReducer from '../../reducers/selected-post-reducer';

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
  test('Should return selected Post when SELECT_POST is called', () =>{
    action = {
      type: 'SELECT_POST',
      post
    }
    expect(selectedPostReducer({}, action)).toEqual(post)
      
  });
});
