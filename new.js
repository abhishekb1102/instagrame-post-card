let imgg = document.querySelector('.imm')
let instapost = document.querySelector('.image')
let like = document.querySelector('.fa-heart')

let imgshow = 1;
let likeshow =1;



let showImage = () => {
    if (imgshow == 1) {
      imgg.style.display = "block";
      like.style.color='red'
      imgshow = 0;

    } else {
      imgg.style.display = "none";
      imgshow = 1;
    }
  };

  let select =()=>{
    // like.style.color='red'
    if (likeshow == 1) {
      // like.style.display = "block";
      like.style.color='red'
      likeshow = 0;

    } else {
      like.style.color = "white";
      likeshow = 1;
    }
    
  }

  instapost.addEventListener("dblclick", showImage);
  like.addEventListener("click", select);

