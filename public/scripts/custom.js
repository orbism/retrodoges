jQuery(function($){
    
 $('#t').t({
  
  delay:2,                  
  
  speed:50,                 
  speed_vary:false,         
  
  beep:false,               
  
  mistype:0,                
  locale:'en',              
  
  caret:'\u2589',           
  blink:true,               
  blink_perm:true,          
  repeat:0,                  
  tag:'span',                
  pause_on_click:false,       
  pause_on_tab_switch:false,  
     
  init:function(elm){},        
  typing:function(elm,chr_or_elm,left,total){},
  fin:function(elm){
      $('#t').find('.t-caret').css({opacity:0});
  }      
     
 
 });
    
});