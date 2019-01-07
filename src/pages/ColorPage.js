import Page from 'components/Page';
import Typography from 'components/Typography';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

const ColorPage = () => {
  return (
    <Page
        title="Typography"
        breadcrumbs={[{ name: 'typography', active: true }]}>
        <Row>
            <Col>
                <Card>
                    <CardHeader>TORQUOISE</CardHeader>
                    <CardBody>
                        <Typography>#1abc9c</Typography>
                        <Typography>rgb(26, 188, 156)</Typography>
                        <Typography>hsl(168, 76%, 42%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card>
                    <CardHeader>EMERALD</CardHeader>
                    <CardBody>
                        <Typography>#2ecc71</Typography>
                        <Typography>rgb(46, 204, 113)</Typography>
                        <Typography>hsl(145, 63%, 49%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card>
                    <CardHeader>BLUE GRAY</CardHeader>
                    <CardBody>
                        <Typography>#607d8b</Typography>
                        <Typography>rgb(96, 125, 139)</Typography>
                        <Typography>hsl(200, 18%, 46%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card>
                    <CardHeader>DEEP ORANGE</CardHeader>
                    <CardBody>
                        <Typography>#ff5722</Typography>
                        <Typography>rgb(255, 87, 34)</Typography>
                        <Typography>hsl(14, 100%, 57%)</Typography>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Page>
  );
};

export default ColorPage;
