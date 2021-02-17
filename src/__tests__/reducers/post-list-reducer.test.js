import postListReducer from '../../reducers/post-list-reducer';
import * as c from '../../actions/ActionTypes';
import * as a from '../../actions';


describe('postListReducer', () => {

  let action;

  const postData = {
    title: "All About Rye",
    body: "It's the best bread",
    votecount: 5,
    timestamp: "2/16/2021 2:2",
    id: 1
  }
  
  const currentState ={
    1:{
      title: "All About Rye",
    body: "It's the best bread",
    votecount: 5,
    timestamp: "2/16/2021 2:2",
    id: 1
    },
    2:{
    title: "SourDough Time",
    body: "It's a good bread",
    votecount: 4,
    timestamp: "2/16/2021 2:30",
    id: 2
    }
  }

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });
  
  test('Should add a post to our masterPostList', ()=> {
    const { title, body, votecount, timestamp, id } = postData;
    action ={
      type: c.ADD_POST,
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

  test('Should delete a post',() =>{
    action = a.deletePost(1)
    expect(postListReducer(currentState, action)).toEqual({
      2:{
        title: "SourDough Time",
        body: "It's a good bread",
        votecount: 4,
        timestamp: "2/16/2021 2:30",
        id: 2
        }
    })
  })
});