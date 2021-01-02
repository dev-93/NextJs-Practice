import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Admin = () => {
    const router = useRouter();
    const checkLogin = () => {
        axios.get('api/isLogin')
        .then(res => {
            if(res.status === 200 && res.data.name) {
                // 로그인
            } else {
                router.push("/login");
            }
        })
    }

    useEffect(() => {
        checkLogin();
    }, [])
    
    return(
        <div>Hello world</div>
    )
}

export default Admin;