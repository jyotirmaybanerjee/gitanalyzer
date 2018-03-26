import React, {Fragment} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import FixedHeaderScroll from './FixedHeaderScroll';
import CheckBoxGrid from './CheckBoxGrid';
import FilteredGrid from './FilteredGrid';

export default () => (
    <Fragment>
        <h3>React Table examples</h3>
        <Tabs defaultActiveKey={2}>
            <Tab eventKey={1} title="Fixed header Scrollable grid ">
                <FixedHeaderScroll />
            </Tab>
            <Tab eventKey={2} title="Grid with checkbox">
                <CheckBoxGrid />
            </Tab>
            <Tab eventKey={3} title="Filtered Grid">
                <FilteredGrid />
            </Tab>
        </Tabs>
    </Fragment>);
