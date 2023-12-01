
function de(){
    var n=document.getElementById("in").value
    console.log(n)
    if(n==""){
        alert("Enter number")
    }
    else if(n==0){
        alert("Enter positive number")
    }
    else{
       let a=[]
       for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            a.push("*")
        }
       a.push("<br>")
       }
       let b=document.getElementById("re")
       b.innerHTML=a
    }
}
