let imgg = document.querySelector('.imm')
let instapost = document.querySelector('.image')
let like = document.querySelector('.fa-heart')

let imgshow = 1;



let showImage = () => {
    if (imgshow == 1) {
      imgg.style.display = "block";
      imgshow = 0;
    } else {
      imgg.style.display = "none";
      imgshow = 1;
    }
  };

  instapost.addEventListener("dblclick", showImage);

