
/*--------------------SLIDER------------------------------*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



 /*--------------------FORMJSON------------------------------*/ 

function submitData(){
    var First_name=$('#firstname').val();
    var Last_name=$('#lastname').val();
    var Email=$('#email').val();
   

     jsonObject={
        "First_name":"",
        "Last_name":"",
        "Email":"",
     }

     jsonObject.First_name=First_name;
     jsonObject.Last_name=Last_name;
     jsonObject.Email=Email;
    
     var  str=JSON.stringify(jsonObject);
    document.getElementById('showJson').innerHTML=str;

 }
  /*-------------------- fetch CARD------------------------------*/ 

  const postSection = document.querySelector('#posts');
  const postTemplate = document.querySelector('#post-template');
  
  getData()
    .catch(err => console.error(err));
  
  async function getData() {
    const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postStream.json();
    let i = 0;
    
    // throw 'Get Data Error';
    // console.log(posts);
  
    posts.forEach(post => {
      i++;
      if(i < 22) {
        const title = post.title;
        const body = post.body;
  
        fetch('https://unsplash.it/300/200')
          .then(res => res.blob())
          .then(blob => {
            const newPost = document.importNode(postTemplate.content, true);
            const postTitle = newPost.querySelector('.post__title');
            const postBody = newPost.querySelector('.post__body');
            const postImg = newPost.querySelector('.post__img');
  
            // throw 'Image Fetch Error';
  
            postImg.src = URL.createObjectURL(blob);
            postTitle.innerText = title;
            postBody.innerText = body;
            postSection.appendChild(newPost);
          })
          .catch(err => console.error(err));
      }
    })
  }
  

 /*--------------------Footer------------------------------*/ 
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});







































// let img_slider = document.getElementsByClassName('img_slider');
// let etape =0;
// let nbr_img = img_slider.length;
// let prev=document.querySelector('.prev')
// let next=document.querySelector('.next')

// function Active(){
//     for(let i=0;i<img_slider.length;i++){
//         img_slider[i].classList.remove('active');
//     }
// }
// suivant.addEventListener('click',function(){
//     etape ++;
//     if(etape>=nbr_img){
//         etape = 0;
//     }
//     Active();
//     img_slider[etape].classList.add('active')
// })
// precedant.addEventListener('click',function(){
//     etape--;
//     if(etape < 0){
//       etape = nbr_img -1;
//     }
//     Active();
//     img_slider[etape].classList.add('active');
// })
// setInterval(function(){
//     etape ++;
//     if(etape>=nbr_img){
//         etape = 0;
//     }
//     Active();
//     img_slider[etape].classList.add('active')

// },3000)


