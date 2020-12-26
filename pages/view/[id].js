import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Item from '../../src/component/item';

const Id = () => {
    const router = useRouter();
    const { id } = router.query;
    const [item, setItem] = useState({});

    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    function getData() {
        axios.get(API_URL)
        .then(res => {
            console.log(res.data);
            setItem(res.data);
        })
    };

    useEffect(()=>{
        if(id && id > 0) {
            getData();
        }
    }, [id])

    return (
        <Item item={item}/>
    )
}

export default Id