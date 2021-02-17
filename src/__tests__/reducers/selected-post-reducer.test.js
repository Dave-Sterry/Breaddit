import selectedPostReducer from '../../reducers/selected-post-reducer';

describe('selectedPostReducer', () => {
  // let action;

  // const postData 
  test('Should return default state if no type is recognized', ()=> {
    expect(selectedPostReducer({}, {type:null})).toEqual({});
  });
});
