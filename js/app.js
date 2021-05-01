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
  let template = dots.map(({ content }) => {
    let { title, description } = content;
    return stringToHTML(`<div>
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
    $dot.addEventListener("click", () =>
      handleClick($dot, floatingDots, buttons)
    );
  });
  buttons.forEach(($dot) => {
    $dot.addEventListener("click", () =>
      handleClick($dot, buttons, floatingDots)
    );
  });
});
