
  $(function($){ 
 
    $(document).ready(function() {    

      $('#shopify-section- #tabs li a:not(:first)').addClass('inactive');
      $('#shopify-section- .tabs-contents .containers').hide();
      $('#shopify-section- .tabs-contents .containers:first').show();

      
        
      var texts = $('#shopify-section- #tabs li a:first').text();
      
      $('#shopify-section- #tabs li a').click(function(){
          var t = $(this).attr('id');
        $('#shopify-section- .mobile-compare-title').trigger('click');
        
       texts = $(this).text();
        
               
        $('#shopify-section- .mobile-compare-title span').text(texts);
        
        if($(this).hasClass('inactive')){ //this is the start of our condition 
          $('#shopify-section- #tabs li a').addClass('inactive');           
          $(this).removeClass('inactive');

          $('#shopify-section- .tabs-contents .containers').hide();
          $('#shopify-section- #'+ t + 'c').fadeIn('slow');
       }
      });
    
 
      $('#shopify-section- .mobile-compare-title').click(function(){
        $(this).toggleClass('opened');
 
      });
                                       
      
	  
    });
    
    
    
  });