const elements = document.querySelectorAll(".btn")
const elementsArr = Array.from(elements)
const desc = document.getElementById("desc")

const txtList = [


    {
        id: 1, texto: `
    <h3>TITULO DEL 1 </h3>
    <p>Allen Roberts es un adolescente que tiene que lidiar con ciertos problemas ya que.</p>` },
    {
        id: 2, texto: `
    <h3>TITULO DEL 2 </h3>
    <p>tiene dos padres que son famosos y por si fuera poco, ambos padres </p>` },
    {
        id: 3, texto: `
    <h3>TITULO DEL 3</h3>
    <p> son del mismo sexo. No es nada fácil para él así que tiene que buscar</p>` },
    {
        id: 4, texto: `
    <h3>TITULO DEL 4</h3>
    <p> son del mismo sexo. No es nada fácil para él así que tiene que buscar</p>` },
    {
        id: 5, texto: `
    <h3>TITULO DEL 5</h3>
    <p>¿Tener dos padres del mismo sexo es fácil? Claro, tengo la vida más...</p>` },
    {
        id: 6, texto: `
    <h3>TITULO DEL -6 -</h3>
    <p>Fin de la hiztoria Gay</p>` },


]



elementsArr.forEach(element => {
    const data = element.dataset.number


    // console.log(data);
    element.addEventListener("click", () => {

        txtList.forEach(ele => {

            if (data == ele.id) {
                desc.style.display = "block"
                desc.innerHTML = ele.texto
                console.log(ele.texto);
            }
        })


    })
})
