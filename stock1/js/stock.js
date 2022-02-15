var setPassword = "admin";
var currentstock = 1000;
var count = 0;

function access(){
    var userInput = document.getElementById("userLogin").value  

    count++;

    for(var i = 0; i < 3; i++)
    {

        if(setPassword==userInput)
        {

            document.getElementById("feedback").innerHTML="Access: Granted";
            openMenu();
            {
                break;
            }
        }
        else{
            document.getElementById("feedback").innerHTML="Access: Denied, Try Again";
           
            }
            if(count == 3){
                document.getElementById("feedback").innerHTML="Access: Denied, Please Contact Admin";  
            
            document.getElementById("userLogin").disabled=true;
            document.getElementById("buttonLogin").disabled=true
            
            }

    }



}

function openMenu(){
    setTimeout(function(){
        location.replace("#menu")

    }, 2000);
}

function stocklevels(){
    document.getElementById("stockTotal").innerHTML="The current stock levels are: " + currentstock;

}

function add(){
    
    var addSt = 0;
    
    addSt = parseInt(document.getElementById("addS").value);
    
    currentstock = currentstock + addSt;
    
    document.getElementById("confirmAdd").innerHTML="Details: You have added " + addSt + " New stock total is: " + currentstock

    stocklevels();
}

function del(){

    var delSt = 0;
    
    delSt = parseInt(document.getElementById("delS").value);
    
    currentstock = currentstock - delSt;
    
    document.getElementById("confirmDel").innerHTML="Details: You have removed " + delSt + " New stock total is: " + currentstock

    stocklevels();
}

function closeMenu(){
    
    document.getElementById("confirmLogoff").innerHTML = "Details: Thanks for using :)"

    setTimeout(function(){
        location.replace("#login")

    }, 2000);

}