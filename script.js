AOS.init({
  offset: 120,
  duration: 2000,

});

document.querySelectorAll('img')
.forEach((img) =>
  img.addEventListener('Load',() =>
  AOS.refresh()
  )
)

// JS To Dispaly Navbar On Clicking The Menu
  const toggle=document.getElementById('toggle-collapse');
  const navbar=document.getElementById('nav')

  navbar.addEventListener('click', ()=>{
    navbar.classList.toggle('collapse')
  })

  // Read More Button For Blogpost
  
function myfunc(){
  window.location='blog.html';
}

