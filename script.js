var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: ".swiper-pagination", 
      type: "bullets",
      clickable: true
    },
   loop: true ,
   centeredSlides : true,
   spaceBetween: 15,
   on: {
    resize: function enableOnlyMobile(swiper){
        // Disable the slider when the window width is less than or equal to 960
        if(320 < window.innerWidth){
            swiper.disable()
            swiper.el.classList.add('-non-slider')
        }else{
            swiper.enable()
            swiper.el.classList.remove('-non-slider')
        }
    },
}
  });
  function toggleText() {
    

    // Get all the elements from the page
    let points =
        document.getElementById("points");

    let showMoreText =
        document.getElementById("moreText");
    let buttonText =
        document.getElementById("textButton");



    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers
    if (points.style.display === "none") {

      
        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "flex";

        buttonText.innerHTML = '<img class="img-hide-but" src="img/expand-douw.svg" id="imgButton"> <div class="text-but">Показать все</div>';
 
        // Change the text on button to 
        // 'Show More'
 

        
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {
        
        // Show the text between the
        // span elements
        showMoreText.style.display = "flex";

        // Hide the dots after the text
        points.style.display = "none";
        
        buttonText.innerHTML = '<img class="img-hide-but" src="img/expand_up.svg" id="imgButton"> <div class="text-but">Скрыть</div>';

        // Change the text on button
        // to 'Show Less'


    
    }
}