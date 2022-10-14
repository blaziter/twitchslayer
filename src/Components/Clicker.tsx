import React from 'react';
import { Card, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../Features/Hooks/hooks'
import { addGold } from '../Features/Counter/counterSlice'

const Clicker = () => {
    const golds = useAppSelector(state => state.counter.golds)
    const gps = useAppSelector(state => state.counter.gps)
    const twitch = useAppSelector(state => state.counter.twitch)
    const dispatch = useAppDispatch()

    return (
        <>
            <Container className='margin-top'>
                <Card className='align-center'>
                    <Card.Body className='full-width'>
                        <Card.Title>
                            Twitchslayer
                        </Card.Title>
                        <Image onClick={() => dispatch(addGold())} src='shadowfootTwitch.png' width='256' />
                        <Container className='stats'>
                            <Stack direction='horizontal' gap={3}>
                                <Stack direction='vertical'>
                                    <Card.Text>Spells: </Card.Text>
                                    <Stack className='justify-content-center' direction='horizontal'>
                                        <Image src='emptySlot.png' width='64' />
                                        <Image src='emptySlot.png' width='64' />
                                        <Image src='emptySlot.png' width='64' />
                                        <Image src='emptySlot.png' width='64' />
                                    </Stack>
                                </Stack>
                                <Stack direction='vertical'>
                                    <Card.Text>
                                        Golds: {golds}
                                    </Card.Text>
                                    <Card.Text>
                                        Golds per second: {gps}
                                    </Card.Text>
                                    <Card.Text>
                                        Twitches slain: {twitch}
                                    </Card.Text>
                                </Stack>
                                <Stack direction='vertical'>
                                    <Card.Text>Items: </Card.Text>
                                    <Stack className='justify-content-center' direction='horizontal'>
                                        <Image src='emptySlot.png' width='64' />
                                        <Image src='emptySlot.png' width='64' />
                                        <Image src='emptySlot.png' width='64' />
                                    </Stack>
                                    <Stack className='justify-content-center' direction='horizontal'>
                                        <Image src='emptySlot.png' width='64' />
                                        <Image src='emptySlot.png' width='64' />
                                        <Image src='emptySlot.png' width='64' />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Clicker;