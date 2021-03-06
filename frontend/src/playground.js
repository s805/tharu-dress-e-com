import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "./actions/productActions";

const Playground = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  console.log("This is the data 👇👇👇:)    ");
  console.log(productDetails);
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <div>
      <div>
        {product && product.length ? (
          <h1>
            <h1>{product[0].name || ""}</h1>
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default Playground;
