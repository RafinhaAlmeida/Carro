import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"


export default function app(){
  return(
    <main>
      <section>

        <div className="bg-orange">
          <img src={iconSedans} alt="icone dos carros sedan" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-Lexend">escolha o sedan pelo seu preço acessivel e exelente economia de cobustivel. ideal para dirigir na cidade ou na sua proxima viagem</p>
          <a className="font-Lexend" href="https://www.webmotors.com.br/catalogo/carroceria/sedan/" target="_blank">ver mais</a>
        </div>

        <div className="bg-green"> 
          <img src={iconSuvs} alt="icone dos carros suvs" />
          <h2 className="font-shoulders">Suvs</h2>
          <p className="font-Lexend">escolha o suvs pelo seu preço acessivel e exelente economia de cobustivel. ideal para dirigir na cidade ou na sua proxima viagem</p>
          <a className="font-Lexend" href="https://www.webmotors.com.br/suvs" target="_blank">ver mais</a>
        </div>

        <div className="bg-dark-green"> 
          <img src={iconLuxury} alt="icone dos carros Luxury" />
          <h2 className="font-shoulders">Luxury</h2>
          <p className="font-Lexend">escolha o Luxury pelo seu preço acessivel e exelente economia de cobustivel. ideal para dirigir na cidade ou na sua proxima viagem</p>
          <a className="font-Lexend" href="https://www.carwale.com/new/best-luxury-cars/" target="_blank">ver mais</a>
        </div>

      </section>
    </main> 
 )
}