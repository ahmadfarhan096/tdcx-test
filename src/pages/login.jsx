import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button, Row, Col } from 'antd';
import axios from 'axios';

const Login = () => {
    const history = useHistory();
    const [input, setInput] = useState({ name: '', apiKey: process.env.REACT_APP_API_KEY })

    const onChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        //must use this pattern for axios
        try {
            const response = await axios({
                url: `${process.env.REACT_APP_API_URL}login`,
                method: 'POST',
                //body to send to api
                data: input,
            })
            console.log(response);
            //backend usually use 200 for success
            if (response.status === 200) {
                history.push('/dashboard')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <Row>
                <div style={{
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 1px grey',
                    width: 'auto',
                    height: 'auto',
                    borderRadius: '5px',
                    padding: '15px'

                }}>
                    <Col>
                    <div><h3>Login</h3></div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: '#537178'
                        }}>

                        <Input
                            name="apiKey"
                            value={input.apiKey}
                            style={{
                                margin: '10px'
                            }}
                            onChange={onChange}
                            placeholder='Id'
                        />

                       


                        <Input
                            style={{ backgroundColor: '#EEF1F8' }}
                            name="name"
                            value={input.name}
                            style={{
                                margin: '10px'
                            }}
                            onChange={onChange}
                            placeholder='Name'

                        />

                      


                        <Button
                            style={{
                                width: '100%',
                                backgroundColor: '#5285EC',
                                color: 'white'
                            }}
                            onClick={onSubmit}
                        >Login</Button>
                    </div>
                    </Col>
                </div>
            </Row>
        </Fragment>
    )

}

export default Login;