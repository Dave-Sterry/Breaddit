import postListReducer from '../../reducers/post-list-reducer';


describe('postListReducer', () => {

  let action;

  const postData = {
    title: "All About Rye",
    body: "It's the best bread",
    votecount: 5,
    timestamp: "2/16/2021 2:28",
    id: 1
  }
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });
  
  test('Should add a post to our masterPostList', ()=> {
    const { title, body, votecount, timestamp, id } = postData;
    action ={
      type: 'ADD_POST',
      title,
      body,
      votecount,
      timestamp,
      id
    }
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title,
        body,
        votecount,
        timestamp,
        id
      }
    })
  });  
});