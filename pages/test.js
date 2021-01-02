import { useEffect, useRef, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import CreateUser from "../src/component/CreateUser";
import UserList from "../src/component/UserList";

const Test = () => {
    const [myInfo, setMyInfo] = useState({
        username: '',
        ailas: '',
    });
    
    const [users, setUsers] = useState([
        {
            id: 1,
            username: '푸들',
            ailas: 'puppy'
        },
        {
            id: 2,
            username: '펭귄',
            ailas: '펭수'
        },
        {
            id: 3,
            username: '래미안',
            ailas: 'aaa'
        }
    ]);

    const nameInput = useRef();

    useEffect(() => {
        nameInput.current.focus();
    }, []);
    
    const {username, ailas} = myInfo;

    const onChange = (e) => {
        const { value, name } = e.target;
        setMyInfo({
            ...myInfo,
            [name]: value
        });
    };

    const nextId = useRef(4);
    
    const onSubmit = (e) => {
        const {value} = e.target;

        if (username && ailas) {
            const user = {
                id: nextId.current,
                username,
                ailas
            };
    
            setUsers([...users, user]);
    
            setMyInfo({
                username: '',
                ailas: ''
              });
    
            nextId.current += 1;
        } else {
            alert("username이나 ailas을 입력해주세요")
        }
    };

    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    return (
        <>
            <div style={{padding: "100px 0", textAlign: "center"}}>
                <CreateUser 
                    username={username}
                    ailas={ailas}
                    nameInput={nameInput}
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
                
                <div style={{marginTop:'50px'}}>
                    <p>username:<strong>{username}</strong></p>
                    <p>alias:<strong>{ailas}</strong></p>
                </div>

                <div style={{marginTop:'50px'}}>
                    <UserList users={users} onRemove={onRemove}/>
                </div>
            </div>
        </>
    )
};

export default Test;