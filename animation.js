
const profileFront=$(".profile-front-box");
const profileBack=$(".profile-back-box");

function onRefresh(){
    profileBack.addClass("profile-back-box-after");
    profileFront.hover(()=>{
        profileFront.css("opacity", "1");
    },()=>{
        profileFront.css("opacity", "0");
    });
}

onRefresh();


// ---------------------------------------- GSAP Timeline --------------------------------------------- //





const t1=gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({end: "top -10%", scrub:2});
t1.to(".skill-1", {
    scrollTrigger:{
        trigger:".skill-1"
    },
    x:50,
    y:-100,
    rotation:-20,
})
    .to(".skill-2",{
        scrollTrigger:{
            trigger:".skill-2"
        },
        x:100,
        y:50,
        rotation:15,
    })
    .to(".skill-3",{
        scrollTrigger:{
            trigger:".skill-3"
        },
        x:-100,
        y:-50,
        rotation:-20,
    })
    .to(".skill-4",{
        scrollTrigger:{
            trigger:".skill-4"
        },
        x:100,
        y:-50,
        rotation:-15,
    })
    .to(".skill-5",{
        scrollTrigger:{
            trigger:".skill-5"
        },
        x:-10,
        y:-100,
        rotation:15,
    })
    .to(".skill-6",{
        scrollTrigger:{
            trigger:".skill-6"
        },
        x:100,
        y:20,
        rotation:-5,
    })
    .to(".skill-7",{
        scrollTrigger:{
            trigger:".skill-7"
        },
        x:-100,
        y:50,
        rotation:15,
    })
    .to(".skill-8",{
        scrollTrigger:{
            trigger:".skill-8"
        },
        x:50,
        y:100,
        rotation:-15,
    })


ScrollTrigger.create({
    trigger:"#skills-section",
    start:"top top",
    end:"bottom top",
    pin:true,
    pinSpacing:false 
});
