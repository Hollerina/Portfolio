import { AES } from "crypto-js";
import Cookies from "universal-cookie";
import { useCookies } from "react-cookie";
import { useState } from "react"
import {
    Form,
    Button,
    Container
  } from "react-bootstrap"

export default function Password() {
    const [secret, setSecret] = useState("");

    const handleChange = (e) => {
        setSecret(e.target.value);
    }

    const handleSubmit = () => {
        const cookies = new Cookies({path: '/'});
        cookies.set('strava-secret', secret)
        //setSecret(AES.encrypt(secret, "password").toString());
    }

    return (
        <>
            <Container fluid="true">
                <Form>
                    <Form.Group>
                        <Form.Label>Please enter the secret code</Form.Label>
                        <Form.Control onChange={handleChange} type="text" />
                        <Button className="button-contact" onClick={handleSubmit}>Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}