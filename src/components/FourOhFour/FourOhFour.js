import React from "react";
import Alert from 'react-bootstrap/Alert'

const FourOhFour = () => (
    <section className="container">
        <Alert className="container m-4 text-center" variant="danger">
            Page not found! Head <Alert.Link href="/">home</Alert.Link> to start over.
        </Alert>
    </section>
)
export default FourOhFour;