import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import CommentArea from "./CommentArea"

class SingleBook extends React.Component {

    state = {
        selected: false
    }

    render() {
        return (
            <>
                <Card
                    onClick={() => this.setState({ selected: !this.state.selected })}
                    style={{ border: this.state.selected ? '2px solid #00ff84' : 'none' }}
                    className="cardBack"
                >
                    <Card.Img variant="top" className="font-weight-bold font-italic text-center" src={this.props.book.img} alt={this.props.book.title} />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="font-weight-bold font-italic text-center"> {this.props.book.title} </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    {
                        this.state.selected && <CommentArea asin={this.props.book.asin} />
                    }
                </Card>
            </>
        )
    }
}


export default SingleBook