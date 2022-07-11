let p =["Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and whatinspires you. Find the furniture pieces you need, from traditional to contemporary stylesor anything in between. Product specialists are available to help you create your dream space.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    ];



        let img=["images/desktop-image-hero-1.jpg",
         "images/desktop-image-hero-2.jpg",
         "images/desktop-image-hero-3.jpg"];
let h1 =["Discover innovative ways to decorate",
         "We are available all across the globe",
         "Manufactured with the best materials"
        ];

let point = 0 ;

$(".rightButton").click(()=>{
    if(point == 2){
        point=0;
    }else{
        point++;
    }
   
    $(".pictures").attr("src",img[point]);
    $(".firstImageText h1").empty();
    $(".firstImageText p").empty();  

    $(".firstImageText h1").append(h1[point]);
    $(".firstImageText p").append(p[point]);     
});

$(".leftButton").click(()=>{
    if(point == 0){
        point=2;
    }else{
        point--;
    }
   
    $(".pictures").attr("src",img[point]);
    $(".firstImageText h1").empty();
    $(".firstImageText p").empty();  

    $(".firstImageText h1").append(h1[point]);
    $(".firstImageText p").append(p[point]);     
});