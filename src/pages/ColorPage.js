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
                <Card style={{backgroundColor: '#1abc9c' }}>
                    <CardHeader>TORQUOISE</CardHeader>
                    <CardBody>
                        <Typography>#1abc9c</Typography>
                        <Typography>rgb(26, 188, 156)</Typography>
                        <Typography>hsl(168, 76%, 42%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#2ecc71' }}>
                    <CardHeader>EMERALD</CardHeader>
                    <CardBody>
                        <Typography>#2ecc71</Typography>
                        <Typography>rgb(46, 204, 113)</Typography>
                        <Typography>hsl(145, 63%, 49%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#607d8b' }}>
                    <CardHeader>BLUE GRAY</CardHeader>
                    <CardBody>
                        <Typography>#607d8b</Typography>
                        <Typography>rgb(96, 125, 139)</Typography>
                        <Typography>hsl(200, 18%, 46%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#ff5722' }}>
                    <CardHeader>DEEP ORANGE</CardHeader>
                    <CardBody>
                        <Typography>#ff5722</Typography>
                        <Typography>rgb(255, 87, 34)</Typography>
                        <Typography>hsl(14, 100%, 57%)</Typography>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card style={{backgroundColor: '#cddc39' }}>
                    <CardHeader>LIME</CardHeader>
                    <CardBody>
                        <Typography>#cddc39</Typography>
                        <Typography>rgb(205, 220, 57)</Typography>
                        <Typography>hsl(66, 70%, 54%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#a2c0cc' }}>
                    <CardHeader>#A2C0CC</CardHeader>
                    <CardBody>
                        <Typography>#a2c0cc</Typography>
                        <Typography>rgb(162, 192, 204)</Typography>
                        <Typography>hsl(197, 29%, 72%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#009688' }}>
                    <CardHeader>TEAL</CardHeader>
                    <CardBody>
                        <Typography>#009688</Typography>
                        <Typography>rgb(0, 150, 136)</Typography>
                        <Typography>hsl(174, 100%, 29%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#bfbebe' }}>
                    <CardHeader>#BFBEBE</CardHeader>
                    <CardBody>
                        <Typography>#bfbebe</Typography>
                        <Typography>rgb(255, 235, 59)</Typography>
                        <Typography>hsl(54, 100%, 62%)</Typography>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card style={{backgroundColor: '#fba4b4' }}>
                    <CardHeader>#FBA4B4</CardHeader>
                    <CardBody>
                        <Typography>#fba4b4</Typography>
                        <Typography>rgb(251, 164, 180)</Typography>
                        <Typography>hsl(349, 92%, 81%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#ffd54f' }}>
                    <CardHeader>#FFD54F</CardHeader>
                    <CardBody>
                        <Typography>#ffd54f</Typography>
                        <Typography>rgb(255, 213, 79)</Typography>
                        <Typography>hsl(46, 100%, 65%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#ff5e00' }}>
                    <CardHeader>#FF5E00</CardHeader>
                    <CardBody>
                        <Typography>#ff5e00</Typography>
                        <Typography>rgb(255, 94, 0)</Typography>
                        <Typography>hsl(22, 100%, 50%)</Typography>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#ffeb3b' }}>
                    <CardHeader>YELLOW</CardHeader>
                    <CardBody>
                        <Typography>#ffeb3b</Typography>
                        <Typography>rgb(249, 249, 249)</Typography>
                        <Typography>hsl(0, 0%, 98%)</Typography>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Page>
  );
};

export default ColorPage;
