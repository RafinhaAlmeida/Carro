import iconSedans from "../assets/icon-sedans.svg"


export default function app() {
    return(
    <section className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
          <img src={iconSedans} alt="icone dos carros sedan" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-Lexend mb-7 text-offwhite lg:mb-20">escolha o sedan pelo seu preço acessivel e exelente economia de cobustivel. ideal para dirigir na cidade ou na sua proxima viagem</p>
          <a className="font-Lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg" href="https://www.webmotors.com.br/catalogo/carroceria/sedan/" target="_blank">ver mais</a>
    </section>

    )
}