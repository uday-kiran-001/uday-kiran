
const messages= document.getElementById("idiot");
const replies={
    botHello:"I just wanted to say Hello.", 
    botLike:"I like this website.",
    botHire:"I'd like to hire you.",
    botEmail:"Send a message.",
    botOthers:"Other options?"
}


function contact(){
    
    console.log("Clicked");
    $(".chatbot-messagebox").html(
        "<div class='message' >Hi, I'm Uday's bot! 🤖</div>"+
        "<div class='message' >I’m just like Uday, but a far better conversationalist 😉</div>" +
        "<div class='message' >How can I help you today?</div>" +
        "<button id='botHello' class='btn btn-light' onclick='choice(this.id)'>I just wanted to say Hello.</button>" +
        "<button id='botLike' class='btn btn-light' onclick='choice(this.id)'>I like this website.</button>" +
        "<button id='botHire' class='btn btn-light' onclick='choice(this.id)'>I'd like to hire you.</button>"
    );
    $('.chatbot-floor').toggleClass("bot-active  animate__animated animate__fadeInUpBig");

}


function choice(id){

    let message=respondToChat(id);
    let arrayOfmessages=message.split(".");
    console.log("Button clicked",id ,  message);
    
    $(".chatbot-messagebox").append(
        "<div class='user-message' >"+replies[id]+"</div>"+
        "<div class='invisible-message' ></div>"
    );
    autoScroll();

    if(message.length>0){
        arrayOfmessages.forEach((item,index)=>{
            setTimeout(()=>{
                $(".chatbot-messagebox").append('<div class="message" >' + item + '</div>');
                autoScroll();
            },1000*index);
        })
    }


    if(id==="botEmail"){
        $(".chatbot-messagebox").html(
            '<div class="email-form" >'+
                '<form action="mailto:notimportantwith999@gmail.com" method="post" enctype="text/plain">' +
                    '<label>Name</label><br>' +
                    '<input type="text" name="Name"/><br>' +
                    '<label>Email</label><br>' +
                    '<input type="email" name="Email"/><br>' +
                    '<label>Description</label><br>' +
                    '<textarea type="text" name="descrption" rows="5"></textarea><br><br>' +
                    '<button class="btn btn-dark" type="submit" value="Send">Send</button>' +
                    '<button class="btn btn-secondary" type="reset" value="Reset">Reset</button>' +
                '</form>'+
            '</div>' 
        );
    }
    else if(id!=="botHire"){
        const delay=id==="botOthers" ? 1000:3500;
        Object.entries(replies).forEach(([key,value])=>{
            setTimeout(()=>{
                console.log(key,value,id);
                if(key!==id && key!=="botEmail" && key!=="botOthers"){
                    $(".chatbot-messagebox").append('<button id="'+ key +'" class="btn btn-light" onclick="choice(this.id)">' + value + '</button>');
                    autoScroll();
                }else if(id==="botOthers" && key!==id && key!=="botEmail" ){
                    $(".chatbot-messagebox").append('<button id="'+ key +'" class="btn btn-light" onclick="choice(this.id)">' + value + '</button>');
                    autoScroll();
                } 
            },delay);
        });
    }else{
        setTimeout(()=>{
            $(".chatbot-messagebox").append('<button id="botEmail" class="btn btn-light" onclick="choice(this.id)">' + replies["botEmail"]+ '</button>');
            autoScroll();
        },3000);
        setTimeout(()=>{
            $(".chatbot-messagebox").append('<button id="botOthers" class="btn btn-light" onclick="choice(this.id)">' + replies["botOthers"] + '</button>');
            autoScroll();
        },3500);
    }
    


}

function respondToChat(input){
    switch(input){
        case "botHello": return "Well hello there!.Thanks for saying hi 😁.I hope you've enjoyed browsing my work.Can I help you with anything else?";
        case "botHire": return "Ok, great!.Exciting times 🕺.Send me a message and lets chat further";
        case "botLike": return "Thanks❤️.If are intrested in similar kind of work.You can follow me over here!.Can I help you with anything else?";
        default: return "";
    }
}


function autoScroll(){
    console.log(messages.clientHeight, messages.scrollTop, messages.scrollHeight);
    if(messages.clientHeight+messages.scrollTop !=messages.scrollHeight){
        messages.scrollTop=messages.scrollHeight;
    }
}

