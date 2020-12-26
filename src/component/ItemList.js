import { Grid } from "semantic-ui-react";
import Link from 'next/link';

const ItemList = ({list}) => {
    return (
        <div>
             <Grid columns={3}>
                <Grid.Row>
                 {
                     list.map((item) => (
                        <Grid.Column key={item.id}>
                            <Link href={`/view/${item.id}`}>
                                <a>
                                    <img src={item.image_link} alt="item.name"/>
                                    <strong>{item.name}</strong>
                                    <span>
                                        {item.category} {item.product_type}
                                    </span>
                                    <strong>{item.price}</strong>
                                </a>
                            </Link>
                        </Grid.Column>
                     )) 
                 }
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default ItemList;