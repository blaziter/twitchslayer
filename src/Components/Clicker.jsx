import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { addGold } from '../Features/Counter/counterSlice'

const Clicker = () => {
    const golds = useSelector((state) => state.counter.golds);
    const gps = useSelector((state) => state.counter.gps);
    const twitch = useSelector((state) => state.counter.twitch);
    const dispatch = useDispatch()

    return (
        <>
            <Container className='margin-top'>
                <Card className='align-center'>
                    <Card.Body>
                        <Card.Title>
                            Twitchslayer
                        </Card.Title>
                        <Image onClick={() => dispatch(addGold())} src='shadowfootTwitch.png' width='256' />
                        <Card.Text>Golds: {golds}</Card.Text>
                        <Card.Text>Golds per second: {gps}</Card.Text>
                        <Card.Text>Twitches slain: {twitch}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Clicker;