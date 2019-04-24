import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

describe('shows the child component', () => {
  const wrapped = shallow(<App />);
  it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });
  it('shows a comment List', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
  })
});


