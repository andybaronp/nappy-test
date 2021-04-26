const elements = document.querySelectorAll(".btn")
const elementsArr = Array.from(elements)
const btnBotton = document.querySelectorAll(".botton")
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

function removeAtc() {

    elements.forEach(btn =>

        btn.classList.remove("act"))

}

elementsArr.forEach((element, index) => {
    let data = parseInt(element.dataset.number)
    //  inserta la descrip
    function machElement() {
        txtList.forEach(ele => {
            (data === ele.id) ? desc.innerHTML = ele.texto : "";

        })
    }

    btnBotton.forEach(function (ele, i) {
        element.addEventListener("click", function () {
            machElement()
            removeAtc()

            if (index < 6) {
                btnBotton[index].classList.add("act")
            }
        })
        ele.addEventListener("click", function () {
            btnBotton[i].classList.add("act")
        })
    })


})


// $dots.forEach(($dot, index) => {

//     $dot.addEventListener('click', function () {
//         // click en los botones de abajo
//         document.queryselector(.altDot[data - index= "${index}"]).click();

//     })
// })

