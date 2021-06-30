import React from "react";
import "./Products.css";

function Products(props){
    return(
        <div className="products-container">
          <h3 className="product-txt">Confira nossos produtos</h3>
          <div className="products"> 
          <div className="product">
             <img className="product-img" src="https://androidfinal.com/wp-content/uploads/2018/12/realistic-games.jpg"></img>
             <h4 className="product-title">Games</h4>
             <button className="product-button">Ver mais</button>
          </div>
          <div className="product">
             <img className="product-img" src="http://el124.com/wp-content/uploads/2020/10/oficina-gamer-4.jpg"></img>
             <h4 className="product-title">Acessórios</h4>
             <button className="product-button">Ver mais</button>
          </div>
          <div className="product">
             <img className="product-img" src="https://www.tvmovie.de/assets/2020/11/12/79638-playstation-5-mit-dualsense.jpg"></img>
             <h4 className="product-title">PlayStations</h4>
             <button className="product-button">Ver mais</button>
          </div>
          <div className="product">
             <img className="product-img" src="https://cdn.ligadosgames.com/imagens/pc-gamer-bom-e-barato-og.jpg"></img>
             <h4 className="product-title">PCs</h4>
             <button className="product-button">Ver mais</button>
          </div>
          <div className="product">
             <img className="product-img" src="https://www.techgamingreport.com/wp-content/uploads/2020/11/Restock-of-Xbox-Series-X-Check-stock-status-on-Amazon.jpg"></img>
             <h4 className="product-title">Xbox</h4>
             <button className="product-button">Ver mais</button>
          </div>
          </div>
        </div>
    )
}
export default Products;