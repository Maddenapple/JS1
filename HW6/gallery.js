function openImage(event) {
    const target = event.target;
    const id = target.id.slice(-1);
    newPic(id);
}

function newPic(id) {
    const gallery = document.getElementsByClassName("gallery")[0];
    gallery.innerHTML = "";
    const image = document.createElement("img");
    image.id = `image-thumbnail-${id}`;
    image.src = `img/img${id}-640.jpg`;
    image.alt = `Изображение ${id}`
    image.setAttribute("onerror", "errorAlert();")
    gallery.appendChild(image);
    let img = document.querySelectorAll('.gallery > img')[0];
    img.addEventListener("error", function () {
        img.alt = 'Нет картинки!';
    });
};

function init() {
    const images = document.querySelectorAll(".thumbnails > img");
    const gallery = document.getElementsByClassName("gallery")[0];
    const image = document.createElement("img");

    for (let image of images) {
        image.addEventListener('click', openImage);
    }
}

window.addEventListener('load', init);