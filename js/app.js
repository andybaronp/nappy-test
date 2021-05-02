async function fetchData() {
  let res = await fetch("./data.json");
  let data = await res.json();
  return data;
}
const stringToHTML = (s) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(s, "text/html");
  return doc.body.firstChild;
};
async function createImage({ src, alt }) {
  let template = `<img src="${src}" alt="${alt}" class="nappy" id="img" />`;
  return stringToHTML(template);
}
async function createFloatingDots(dots) {
  let template = dots.map(({ id, lat, lon }, index) => {
    return stringToHTML(
      `<div class="btn up ${
        index === 0 ? `act` : ""
      }" style="top:${lat}%;left:${lon}%" data-number="${id}">${id}</div>`
    );
  });
  return template;
}
async function createNavigationDots(dots) {
  let template = dots.map(({ id }, index) => {
    return stringToHTML(
      `<div class="btn botton ${
        index === 0 ? `act` : ""
      }" data-number="${id}">${id}</div>`
    );
  });
  return template;
}
async function createContent(dots) {
  let template = dots.map(({ id, content }, index) => {
    let { title, description } = content;
    return stringToHTML(`<div data-number="${id}" class="content-wrapper ${
      index === 0 ? "show" : "hide"
    }">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>`);
  });
  return template;
}
function handleClick(dot, dotsArray, altDotsArray) {
  let index = parseInt(dot.dataset.number) - 1;
  dot.classList.add("act");
  altDotsArray[index].click();
  dotsArray
    .filter((element) => element.dataset.number !== dot.dataset.number)
    .map((element) => element.classList.remove("act"));
}
function showInfo(dot, content) {
  let index = parseInt(dot.dataset.number) - 1;
  content[index].classList.remove("hide");
  content
    .filter((element) => element.dataset.number !== dot.dataset.number)
    .map((element) => element.classList.add("hide"));
}
window.addEventListener("DOMContentLoaded", async function () {
  const $imageWrapper = document.getElementById("image-wrapper");
  const $buttons = document.getElementById("buttons");
  const $desc = document.getElementById("desc");

  const { main, dots } = await fetchData();
  const image = await createImage(main);
  const floatingDots = await createFloatingDots(dots);
  const buttons = await createNavigationDots(dots);
  const content = await createContent(dots);

  $imageWrapper.append(image);
  $imageWrapper.append(...floatingDots);
  $buttons.append(...buttons);
  $desc.append(...content);

  floatingDots.forEach(($dot) => {
    $dot.addEventListener("click", () => {
      handleClick($dot, floatingDots, buttons);
      showInfo($dot, content);
    });
  });
  buttons.forEach(($dot) => {
    $dot.addEventListener("click", () => {
      handleClick($dot, buttons, floatingDots);
      showInfo($dot, content);
    });
  });
});
