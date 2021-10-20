const  mainpge = $("#mainpge");
    const nameInput = $("#name");
    const imgInput = $("#img");
    const descriptionInput = $("#description");
    
    const users = [
      { Name: "Faisal", img: "pp.jpg", description: "supervisor" },
      { Name: "Amirah", img: "aa.jpg",description : "painter" }
    ];
    function renderArr (array) {
      for (let i = 0; i < array.length; i++) {
        const div= $(`<div class="secondryContainer">
        <img src="${array[i].img}">
        <li>Nam: ${array[i].Name}</li>
           <p> ${array[i].description}></p>
         <button id="del" onclick="deleteFoodAray (${i})">حذف</button>
        </div>`);
        mainpge.append(div);
      }
    
    }

    renderArr(users);

    function adduser(){
      const newuser= {
        Name: nameInput.val(),
        img: imgInput.val(),
        description: descriptionInput.val(),
      };
      users.push(newuser);
      renderArr([newuser]);
    }
    
    function mainpgeHide(){
      mainpge.hide();
    }
    function mainpgeShow(){
      mainpge.show();
    }
    function mainpgeRemove(){
      mainpge.remove();
    }
    function deleteFoodAray(indexx){
      users.splice(indexx,1);
      mainpge.html("");
     renderArr(users);
    }
   