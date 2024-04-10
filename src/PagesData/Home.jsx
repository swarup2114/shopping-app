// import React, { useState, useEffect } from "react";
// // import HomeBanner from "../Banners/HomeBanner";
// import  "../componentsstyles/home.css"

// const Home = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((val) => val.json())
//       .then((res) => setData(res))
//       .catch((error) => console.log("this error is occcured", error));
//   });
//   return (
//     <div className="prcts">
//       {data.map((product,id)=>{
//         return(
//           <div className="products-details" key={id}>
//           <img src={product.image} alt="product"/>
//           <p>{product.title.slice(0,20)}</p>
//           <button>Add To Cart</button>
//           </div>
//         )
//       })}
//     </div>
//   );
// };

// export default Home;
import React, { useEffect } from "react";
import "../componentsstyles/home.css";
import { fetchData } from "../AppReduxStore/action";
import OfferBanner from "../Assests/OffreBanner.jpg";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import Loading from "../MainCompononents/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const usenav = useNavigate();
  const { isloading, userData, iserror } = useSelector((state) => ({
    isloading: state.productData.loading,
    userData: state.productData.userData,
    iserror: state.productData.error,
  }));

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isloading) {
    return (
      <div>
      <Loading/>
      </div>
    );
  }

  if (iserror) {
    return <div>This is the error: {iserror}</div>;
  }

  return (
    <div className="Home-cont">
      <img src={OfferBanner} alt="bannher" />
      {userData ? (
        <div className="prcts">
          {userData.map((product) => {
            return (
              <div className="products-details" key={product.id}  >
                <img src={product.image} alt="product"  onClick={() => usenav(`/products/${product.id}`)}/>
                <p>{product.title.slice(0, 20)}</p>
                <p>price :{product.price}</p>
                <button>Add To Cart</button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Home;
