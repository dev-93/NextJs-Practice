import { Button } from "semantic-ui-react";

const Item = ({item}) => {
    console.log(item);
    const {
        image_link, 
        name,
        price,
        description,
        category,
        product_type,
        updated_at,
    } = item;
    return (
        <>
            <div>
                <img src={image_link} alt={name}/>
            </div>
            <div>
                <strong>{name}</strong>
                <string>${price}</string>
                <span>
                    {category ? `${category}/`: ''}
                    {product_type}
                </span>
            </div>
            <Button color="orange">구매하기</Button>
            <div>
                <p>{description}</p>
            </div>
        </>
    );
};

export default Item;