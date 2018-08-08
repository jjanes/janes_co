import React from 'react';
import './App.css';
import Modal from './Component/Modal/Modal'
import { Button, Grid, Row, Col } from 'react-bootstrap';

import {
    BrowserRouter as Router, Route, Link
} from 'react-router-dom'

const BasicExample = () => (
    <Grid>
        <Row className="show-grid">
            <Col xs={12}>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Modal>test test test test</Modal></li>

                        </ul>
                        <hr/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/blog/:slug" component={Blog}/>
                    </div>
                </Router>
            </Col>
        </Row>
    </Grid>
);
const Projects = ({}) => (
    <div>test</div>
);
const Blog = ({ match }) => (
    <div>
        <h1>Blog</h1>

        {JSON.stringify(match)}

    </div>
);
const Home = ({}) => (
    <div> home </div>
);

export default BasicExample