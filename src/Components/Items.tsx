import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Items = () => {
    return (
        <>
            <Container className='margin-top'>
                <Card className='align-center'>
                    <Card.Body>
                        <Card.Title>
                            Items
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Items;