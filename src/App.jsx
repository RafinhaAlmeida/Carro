import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"


export default function app(){
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg-flex justift-center items-center">
      <section className="lg:flex max-w-[920px]">

        <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
          <img src={iconSedans} alt="icone dos carros sedan" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-Lexend mb-7 text-offwhite lg:mb-20">escolha o sedan pelo seu preço acessivel e exelente economia de cobustivel. ideal para dirigir na cidade ou na sua proxima viagem</p>
          <a className="font-Lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg" href="https://www.webmotors.com.br/catalogo/carroceria/sedan/" target="_blank">ver mais</a>
        </div>

        <div className="bg-green p-12"> 
          <img src={iconSuvs} alt="icone dos carros suvs" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
          <p className="font-Lexend mb-7 text-offwhite lg:mb-20">escolha o suvs pelo seu preço acessivel e exelente economia de cobustivel. ideal para dirigir na cidade ou na sua proxima viagem</p>
          <a className="font-Lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/suvs" target="_blank">ver mais</a>
        </div>

        <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg"> 
          <img src={iconLuxury} alt="icone dos carros Luxury" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxury</h2>
          <p className="font-Lexend mb-7 text-offwhite lg:mb-20">escolha o Luxury pelo seu preço acessivel e exelente economia de cobustivel. ideal para dirigir na cidade ou na sua proxima viagem</p>
          <a className="font-Lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg" href="https://www.carwale.com/new/best-luxury-cars/" target="_blank">ver mais</a>
        </div>

      </section>
    </main> 
 )
}