import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCards = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        const db = getFirestore()
        const itemsRef = collection(db, 'items')
        getDocs(itemsRef).then(snapshot => {
            const data = snapshot.docs.map(e => ({id: e.id, ...e.data()}))
            console.table(data)
            setItems(data)
        })
    }

    return (
        <div className='Productos'>
            {items.map(i=>
                <Card className='Producto' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={i.img} />
                    <Card.Body>
                        <Card.Title>{i.title}</Card.Title>
                        <Card.Text>${i.price}.00</Card.Text>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                </Card>)}
        </div>
    )
}

export default ItemCards