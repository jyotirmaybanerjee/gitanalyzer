import {shallow} from 'enzyme';
import GitHub from '../components';

describe('GitHub', () => {

  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }],
  };

  it('shows two elements', () => {
    const element = shallow(<GitHub { ...props } />);

    expect(element.find('.repos')).to.have.length(2);
  });

});
