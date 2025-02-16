
import React from "react";
import { Card } from "antd";
import './content.css'

const ProductsCard = () => {
  const products = [
    {
      id: "SKU90400",
      name: "Huawei Smartwatch",
      image: "https://sp.yimg.com/ib/th?id=OPHS.b0C8V2Ho7u8QNQ474C474&o=5&pid=21.1&w=160&h=105", // Replace with actual image URL
      price: "$39.02",
      quantity: 12,
      revenue: "$51",
      profit: "$15",
    },
    {
      id: "SKU78589",
      name: "Noise Shoes",
      image: "https://tse3.mm.bing.net/th?id=OIP.frft53HDd6k0x76zeh5f9QHaHa&pid=Api&P=0&h=220", // Replace with actual image URL
      price: "$45.26",
      quantity: 19,
      revenue: "$8",
      profit: "$9",
    },
    {
      id: "SKU78588",
      name: "Men & Women Headphones",
      image: "https://tse1.mm.bing.net/th?id=OIP.ywQHLhSA6TuY4Y6GHBeL_gHaHa&pid=Api&P=0&h=220", // Replace with actual image URL
      price: "$45.62",
      quantity: 9,
      revenue: "$15",
      profit: "$18",
    },
    {
      id: "SKU78596",
      name: "Anime White T-shirt",
      image: "https://tse3.mm.bing.net/th?id=OIP.oxtWq_Qy_-UVagrdl5mrcgHaJ4&pid=Api&P=0&h=220", // Replace with actual image URL
      price: "$589.26",
      quantity: 9,
      revenue: "$7",
      profit: "$42",
    },
  ];

  return (
    <Card
      title={<h2 style={{color:"#fff"}}>Top Products</h2>}
      className="card-container"
    
    >
      {products.map((product) => (
        <div
          key={product.id}
         
          className="product-row"
        >
          {/* Left Section: Image and Details */}
          <div className="product-left">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              
            />
            <div>
              <p className="product-name">{product.name}</p>
              <p className="product-price"
              >
                {product.price}
              </p>
            </div>
          </div>

          {/* Right Section: Stats */}
          <div className="product-right">
            <p style={{ margin: 0 }}>QTY: {product.quantity}</p>
            <p style={{ margin: 0 }}>Revenue: {product.revenue}</p>
            <p style={{ margin: 0 }}>Profit: {product.profit}</p>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default ProductsCard;
