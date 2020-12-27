import axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';

export default function Home() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
     
    const API_URL="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    
    function getData() {
        axios.get(API_URL)
        .then(res => {
            setList(res.data);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Head>
                <title>Home | 태남</title>
            </Head>
            {
                isLoading ? 
                <>
                    <Loader inline="centerd" active>
                        Loading
                    </Loader>
                </> : 
                <>
                    <Header as="h3" style={{paddingTop: 40}}>
                        Best
                    </Header>
                    <Divider />
                    <ItemList list={list.slice(0,9)}/ >
                    <Header as="h3" style={{paddingTop: 40}}>
                        New
                    </Header>
                    <ItemList list={list.slice(9)}/ >
                </>
            }
        </>
    )
}
