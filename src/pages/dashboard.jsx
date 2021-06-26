import React, { Fragment, useEffect, useState } from 'react';
import { List, Input, Button, Modal, Card, Row, Col } from 'antd';
import axios from 'axios';

const Dashboard = () => {

    const [modal, setModal] = useState(false)

    useEffect(() => {
        const get = async () => {
            try {
                const response = await axios({
                    url: `${process.env.REACT_APP_API_URL}tasks`,
                    method: 'GET',
                    headers: {
                        'Authorization': '8f9baf3ca6b3b8cbcecab0c6'
                    }
                })
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        get()
    }, [])

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false);
    };
    // const [input, setInput] = useState({ name: '', apiKey: '' })

    // const onChange = (e) => {
    //     console.log(e.target.name);
    //     console.log(e.target.value);
    //     setInput({ ...input, [e.target.name]: e.target.value })
    // }

    // const onLogout = async (e) => {
    //     //must use this pattern for axios
    //     try {
    //         const response= await axios({
    //             url:`${process.env.REACT_APP_API_URL}login`,
    //             method:'POST',
    //             //body to send to api
    //             data:input,
    //         })
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <Fragment>

            <div
                style={{
                    width: '100%',
                    height: '60px',
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 1px grey'

                }}>
                <a
                    style={{
                        fontSize: '18px',
                        color: '#6D8187',
                        textAlign: 'right'
                    }}

                >Logout</a>
            </div>
            <div style={{
                marginTop: '2em'
            }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card style={{
                            padding: '30px'
                        }}>

                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card style={{
                            padding: '30px'
                        }}>

                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card style={{
                            padding: '30px'
                        }}>


                        </Card>
                    </Col>
                </Row>
            </div>

            <div style={{
                marginTop: '50px',
                marginLeft: '50px',
                border: '1px solid black',
                width: 'fit-content',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px'
            }}>
                <span>You have no task</span>
                <Button
                    style={{
                        backgroundColor: '#5285EC',
                        color: 'white',
                        width: '100px'
                    }}
                    onClick={openModal}
                >New Task</Button>
            </div>

            <List>
                
            </List>

            <div>
                <Modal
                    visible={modal}
                    footer={null}
                    closable={false}
                    onCancel={closeModal}
                >
                    <div >
                        <Input placeholder="Task Name"></Input>
                        <Button
                            style={{
                                backgroundColor: '#5285EC',
                                color: 'white',
                                width: '100px'
                            }}
                            onClick={openModal}
                        >New Task</Button>
                    </div>
                </Modal>
            </div>


        </Fragment>
    )

}

export default Dashboard;