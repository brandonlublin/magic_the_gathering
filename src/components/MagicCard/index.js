import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Card, Row, Col, CardTitle, Icon } from 'react-materialize';

const MagicCard = () => {
    return (
        <Row>
            <Col m={3} s={12}>
                <Card
                actions={[
                    <a key="1" href="#">This is a Link</a>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
                >
                Here is the standard card with an image thumbnail.
                </Card>
            </Col>
        </Row>
    )
}

export default MagicCard;