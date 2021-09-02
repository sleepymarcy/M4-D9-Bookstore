import React from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from "react-bootstrap"

class Latest extends React.Component {

    state = {
        searchQuery: ''
    }

    render() {
        return (
            <>
                {
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Search your favourite book</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="..."
                                        value={this.state.searchQuery}
                                        onChange={e => this.setState({ searchQuery: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="row-cols-sm-1 row-cols-md-3 row-cols-lg-4">
                            {
                                this.props.books.filter(book =>
                                    book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())).map(book => (
                                        <Col className="d-flex align-items-stretch pb-4" key={book.asin}>
                                            <SingleBook book={book} />
                                        </Col>
                                    ))
                            }
                            
                            ))
                        </Row>
                    </Container>

                }
            </>
        )
    }
}

export default Latest