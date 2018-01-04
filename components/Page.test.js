import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Page from './Page';

describe('Page', () => {
    let component;
    const testProps = {
        linkTo: '/owners',
        store: {
            lastUpdate: 0,
            light: false
        },
        title: 'Hola'
    };

    before(() => {
        component = shallow(<Page {...testProps} />);
    });

    it('should work, right? ', () => {
        debugger;
        expect(component).to.be.not.null;
    });
});
