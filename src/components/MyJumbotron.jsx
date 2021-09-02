import { Jumbotron, Button } from 'react-bootstrap'

const MyJumbotron = () => {
    return(
        <Jumbotron fluid className="jumbo">
            
            <h1>Welcome!</h1>
            <p>
                This is a simple book store web page created by me ~ Marcy
            </p>
            <p>
                Enjoy!
            </p>
            <br></br>
            <p>
                <a href="https://github.com/sleepymarcy/BookStore-React/tree/master"><Button variant="info">GitHub Repo</Button></a>
            </p>
        </Jumbotron>
    )
}

export default MyJumbotron