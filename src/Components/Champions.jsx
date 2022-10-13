import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Champions = () => {
    return (
        <>
            <Container className='margin-top'>
                <Card className='align-center'>
                    <Card.Body>
                        <Card.Title>
                            Champions
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Champions;