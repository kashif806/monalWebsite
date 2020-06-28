function initMap() {
    var options = {
      zoom : 12,
      center : {lat:33.7598324,lng:73.0657058}
    }

    var map = new google.maps.Map(document.getElementById('map'),options);

    var marker = new google.maps.Marker({

      position:{lat:33.7598324,lng:73.0657058},
      map:map,
      icon: "fork.png",
    });

   };

  
  function myFunction(x) {
      x.classList.toggle("change");
    };

  $(".icon-container").click(function () {
    $("#menu ul").toggle(500);
  });   

  $(".navbar").hover(function () {
    $(this).css({
           
      
      "background-color": "black",
      // "border-bottom" : "yellow solid 5px",
      
    
      });
    


  },function (){
    $(this).css ({
        "background-color": "rgba(0,0,0,.5)",
            
      });

  });

  $('#datetimepicker_dark').datetimepicker({

      theme:'dark',
      step:15,

    });

  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  $("#reservation-icon").css({
      top:(viewportHeight-125)+"px",
      left:(viewportWidth-125)+"px",
    
  });

  // $(document).resize(function () {
    
  //   $("#reservation-icon").css({
  //     top:(viewportHeight-125)+"px",
  //     left:(viewportWidth-125)+"px",
    
  //   });
  
  // });

  $("#menu-icon").css({
      top:(viewportHeight-250)+"px",
      left:(viewportWidth-125)+"px",
    
  });

  console.log(viewportWidth , viewportHeight);


  $("#reservation-icon").hover(function () {
    
      $("#reservation-icon" ).animate({
        top:(viewportHeight-205)+"px",
        left:(viewportWidth-205)+"px",
        height: "200px",
        width: "200px",
        
        }, 500, function() {
        
      });

     $("#rt").animate({
        // top:"-=5",
        // left: "-=5",
        height: "160px",
        width: "160px",

        }, 500, function() {
        
      });    

  },function () {

    $("#reservation-icon" ).animate({
        top:(viewportHeight-125)+"px",
        left: (viewportWidth-125)+"px",
        height: "120px",
        width: "120px",
        
        }, 1000, function() {
        
      });

     $("#rt").animate({
        // top:"+=5",
        // left: "+=5",
        height: "80px",
        width: "80px",

        }, 1000, function() {
        
      });

  }

  );


  $("#menu-icon").hover(function () {
    
      $("#menu-icon" ).animate({
        top:(viewportHeight-330)+"px",
        left:(viewportWidth-205)+"px",
        height: "200px",
        width: "200px",
        
        }, 500, function() {
        
      });

     $("#mu").animate({
        // top:"-=5",
        // left: "-=5",
        height: "160px",
        width: "160px",

        }, 500, function() {
        
      });    

  },function () {

    $("#menu-icon" ).animate({
        top:(viewportHeight-250)+"px",
        left: (viewportWidth-125)+"px",
        height: "120px",
        width: "120px",
        
        }, 1000, function() {
        
      });

     $("#mu").animate({
        // top:"+=5",
        // left: "+=5",
        height: "80px",
        width: "80px",

        }, 1000, function() {
        
      });

  }

  );

  $("form").submit(function (e) {

    e.preventDefault();

    var err = false;

    if($("#datetimepicker_dark").val()==""){

      err= true;

      $("#dateErr").html('<small class="form-text text-danger"><strong>Date and Time is required.</strong></small>');
    }

    if($("#name").val()==""){

      err= true;

       $("#nameErr").html('<small class="form-text text-danger"><strong>Name is Required.</strong></small>');

    }

    if($("#example-tel-input").val()==""){

      err= true;

      $("#telErr").html('<small class="form-text text-danger"><strong>Landline/Mobile number is required.</strong></small>');    
    }
   
    if (!err){

      $("form").unbind("submit").submit();
    }

    });
