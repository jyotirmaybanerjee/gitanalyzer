import {shallow} from 'enzyme';
import GitHub from '../components';

describe('GitHub', () => {

  const props = {
      userDetails: {},
      username: 'jyotirmaybanerjee',
      followers: [],
      following: [],
      repos: [],
      doFetchUserDetails: () => {}
  };

  it('shows two elements', () => {
    const element = shallow(<GitHub { ...props } />);

    expect(element.find('.profile-usertitle')).to.have.length(1);
    expect(element.find('.profile-usertitle-name')).to.have.length(1);
    expect(element.find('.profile-usertitle-job')).to.have.length(1);
    expect(element.find('.profile-content')).to.have.length(1);
  });

});

describe('Dummy', () => {
    it('shows two elements', () => {
        const element = shallow(<ul><li className="repos">a</li><li className="repos">b</li></ul>);

        expect(element.find('.repos')).to.have.length(2);
    });

});
