import React, {Fragment} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import HigMaps from './HigMaps';
import Highstock from './Highstock';
import SimpleHighChart from './SimpleHighChart';
import HighchartMore from './HighchartMore';

export default () => (
    <Fragment>
        <h3>React Table examples</h3>
        <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="HighMaps">
                <HigMaps />
            </Tab>
            <Tab eventKey={2} title="Highstock">
                <Highstock />
            </Tab>
            <Tab eventKey={3} title="SimpleHighChart">
                <SimpleHighChart />
            </Tab>
            <Tab eventKey={4} title="HighchartMore">
                <HighchartMore />
            </Tab>
        </Tabs>
    </Fragment>);
