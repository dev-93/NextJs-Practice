import axios from 'axios';
import Head from 'next/head'
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';

export default function Home ({list}) {
    return(
        <div>
            <Head>
                 <title>Home | 태남</title>
             </Head>
             <>
                 <Header as="h3" style={{paddingTop: 40}}>
                     Best
                 </Header>
                 <Divider />
                 <ItemList list={list.slice(0,9)}/ >
                 <Header as="h3" style={{paddingTop: 40}}>
                     New
                 </Header>
                 <Divider />
                 <ItemList list={list.slice(9)}/ >
             </>
        </div>
    )    
}


export async function getStaticProps() {
    const api_url = process.env.apiUrl;
    const res = await axios.get(api_url);
    const data = res.data;

    return {
        props: {
            list: data,
            name: process.env.name
        }
    }
}