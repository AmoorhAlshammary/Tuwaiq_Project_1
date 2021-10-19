

$(document).ready(function(){
  $('.Box').click(function(){
  $('#mainpage').hide()
})
$(document).click(function(){
  $('#mainpage').show()
})


    const mainbage=$()
    const nameInput = $("#name");
    const imgInput = $("#img");
    const descriptionInput = $("#description");
    
    
    const users = [
        { Name: "mmmnal", img: "mmmnal.jpg", description: "p" },
        { Name: "ahmad", img: "ahmad.jpg",description : "p" }];
    
    function renderArr (array) {
      for (let i = 0; i < array.length; i++) {
        const div = $ <ul`>
        <li> Nam :${array[i].Name} img : ${array[i].img} description :${array[i].description}"></li>
    </ul>
 
    mainpage.append(div);



      }
    }
    renderArr (users)

const mainpage = $("#mainpage")


function hideHandler() {

    mainpage.hide();
    console.log()
  }
  
  function showHandler() {
   
    mainbage.show();
  }
  