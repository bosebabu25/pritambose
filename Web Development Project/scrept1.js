$(document).ready(function(){
    let array=['privacy-section-1','privacy-section-2','privacy-section-3','privacy-section-4','privacy-section-5','privacy-section-6','privacy-section-7','privacy-section-8','privacy-section-9','privacy-section-10'];
    for(let i=1;i<=10;i++)
    {
        $(`.${array[i]}`).hide();
    }
    for(let i=0;i<10;i++)
    {
        $(`#${array[i]}`).click(function(){
            for(let j=0;j<10;j++)
            {
                if(i==j)
                    $(`.${array[j]}`).show();
                else
                    $(`.${array[j]}`).hide();
            } 
        });
    }
});


$(document).ready(function(){
    let array=['refund-section-1','refund-section-2'];
    for(let i=1;i<=1;i++)
    {
        $(`.${array[i]}`).hide();
    }
    for(let i=0;i<2;i++)
    {
        $(`#${array[i]}`).click(function(){
            for(let j=0;j<2;j++)
            {
                if(i==j)
                    $(`.${array[j]}`).show();
                else
                    $(`.${array[j]}`).hide();
            } 
        });
    }
});

$(document).ready(function(){
    let array=['terms-section-1','terms-section-2','terms-section-3','terms-section-4'];
    for(let i=1;i<=4;i++)
    {
        $(`.${array[i]}`).hide();
    }
    for(let i=0;i<4;i++)
    {
        $(`#${array[i]}`).click(function(){
            for(let j=0;j<4;j++)
            {
                if(i==j)
                    $(`.${array[j]}`).show();
                else
                    $(`.${array[j]}`).hide();
            } 
        });
    }
});

$(document).ready(function(){
    let array=['certificates-section-1','certificates-section-2'];
    for(let i=1;i<=1;i++)
    {
        $(`.${array[i]}`).hide();
    }
    for(let i=0;i<2;i++)
    {
        $(`#${array[i]}`).click(function(){
            for(let j=0;j<2;j++)
            {
                if(i==j)
                    $(`.${array[j]}`).show();
                else
                    $(`.${array[j]}`).hide();
            } 
        });
    }
});

$(document).ready(function(){
    for (let i = 1; i < 7; i++) {
        let card='#card'+i;
        let cardImg='#card-'+i+'-img';
        let dollar='#dollar'+i;
        let urgent='#urgent'+i;
        $(card).hover(function(){
            $(dollar).css('border-radius','50%');
            $(cardImg).css('background-size','120%');
            $(cardImg).css('background-position','center');
            $(urgent).show().animate({left:"20px"},"slow");
            $(cardImg).css('transition','all 0.5s ease-in-out');
        },function(){
            $(dollar).css('border-radius','15px');
            $(cardImg).css('background-size','100%');
            $(urgent).animate({left:"0px"},"slow");
            $(urgent).hide();
        });     
    }
    
});

$(document).ready(function(){
    $('.testimonial-carousel').slick({
        dots: false,
        arrows:true,
        autoplay:true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


$(document).ready(function(){
    $('.section-6-cards').slick({
        dots: true,
        arrows:true,
        autoplay:true,
        infinite: true,
        speed: 300,
        responsive: [
    {
      
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay:true,
        dots: true
      }
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
        
      }
    }]
    });
});

$(document).ready(function() {
  $("#lightGallery,#eventsGallery").lightGallery({
      share: false
      
  });
});
$(document).ready(function() {
  $("#NFWGallery,#celebrate").lightGallery({
      share: false
      
  });
});


$(document).ready(function(){
    for(let i=1;i<5;i++)
    {
        let overlayButton='#overlay-button-'+i;
        let eventContent="#events-content-"+i;
        let eventImgOverlay=".event-img-overlay-"+i;
        
        $(overlayButton).hide();
        $(`#img-container-${i}, #events-content-${i}`).hover(function(){
            $(eventContent).css({"background":"#563f4f","color":"#fff"});
            $(eventImgOverlay).animate({"height":"100%"},"slow");
            $(overlayButton).show();
            },function()
            {
                $(eventContent).css({"background":"#f2f2f2","color":"#000"});
                $(eventImgOverlay).animate({"height":"0%"},"slow");
                $(overlayButton).hide();
            }
        );
    }
});

function tabs(id,bid)
    {
        let tabheader = document.getElementsByClassName('tabs-header');
        let tabbodi = document.getElementsByClassName('tabs-bodi');
        
        for(let i=0;i<tabheader.length;i++)
        {
            tabbodi[i].style.display = "none";
        }
        
        document.getElementById(id).innerHTML="<span class='faq-active'></span>"+id;
        document.getElementById(bid).style.display="block";
    }

$(document).ready(function(){
   let tabs=['#food','#collection','#volunteers','#sponsors','#donation'];
   let ques=['#q1','#q2','#q3','#q4','#q5','#q6','#q7','#q8','#q9','#q10'];
   let tab='';
   let i='';
   
    
    for(i of ques)
    {
        $(i).siblings().hide();
        $(i).hover(function(){
            $(this).css('cursor','pointer');
        });
        $(i).click(function(){
            if($(this).siblings(':visible').length===0)
                $(this).siblings().show('slow');
            else
                $(this).siblings().hide('slow');
        });
    }
   for(tab of tabs)
   {
       if(tab!=='#food')
       $(`${tab}-body`).hide();
       $(tab).hover(function(){
            $(this).css('cursor','pointer');   
       });
           
    $(tab).click(function(){
        
        for (i of tabs){
            if(`#${this.id}`===i)
            {
                $(`${i}-body`).show();
                $(`${i}-span`).addClass('faq-active'); 
    
            }
            else
            {
                console.log(i);
                $(`${i}-body`).hide();
                $(`${i}-span`).removeClass('faq-active');
            }
        }
     
    });
   }
   


});


$(document).ready(function(){
    $('.partners').slick({
        dots: false,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 1200,
        cssEase:'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        
        responsive: [
            {
            breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay:true,
                infinite: true,
                dots: true
              }
            },
            
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
})});



// NFW trainings Carousel
$(document).ready(function(){
    $('#NFWGallery,#eventsGallery').slick({
        dots: true,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 3200,
        cssEase:'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        
        responsive: [
            
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
})});

$(document).ready(function(){
    $('#celebrate').slick({
        dots: true,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 3200,
        cssEase:'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        
        responsive: [
            
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
})});


$(document).ready(function(){
    $('.play-video').click(function(){
        if ( $('#pause-video').css('display') == 'none' )
        {
            $('#vid-home').trigger('play');
            $('#pause-video').show();
            $('#play-video').hide();
            $('.vid-status').html('Pause Now');
            $('#vid-title').hide();
            
        }else{
            $('#vid-home').trigger('pause'); 
            $('#play-video').show();
            $('#pause-video').hide();
            $('.vid-status').html('Play <br>Now');
            $('#vid-title').show();
        }
     
    });
});


$(document).ready(function(){
    $('.chapters-cards').hover(function(){
         $(this).addClass('shadow');
         $(this).css('border','1px solid black');
    },function(){
        $(this).removeClass('shadow');
        $(this).css('border','0px solid black');
    });
  
});


$(document).ready(function(){
    $('#news-letter-alert-box').hide();
   $('.subscribe').click(function(){
       let email=$('.newsletter').val();
       let data={"email":email};
      $.ajax({
         data: data,
         url:"",
         method:"POST",
         
         success:function(response)
         {
             $('#news-letter-alert-box').show();
            if($.trim(response)==='True')
            {
                $('#news-letter-alert-box').removeClass('alert-danger');
                $('#news-letter-alert-box').addClass('alert-success');
                $('.news-alert').html('You have sucessfully subscribed to our newsletter');
                
            }
            else
            {
                $('#news-letter-alert-box').removeClass('alert-success');
                $('#news-letter-alert-box').addClass('alert-danger');
                $('.news-alert').html(response);
            }
            
            
         },
         error:function(response)
         {
             $('#news-letter-alert-box').show();
             $('#news-letter-alert-box').addClass('alert-danger');
             $('.news-alert').html(response);
         }
      }); 
   }); 
});

// Banner paltes served statistics

$(document).ready(function(){
   $('.plates-counter').counterUp({
       time:4500
   }); 
});

// dependency selection in volunteers registration

$(document).ready(function(){
   $('.state').change(function(){
       let state=$('.state').val();
       let url="";
      $.ajax({
          url:url,
          method:"post",
          data:{'state':state},
          success:function(response){
              let chapters=response;
              $('.chapters').html(chapters);
          },
          error:function(response){
              console.log('failed');
          }
      });
   }); 
});
$( document ).ajaxStart(function() {
  $( ".status-load" ).text( "Loading..." );
});
// navigate forms in join-with-us form

$(document).ready(function(){
    $('.overlay').hide();
   $('.navigate-forms').change(function(){
      let currentUrl=window.location.href;
      let selected=$('.navigate-forms').val();
      if((selected==="join-with-us")&&(currentUrl===""))
      {
          $('.overlay').show();
          window.location.href='';
      }
      if((selected==="new-chapter")&&(currentUrl===""))
      {
          $('.overlay').show();
          window.location.href='';
      }
      console.log(selected);
   }); 
});


$(document).ready(function(){
    $(".paySucessPage").hide();
    $(".payFailPage").hide();
   let arrays=[".donorName",".donorEmail",".donorMobile",".donorAmount",".donorLocation",".donorCurrency"];
   let counter=0;
   for(let i=0;i<=5;i++)
   {
       $(arrays[i]).keyup(function()
       {
          if($(arrays[i]).val()==="")
        {
          $(arrays[i]).addClass("border border-danger");
        }
        else
        {
            $(arrays[i]).removeClass("border border-danger");
            $('.Donate').attr("disabled",false);
        } 
       });
       
       
   }
           
          
});





$('.donorAmount').on("focusout",function(){
   let amount=parseInt($('.donorAmount').val());
   if(amount<=0)
   {
       $('.donorAmount').addClass("border border-danger");
       $('#amountSmall').html("Amount should be greater than zero");
   }
   else
   {
       $('.donorAmount').removeClass("border border-danger");
        $('#amountSmall').html("Ex:$5000");
   }
});

$('.donorEmail').on("focusout",function(){
   let email=$('.donorEmail').val();
   let regex=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(!regex.test(email)) {
       $('.donorEmail').addClass("border border-danger");
       $('#emailSmall').html("Email should be valid");
   }
   else
   {
       $('.donorEmail').removeClass("border border-danger");
       $('#emailSmall').html("Ex:jhondoe@gmail.com");
   }
   
});

// showing dual address on header 

$(document).ready(function(){
    $('.second-address').hide();
   $('.first-address').click(function()
   {
       if($('.second-address').is(":visible"))
       {
           $('.second-address').hide();
           $('.first-address').html("show more");
       }
       else
       {
           $(".second-address").prepend("<br>");
           $('.second-address').show();
           $('.first-address').html("show less");
       }
       
   });
});

// Contact Us page Dropdown dependent maps display logic

$(document).ready(function(){
    let cities=["Kolkata, north-South 24 Parganas"];
    for (let city of cities)
    {
     city=="Coimbattore"?$('.'+city).show():$('.'+city).hide();
    }
   $('.mapChapter').on("change",function(){
       selectedCity=$(this).val();
       for (let city of cities)
       {
           city==selectedCity?$('.'+city).show():$('.'+city).hide();
       }
   }); 
});


$(document).ready(function(){
    $('.reviewSucess').hide();
    $('.reviewFail').hide();
   $('.reviewBtn').click(function(){
      let name=$('.name').val();
      let email=$('.email').val();
      let mobile=$('.mobile').val();
      let message=$('.message').val();
      let reviewData={name:name,email:email,mobile:mobile,message:message};
      if((name==="")||(email==="")||(mobile==="")||(message===""))
      {
         $('.reviewBtn').attr("disabled",true);
         let arrays=[".name",".email",".mobile",".message"];
         arrays.forEach(validate);
         function validate(item)
         {
             if($(item).val()==="")
             {
                 $(item).addClass("border border-danger");
             }
             else
             {
                 $(item).removeClass("border border-danger");
             }
         }
         alert('Some of fields are empty.Please fill form properly');
      }
      else
      {
      $.ajax({
        data:reviewData,
        // url:'',
        method:'POST',
        success:function(response)
        {
           if(response=="done")
           {
               $('.reviewForm').hide();
               $('.reviewSucess').show();
               $('.reviewBtn').hide();
               setTimeout(function(){$('#exampleModal').modal('hide')},3000);
           }
           else
           {
              $('.reviewForm').hide();
              $('.reviewFail').show();
              $('.reviewBtn').hide();
              console.log(response);
              setTimeout(function(){$('#exampleModal').modal('hide')},3000);
           }
        },
        error:function(response)
        {
           console.log(response);  
        }
      });
     }
   }); 
});

// email validation

$('.email').on("focusout",function(){
   let email=$('.email').val();
   let regex=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(!regex.test(email)) {
       $('.email').addClass("border border-danger");
       alert("Email should be valid");
   }
   else
   {
       $('.donorEmail').removeClass("border border-danger");
       $('#emailSmall').html("Ex:jhondoe@gmail.com");
   }
   
});

// validating each element

$(document).ready(function(){
    $(".paySucessPage").hide();
    $(".payFailPage").hide();
   let arrays=[".name",".email",".mobile",".message"];
   let counter=0;
   for(let i=0;i<=5;i++)
   {
       $(arrays[i]).keyup(function()
       {
          if($(arrays[i]).val()==="")
        {
          $(arrays[i]).addClass("border border-danger");
        }
        else
        {
            $(arrays[i]).removeClass("border border-danger");
            $('.reviewBtn').attr("disabled",false);
        } 
       });
       
       
   }
   $(".showmore").click(function(){
       $(this).hide();
      $(".more-content").removeClass("invisible");
      $(".more.content").addClass("visible");
   });        
          
});