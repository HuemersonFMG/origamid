import { useContext } from "react";
import UserContext from "./UserContext";

const Product = () => {
  const datas = useContext(UserContext);

  return (
    <>
      <h1>Product</h1>
      <p><b>User:</b> {datas.name}</p>
    </>
  )
}

export default Product
