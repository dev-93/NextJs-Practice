import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
    const router = useRouter();

    const [myInfo, setMyInfo] = useState({
        id: '',
        pw: '',
    });

    const { id, pw } = myInfo;

    const onChange = (e) => {
        const { value, name } = e.target;

        setMyInfo({
            ...myInfo,
            [name]: value
          });
    };

    function onLogin() {
        console.log(myInfo);
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
                    <input placeholder="ID" name="id" onChange={onChange} value={id}/>
                </Form.Field>
                <Form.Field inline>
                    <input placeholder="PASSWORD" name="pw" type="password" onChange={onChange} value={pw}/>
                </Form.Field>
                <Button color="blue" type='submit' onClick={onLogin}>Login</Button>
            </Form>
        </div>
    )
}