

$(document).ready(function(){
    $('.navbar-toggler').on('click',function(){
    $('nav ul li').toggleClass('showing');
    $('.dropdown div').toggleClass('showing');
   

    })
    
    })

    
$(document).ready(function(){
    $('.dropdown-toggle').on('click',function(){
    
     $('.dropdown div a').toggleClass('showing');

    })
    
    })