import * as a from './../../actions';

describe('breaddit actions', () => {
  it('DELETE_POST should create DELETE_POST action', () => {
    expect(a.deletePost(1)).toEqual({
      type: 'DELETE_POST',
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', ()=>{
    expect(a.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
});