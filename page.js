$(document).ready(function(){
   $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });


     if(localStorage.getItem("selected_device")){
       var id = localStorage.getItem("selected_device");
       $('.d'+id).addClass('selected');
       if(id==1){
         $('.Mi5.hide').removeClass('hide');
       }else if(id==7){
         $('.PB.hide').removeClass('hide');
       }else{
         $('.RN3.hide').removeClass('hide');
       }
     }


     $('.device').on('click', function(){

       var id = $(this).data('id');
       $('.device.selected').removeClass('selected');
       localStorage.setItem("selected_device",id);
       $(this).addClass('selected');

       $('.site').addClass('hide');
       if(id==1){
         $('.Mi5.hide').removeClass('hide');

         chrome.storage.sync.set({name:'Bob'}, function() {
  console.log('Name saved');
});

         chrome.tabs.create({
              active: false,
              url: 'http://www.mi.com/in/hdindex/openbuy/?selected_device=1'
          }, function(tab) {
              chrome.tabs.executeScript(tab.id, {
                  code: 'localStorage.setItem("selected_device",id);'
              }, function() {
                  // chrome.tabs.remove(tab.id);
              });
          });
       }else if(id==7){
         $('.PB.hide').removeClass('hide');
       }else{
         $('.RN3.hide').removeClass('hide');
       }
     })
});
