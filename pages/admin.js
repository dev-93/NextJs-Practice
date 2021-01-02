import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";

const Admin = () => {
    const router = useRouter();
    const [isLogin,setIsLogin] = useState(false);

    const checkLogin = () => {
        axios.get('/api/isLogin')
        .then(res => {
            if(res.status === 200 && res.data.name) {
                setIsLogin(true);
            } else {
                router.push("/login");
            }
        })
    };

    const Logout = () => {
        axios.get('/api/logout')
        .then(res => {
            if(res.status === 200) {
                router.push("/");
            }
        })
    };

    useEffect(() => {
        checkLogin();
    }, []);
    
    return(
        <>
            Admin
            {isLogin && <Button onClick={Logout}>Logout</Button>}
        </>
    )
}

export default Admin;