const  mainpge = $("#mainpge");
function mainpgeHide(){
  mainpge.hide();
}
function mainpgeShow(){
  mainpge.show();
}
function mainpgeRemove(){
  mainpge.remove();
}

    

    const main = $("#main");
    const nameInput = $("#name");
    const imgInput = $("#img");
    const descriptionInput = $("#description");
    
    
    const users = [
        { Name: "mmmnal", img: "mmmnal.jpg", description: "p" },
        { Name: "ahmad", img: "ahmad.jpg",description : "p" }];
    
        function mainpage(array) {
          for (let i = 0; i < array.length; i++) {
            const div= $(`<div class="secondryContainer">
            <li>Nam: ${array[i].Name}</li>
               <img src="${array[i].img}">
               <p> ${array[i].description}></p>
            </div>`);
            main.append(div);
          }
        }
    
        mainpage(users);

        
        function hideHandler() {
          main.hide();
        }
        
        function showHandler() {
          main.show();
        }
        

        function add() {
          const newuser= {
            name: nameInput.val(),
            img: imgInput.val(),
            description: descriptionInput.val(),
          };
         users.push(newuser);
         mainpage([newuser]);
        }
        
