import { useEffect, useRef, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import UserList from "../src/component/UserList";

const Test = () => {
    const [myInfo, setMyInfo] = useState({
        username: '',
        password: '',
    });
    
    const nameInput = useRef();

    console.log(nameInput);

    useEffect(() => {
        nameInput.current.focus();
    }, [])
    
    const {username, password} = myInfo;

    const onChange = (e) => {
        const { value, name } = e.target;
        setMyInfo({
            ...myInfo,
            [name]: value
        });
    };


    const onReset = () => {
        setMyInfo({
            username: '',
            password: '',
        });
        nameInput.current.focus();
    };

    const onSubmit = (e) => {
        const {value} = e.target;
    }

    console.log(myInfo);
  return (
        <>
            <div style={{padding: "100px 0", textAlign: "center"}}>
            <Form>
                <Form.Field inline>
                    <input placeholder="ID" name="username" onChange={onChange} value={username} ref={nameInput}    />
                </Form.Field>
                <Form.Field inline>
                    <input placeholder="PASSWORD" name="password" onChange={onChange} value={password}/>
                </Form.Field>
                <Button color="blue" onClick={onReset}>Reset</Button>
                <Button color="blue" onClick={onSubmit}>Login</Button>
            </Form>

            <div style={{marginTop:'50px'}}>
                <p>name:<strong>{username}</strong></p>
                <p>nickname:<strong>{password}</strong></p>
            </div>

            <div style={{marginTop:'50px'}}>
                <UserList/>
            </div>
        </div>
        </>
    )
};

export default Test;