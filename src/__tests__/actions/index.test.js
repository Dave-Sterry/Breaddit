import * as a from './../../actions';

describe('breaddit actions', () => {
  it('DELETE_POST should create DELETE_POST action', () => {
      expect(a.deletePost(1)).toEqual({
        type: 'DELETE_POST',
        id: 1
      });
  });
});