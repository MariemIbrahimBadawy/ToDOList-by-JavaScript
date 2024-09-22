



let Add = document.querySelector("#add");

Add.addEventListener('click',function(){
    var t = document.querySelector("#todo-input").value
    
    if (t != ""){
      document.querySelector("#tasks").innerHTML +=t + " <br><hr>"
      document.querySelector("#todo-input").value = ''

      // document.querySelector("#tasks").innerHTML += t
    //   var arry = [1,3]
    //   for(var i=0 ; i< arry.length; i++){
       
    //    }
    }
})





















