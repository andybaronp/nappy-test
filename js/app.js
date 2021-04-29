const ups = document.querySelectorAll(".up")
const elements = document.querySelectorAll(".btn")
const elementsArr = Array.from(elements)
const btnUP = Array.from(ups)

const btnBotton = document.querySelectorAll(".botton")
const desc = document.getElementById("desc")

function removeAtc() {

    elements.forEach(btn =>

        btn.classList.remove("act"))

}

const machElement = () => {

    fetch("data.json")
        .then(res => res.json())
        .then(data => {

            const src = data[0].main.src
            const dots = data[0].dots
            document.getElementById("img").setAttribute("src", src);


            btnUP.forEach((ele, i) => {
                ele.dataset.number = 1 + i
                ele.style.top = `${dots[i].lat}%`
                ele.style.right = `${dots[i].lon}%`
                // let title = dots[i].content.title
                // let content = dots[i].content.content

            })
        })


    // if (dots[i].id == ele.dataset.number) {
    //     console.log("object");
    //     let html = `
    //     <h2> ${title}</h2>
    //     <p>${content} </p>
    //     `
    //     const div = document.createElement('div');
    //     div.innerHTML = html;
    //     desc.append(div)
    // }



}









// const machElement = async () => {

//     try {
//         const res = await fetch("data.json")
//         const data = await res.json()
//         const src = data[0].main.src
//         const dots = data[0].dots
//         document.getElementById("img").setAttribute("src", src);


//         btnUP.forEach((ele, i) => {
//             ele.dataset.number = 1 + i
//             ele.style.top = `${dots[i].lat}%`
//             ele.style.right = `${dots[i].lon}%`
//             let title = dots[i].content.title
//             let content = dots[i].content.content

//         })

//         // let html = `
//         // <h2> ${title}</h2>
//         // <p>${content} </p>
//         // `
//         // const div = document.createElement('div');
//         // div.innerHTML = html;
//         // desc.append(div)


//     }

//     catch (error) {
//         console.log(error);
//     }

// }


elementsArr.forEach((element, index) => {

    btnBotton.forEach(function (ele, i) {
        element.addEventListener("click", function (e) {

            removeAtc()
            if (index < 6) {
                btnBotton[index].classList.add("act")
            }
        })
        ele.addEventListener("click", function (e) {
            removeAtc()
            btnBotton[i].classList.add("act")
        })
    })


})


addEventListener("DOMContentLoaded", machElement)