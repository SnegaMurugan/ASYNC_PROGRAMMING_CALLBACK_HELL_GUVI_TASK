const countdown=(number,callback)=>{
  setTimeout(()=>{
    if(number>0){
      document.getElementById('countdown').innerHTML=number;
      countdown(number-1,callback)
    }
   else{
      callback()
    }
  },1000);
}

const displayMessage=()=>{
  document.getElementById('countdown').innerText='Happy Independence day';

}

countdown(10,displayMessage)



