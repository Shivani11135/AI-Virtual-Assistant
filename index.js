let box=document.querySelector('.box');
let btn=document.querySelector('button');
// speakfunc for speaking
const   speakfunc=(input)=>{
let speakInput =   new SpeechSynthesisUtterance(input);
    // speakInput.rate=1;
    // speakInput.pitch=-2;
    // speakInput.volume=1;
speakInput.lang='en-IN';
window.speechSynthesis.speak(speakInput);
}
window.onload=()=>{
    
    speakfunc("hello i'm a virtual assistant");
   
    greetingfunc();
}
const greetingfunc=()=>{
    let date=new Date();
    let hour=date.getHours();
    console.log(hour);
    if(hour>=0&&hour<12){
        speakfunc(" good morning mam");
    }
    else if(hour>=12&&hour<16){
        speakfunc(" good afternoon sir");
    }
    else {
        speakfunc(" good evening sir");
    }
    }

    const startVoiceInput=()=>{
        if('webkitSpeechRecognition' in window){
       let recognition= new webkitSpeechRecognition();
       recognition.lang='en-US';
    //    accessing onresult event 
       recognition.onresult=(e)=>{

        
    let spokenText=e.results[0][0].transcript;
    
    handleCommands(spokenText.toLowerCase());

    
  box.classList.remove("btn-box");
    btn.innerHTML=`    <i class="fas fa-microphone-alt-slash" style="font-size: 40px;" ></i>`
}
       recognition.start();
    }else{
        alert("your browser does not  support SpeechRecognition ")
    }
}
btn.onclick=()=>{
    //  calling add ()function 
    box.classList.add("btn-box");
    btn.innerHTML=`<i class="fas fa-microphone-alt" style="font-size: 40px;" ></i>`
    startVoiceInput();
}


const handleCommands=(Command)=>{
    //  calling includes function
   if(Command.includes("hello")||Command.includes("hii")||Command.includes("hey")){
    speakfunc(" hello mam, how can i help you")
   }
   else if(Command.includes("who are you ")||(Command.includes("who made you"))||(Command.includes("what's your name"))){
    speakfunc(" i am a vitual assistant ,developed by shivani mam")
   }

else if(Command.includes("tell me time")||(Command.includes("time"))){
let time=new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'})
    speakfunc(time)
   }
else if(Command.includes("tell me date")||(Command.includes("date"))){
let date=new Date().toLocaleString(undefined,{day:'numeric',month:'long'})
    speakfunc(date)
   }

   else if(Command.includes("open the just for code youtube channel")||Command.includes("apna collage")||(Command.includes("channel")))
{
    speakfunc(" opening...  just for code  youtube channel ");
    window.open("www.youtube.com/@justforcode/playlists");
}
else if(Command.includes("open the  apnacollege website")||Command.includes("website"))
    {
        speakfunc(" opening the apna collage website ");
        window.open("https://www.apnaCollege.in");
    }
    else if(Command.includes("open  google")||Command.includes("google"))
        {
            speakfunc(" opening  google ");
            window.open("https://google.com", "_blank");
        }
        else if(Command.includes("open  chat gpt")||Command.includes("chatgpt"))
            {
                speakfunc(" opening...  chat gpt ");
                window.open("https://www.chatgpt.com");
            }
        else if(Command.includes("open the  facebook")||Command.includes("facebook"))
            {
                speakfunc(" opening  facebook ");
                window.open("https://www.facebook.com");
            }
            else if(Command.includes("open the  youtube")||Command.includes("youtube"))
                {
                    speakfunc(" opening  youtube ");
                    window.open("https://www.youtube.com/");
                }
                else if(Command.includes("open  calculater")||Command.includes("calculater"))
                    {
                        speakfunc(" opening  calculater ");
                        window.open('Calculator:///');
                    }
                    else if(Command.includes("open the  instagram")||Command.includes("instagram"))
                        {
                            speakfunc(" opening  instagram ");
                            window.open("https://www.instagram.com");
                        }
                        else{
                            speakfunc(`this is what i found on internet regarding  the ${Command}`);
                            window.open(`https://www.google.com/search?q=${Command}`);
                        }
}




