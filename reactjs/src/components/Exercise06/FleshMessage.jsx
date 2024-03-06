import { useRef, useState } from "react"

const FleshMessage = () => {
  const [cart, setCart] = useState(0);
  const [notification, setNotification] = useState(null);
  const timeoutRef = useRef();

  function handleClick(){
    setCart(cart + 1);
    setNotification('Item add in to cart!');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 1500);
  }

  return (
    <div>
      <p className="message">{notification}</p>
      <button onClick={handleClick}>Add cart {cart}</button>
    </div>
  )
}

export default FleshMessage
