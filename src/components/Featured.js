import React from "react";
import "./Featured.css";

function Featured(props){
    return(
        <>
        <h3 className="featured-title">Confira os jogos mais vendidos da semana</h3>
        <div className="featured-container">
          <div className="featured">
              <img className="featured-img" src="https://img.bfmtv.com/c/1256/708/3101dc/7f79e54447f203107f8c0b3154.jpeg"></img>
              <h3 className="featured-name">GTA 5</h3>
              <button className="featured-btn">Comprar</button>
              <button className="featured-btn2">Adicionar ao carrinho</button>
          </div>
          <div className="featured">
              <img className="featured-img" src="https://poltronanerd.com.br/wp-content/uploads/2020/05/poltrona-far-cry-5-seed.jpg"></img>
              <h3 className="featured-name">FarCry 5</h3>
              <button className="featured-btn">Comprar</button>
              <button className="featured-btn2">Adicionar ao carrinho</button>
          </div>
          <div className="featured">
              <img className="featured-img" src="https://thesquad.com.br/wp-content/uploads/2019/08/pubg-mobile.jpg"></img>
              <h3 className="featured-name">PUBG</h3>
              <button className="featured-btn">Comprar</button>
              <button className="featured-btn2">Adicionar ao carrinho</button>
          </div>
          <div className="featured">
              <img className="featured-img" src="https://images.derstandard.at/img/2019/11/28/1170x658HUUUGECSGOUPDATE1552564894493HJeUsMTvw4-768x432.png?w=750&s=b4fe7e0f"></img>
              <h3 className="featured-name">CS:GO</h3>
              <button className="featured-btn">Comprar</button>
              <button className="featured-btn2">Adicionar ao carrinho</button>
          </div>
          <div className="featured">
              <img className="featured-img" src="https://img.ibxk.com.br/2019/05/20/20131718017211.jpg"></img>
              <h3 className="featured-name">Minecraft</h3>
              <button className="featured-btn">Comprar</button>
              <button className="featured-btn2">Adicionar ao carrinho</button>
          </div>
          <div className="featured">
              <img className="featured-img" src="https://arenaesports.com.br/wp-content/uploads/2018/02/fortnite-passe-2.jpg"></img>
              <h3 className="featured-name">Fortnite</h3>
              <button className="featured-btn">Comprar</button>
              <button className="featured-btn2">Adicionar ao carrinho</button>
          </div>
          <div className="featured">
              <img className="featured-img" src="https://www.pichauarena.com.br/wp-content/uploads/2020/03/517037.jpg"></img>
              <h3 className="featured-name">Warzone</h3>
              <button className="featured-btn">Comprar</button>
              <button className="featured-btn2">Adicionar ao carrinho</button>
          </div>
        </div>
        </>
    )
}
export default Featured;