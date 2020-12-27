import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/item';

const Id = () => {
    const router = useRouter();
    const { id } = router.query;
    const [item, setItem] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    function getData() {
        axios.get(API_URL)
        .then(res => {
            console.log(res.data);
            setItem(res.data);
            setIsLoading(false);
        })
    };

    useEffect(()=>{
        if(id && id > 0) {
            getData();
        }
    }, [id])

    return (
        <>
        {
            isLoading ?
                <Loader inline="centerd" active>
                    Loading
                </Loader> :
                <Item item={item}/>
        }
        </>   
    )
}

export default Id