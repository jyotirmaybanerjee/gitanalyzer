import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import FixedHeaderScroll from './FixedHeaderScroll';
import CheckBoxGrid from './CheckBoxGrid';
import FilteredGrid from './FilteredGrid';

export default () => (
    <Row>
        <Col sm={12}>
            <FixedHeaderScroll />
        </Col>
        <Col sm={12}>
            <CheckBoxGrid />
        </Col>
        <Col sm={12}>
            <FilteredGrid />
        </Col>
    </Row>);
