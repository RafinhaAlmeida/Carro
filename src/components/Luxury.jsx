import iconLuxury from "../assets/icon-luxury.svg"


export default function app() {
    return(
    
        <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg"> 
          <img src={iconLuxury} alt="icone dos carros Luxury" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxury</h2>
          <p className="font-Lexend mb-7 text-offwhite lg:mb-20">escolha o Luxury pelo seu preço acessivel e exelente economia de cobustivel. ideal para dirigir na cidade ou na sua proxima viagem</p>
          <a className="font-Lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg" href="https://www.carwale.com/new/best-luxury-cars/" target="_blank">ver mais</a>
        </div>
    )
}