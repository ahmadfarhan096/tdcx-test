import React, { Fragment, useEffect, useState } from 'react';
import { List, Input, Button, Modal, Card, Row, Col, Checkbox } from 'antd';
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

    const data = [
        {
            title: 'Clean the room',
        },
        {
            title: 'Buy some vegetables, chicken & chips',
        },
        {
            title: 'Reinstall windows on PC',
        },
        {
            title: 'Start to work on show feature',
        },
    ];
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

            <div style={{ marginTop: '2em' }}>
                <Row gutter={16}>
                    <Col lg={8} md={8} sm={24} xs={24}>
                        <Card style={{
                            padding: '30px'
                        }}>

                        </Card>
                    </Col>

                    <Col lg={8} md={8} sm={24} xs={24}>
                        <Card style={{
                            padding: '30px'
                        }}>

                        </Card>
                    </Col>

                    <Col lg={8} md={8} sm={24} xs={24}>
                        <Card style={{
                            padding: '30px'
                        }}>


                        </Card>
                    </Col>
                </Row>
            </div>


            <div style={{ margin: '20px' }}>
                <Row gutter={16}>
                    <Col lg={15} md={10} sm={24} xs={24}>
                        <span>Tasks</span>
                    </Col>

                    <Col lg={6} md={10} sm={24} xs={24}>
                        <Input
                            placeholder='Search by task name'
                        />
                    </Col>

                    <Col lg={3} md={10} sm={24} xs={24}>
                        <Button
                            style={{
                                width: '100%',
                                backgroundColor: '#5285EC',
                                color: 'white'
                            }}
                        >New Task
                        </Button>
                    </Col>
                </Row>
            </div>

            <div style={{
                backgroundColor: 'white',
                // boxShadow: '1px 1px 1px grey',
                width: 'auto',
                height: 'auto',
                border: '1px solid grey',
                borderRadius: '5px',
                padding: '15px'
            }}>
                <Row gutter={16}>
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item gap='10px'>
                                    <Checkbox />
                                    <List.Item.Meta
                                        title={<a>{item.title}</a>}
                                        actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>

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