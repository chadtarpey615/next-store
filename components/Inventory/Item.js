import React from 'react'
import Items from "./Items";
const Item = (props) => {
    return (
        <div>
            {props.storeItems.map(item => (
                <Items
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    category={item.category}
                    many={item.many}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default Item;
