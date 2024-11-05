import React from 'react'
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa'
import { useCart } from './Context/cart'
import toast from 'react-hot-toast';


const ProductCard = ({product}) => {

  const { addProdToCart } = useCart();

  


  // // Cart State
  // const [cart, setCart] = useState([])

  // const navigate = useNavigate()

  // // CrtPage Functionality
  // useEffect(() => {
  //   const savedCart = localStorage.getItem('cart') || [] ;
  //   if (savedCart) {
  //     setCart(JSON.parse(savedCart));
  //   }
  // }, [product]);

  // const addProdToCart = (product) => {
  //   const prodAlready = cart.find((item) => item.id === product.id)
  //   let newCart;
  //   if(prodAlready){
  //     newCart = cart.map((item) => item.id===product.id ? {...item, quantity: item.quantity +1} : item)
  //     toast.error('Product Already in Cart')
  //   }else {
  //     newCart = [...cart, {...product, quantity: 1}]
  //     toast.success('Product Added Successfully...')
  //   }
  //   setCart(newCart)  
  //   localStorage.setItem('cart', JSON.stringify(newCart))
  // }


  // navigate('/cartpage', { state: { cart } });

  const addProdToWishList = (product) => {
    const savedProdWishList = JSON.parse(localStorage.getItem('wishlist')) || [];
    const prodAlready = Array.isArray(savedProdWishList) ? savedProdWishList.find((item) => item.id === product.id) : null
    if(prodAlready){
      toast.error("Product Already in WishList")
      return;
    } 
    const newWishList = [...savedProdWishList, product];
    localStorage.setItem('wishlist', JSON.stringify(newWishList));
    toast.success('Product Added To WishList...')
  }


  return (
    <section>
        <div key={product.id} className='prod-card'>
            <img src={product.image} />
            <h6 className='rating'> <FaStar/> {product.ratings}</h6>
            <p>{product.brand}<span>{product.weight}</span></p>
            <h4>{product.name}</h4>
            <div className='prod-card-pr'>
                <p>${product.price}</p>
                <button onClick={() => addProdToWishList(product)}><FaHeart /></button>
                <button onClick={() => addProdToCart(product)}><FaShoppingCart /></button>
            </div>  
        </div>
        
    </section>
  )
}

export default ProductCard

