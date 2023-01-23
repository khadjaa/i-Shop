import { useEffect, useState } from "react"
import axios from "axios"
import rating from './assets/img/rating.svg'
import cartWhite from './assets/img/cartWhite.svg'
import arrowBack from './assets/img/arrowBack.svg'
import avatarIcon from './assets/img/avatarIcon.svg'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


export const Product = () => {

    const[product, setProduct] = useState(null)

    let { productID } = useParams();

    const [isProductInCart, setIsProductIncart] = useState(false)

    const addProductToCartHandler = () => {
        alert('Товар успешно добавлен в корзину')
        setIsProductIncart(true)
    }
    

    useEffect(()=> {
        const promise = axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productID}`)
        promise.then((res)=>{
            setProduct(res.data)
        })
    },[])

    const [reviews, setReviews] = useState([
        {
        author: 'Jane Cooper',
        title: 'Amazing Product',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        date: '01/01/2021',
        rating: 4
        },
        {
        author: 'Max Doodle',
        title: 'Best choice',
        text: 'Various versions have evolved over the years,  sometimes by accident,sometimes on purpose (injected humour and the like).',
        date: '05/23/2021',
        rating: 5
        },
    ])

    return (
        <div>
            <div className="arrowBack">
                <Link to={"/"}>
                    <img src={arrowBack} alt="" />
                    Back to Best Seller
                    </Link>
            </div>
            {
                product === null ? <h1>Loading...</h1>
                : <div className="product">
                <img src={product.image} alt="" />
                <div className="info">
                <p className="title">{product.title}</p>
                <p className="price">$ {product.price}</p>
                <div className="rating">
                    <p>Rating: {product.rating.rate}</p>
                    <img src={rating} alt="" />
                </div>
                <div className="category">
                    <span>Category:</span>
                    <p>{product.category}</p>
                </div>
                <p className="description">{product.description}</p>
                <button onClick={addProductToCartHandler} >
                    <img src={cartWhite} alt="" />
                    {isProductInCart ? 'Go to cart' : 'Add to cart'}
                </button>
                </div>
            </div>
            }
            <div className="review">
                <h3>Reviews (189)</h3>
                <textarea placeholder="Provide your text..."></textarea>
                <button>Send review</button>
            </div>
            <div>
            {reviews.map((r) => {
                return (
                <div className="reviewField">
                    <div className="info">
                    <div className="user">
                        <img src={avatarIcon} alt="" />
                        <div className="infoBox">
                        <p className="author">{r.author}</p>
                        <p className="rating">{r.rating} Rating</p>
                        </div>
                    </div>
                    <div>
                        <p className="date">{r.date}</p>
                    </div>
                    </div>

                    <div className="content">
                    <p className="title">{r.title}</p>
                    <p>{r.text}</p>
                    </div>
                </div>
                );
            })}
            </div>      
        </div>
    )
}