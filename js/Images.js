function GenreFilter(genre, event) {
  const imagesContainer = document.getElementById("pictureContainer");
  imagesContainer.innerHTML = "";

  const genreBtn = document.getElementsByClassName("genre-btn");

  if (event === undefined) {
    genreBtn[0].setAttribute("class", "genre-btn selected-genre");
  } else {
    for (let i = 0; i < genreBtn.length; i++) {
      genreBtn[i].setAttribute("class", "genre-btn");
    }
    const target = event.target;
    target.setAttribute("class", "genre-btn selected-genre");
  }

  ImagesData.map(img => {
    if (img.genre === genre || genre === ALL) {
      const box = document.createElement("div");
      box.className = "box";

      // Image Source
      const image = document.createElement("img");
      image.src = img.src;
      box.appendChild(image);

      const imagedesc = document.createElement("div");
      imagedesc.className = "img-desc clearfix";
      box.appendChild(imagedesc);

      const imagetitle = document.createElement("div");
      imagetitle.className = "image-title";
      imagedesc.appendChild(imagetitle);

      // Image Name
      const imagename = document.createElement("a");
      imagename.href = "#";
      imagename.innerHTML = img.name;
      imagetitle.appendChild(imagename);

      const imageoption = document.createElement("div");
      imageoption.className = "image-option";
      imagedesc.appendChild(imageoption);

      const save = document.createElement("a");
      save.id = "saveBtn";
      save.innerHTML = "Save";
      imageoption.appendChild(save);

      const like = document.createElement("a");
      like.id = "likeBtn";
      like.innerHTML = "Like";
      imageoption.appendChild(like);

      imagesContainer.appendChild(box);
    }
  });
}

GenreFilter(ALL);
