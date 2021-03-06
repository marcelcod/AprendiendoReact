import React, { Component } from "react";

import Pelicula from "./pelicula";

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        titulo: "Puente de Espias",
        image:
          "https://i0.wp.com/redhistoria.com/wp-content/uploads/2018/12/puente-de-los-espias.png?w=750&ssl=1",
      },
      {
        titulo: "Batman vs Superman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_0cgrp9Y13yllWfYSf-AJicYMVuE-Au9p6CKBuB_bM16mZsUL&usqp=CAU",
      },
      {
        titulo: "Gran Turino",
        image: "https://pics.filmaffinity.com/Gran_Torino-278262332-large.jpg",
      },
      {
        titulo: "Looper",
        image:
          "https://es.web.img3.acsta.net/medias/nmedia/18/92/47/73/20250845.jpg",
      },
    ],
    nombre: "Marcel",
    favorita: {},
  };

  cambiarTitulo = () => {
    var { peliculas } = this.state;

    var random = Math.floor(Math.random() * 4);

    alert(random);

    peliculas[random].titulo = "Batman Begins";

    this.setState({
      peliculas: peliculas,
    });
  };
  //favorita=(event)
  favorita = (pelicula,indice) => {
    console.log("Favorita marcada");

    console.log(pelicula,indice);

    this.setState({
      favorita: pelicula,
    });
  };

  render() {

    var pstyle=
        {
            background:'green',
            color:'white',
            padding:'10px'
        }
    
    return (
      <div id="content" className="peliculas">
        <h2 className="subheader"> Peliculas </h2>

        <p> Seleccion las Mejores Peliculas de {this.state.nombre}</p>
        <div>
          <button onClick={this.cambiarTitulo}>Cambiar Titulo de Batman</button>
        </div>
   
         {/* se realiza condicionales Si viene o existe titulo muestra  */}
        {
            this.state.favorita.titulo &&
            <p className="favorita" style={pstyle}>
                <strong>La Pelicula favorite es : </strong>
                <span>{this.state.favorita.titulo}</span>
            </p>
        }

        

        {/*** Crear Conponente de peliculas*/}

        <div id="articles" className="peliculas">
          {this.state.peliculas.map((pelicula, i) => {
            return (
              <Pelicula
                key={i}
                pelicula={pelicula}
                indice={i}
                marcarFavorito={this.favorita}
              />
            );
          })}
        </div>
        {/** 
                    
                                <article class="article-item" id="article-template">
                <div class="image-wrap">
                    <img src={pelicula.image} alt={pelicula.titulo} />
                </div>

                <h2>{pelicula.titulo}</h2>
                <span class="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>

                <div class="clearfix"></div>
            
           </article>
                    */}
      </div>
    );
  }
}

export default Peliculas;
