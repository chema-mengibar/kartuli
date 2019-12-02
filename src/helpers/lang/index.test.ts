import {lang} from '.';

describe('Language function', () => {

  it('should return a string', () => {
    const title = lang('title')
    expect(title).not.toEqual('')
  })

  it('should return a dummy string', () => {
    const dummy = lang('dummy')
    expect(dummy).toEqual('Dummy en');
  })

})