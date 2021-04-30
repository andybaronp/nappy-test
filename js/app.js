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
  let template = dots.map(({ id, lat, lon }) => {
    return stringToHTML(
      `<div class="btn up" style="top:${lat}%;left:${lon}%">${id}</div>`
    );
  });
  return template;
}
async function createNavigationDots(dots) {
  let template = dots.map(({ id }) => {
    return stringToHTML(
      `<div class="btn botton" data-number="${id}">${id}</div>`
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
});
