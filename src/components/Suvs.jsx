import iconSuvs from "../assets/icon-suvs.svg"


export default function app() {
    return(
    <div className="bg-green p-12"> 
        <img src={iconSuvs} alt="icone dos carros suvs" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
        <p className="font-Lexend mb-7 text-offwhite lg:mb-20">escolha o suvs pelo seu preço acessivel e exelente economia de cobustivel. ideal para dirigir na cidade ou na sua proxima viagem</p>
        <a className="font-Lexend bg-offwhitebg px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/suvs" target="_blank">ver mais</a>
    </div>


    )
}