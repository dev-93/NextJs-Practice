import axios from "axios";
import { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
    const router = useRouter();
    function onLogin() {
        return (
            axios.post('/api/login')
            .then(res => {
                if(res.status = 200) {
                    router.push("/admin")
                }
            })
        )
    };

    return(
        <div style={{padding: "100px 0", textAlign: "center"}}>
            <Form>
                <Form.Field inline>
                    <input placeholder="ID" />
                </Form.Field>
                <Form.Field inline>
                <input placeholder="PASSWORD" type="password" />

                </Form.Field>
                <Button color="blue" onClick={onLogin}>Login</Button>
            </Form>
        </div>
    )
}