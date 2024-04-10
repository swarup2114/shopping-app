import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../AppReduxStore/action';
import Loading from '../MainCompononents/Loading';

const Trending = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloading, userData, iserror } = useSelector((state) => ({
    isloading: state.productData.loading,
    userData: state.productData.userData,
    iserror: state.productData.error,
  }));
   
useEffect(()=>{
  dispatch(fetchData())
},[dispatch])
if (isloading) {
  return <Loading />;
}

if (iserror) {
  return <div>This is the error: {iserror}</div>;
}

return (
  <div className="prcts">
    {userData.slice(6, 15).map(item => (
      <div className="products-details" key={item.id} onClick={() => navigate(`/products/${item.id}`)}>
        <img src={item.image} alt="product" />
        <p>{item.title.slice(0, 20)}</p>
        <p>price :{item.price}</p>
        <button>Add To Cart</button>
      </div>
    ))}
  </div>
  );
}

export default Trending;
