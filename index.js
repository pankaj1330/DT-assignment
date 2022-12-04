const dynamicCarDetails = [
    {
        src : "https://cdni.autocarindia.com/ExtraImages/20220120013205_2022_BMW_X3.jpg",
        carName : "BMW X3",
        CarPrice : "$45,400",
        CarDisc : "The X3 is fun to drive and boasts engines that run the gamut from plucky to truly powerful.",
        brand : "BMW"
    },
    {
        src : "https://imgd.aeplcdn.com/1200x900/cw/ec/37065/BMW-X5-Right-Front-Three-Quarter-157119.jpg?wm=0&q=75",
        carName : "bMW X5",
        CarPrice : "$61,600",
        CarDisc : "The BMW X5 is a smooth, classy and luxurious SUV. With an excellent interior and infotainment system.",
        brand : "BMW"
    },
    {
        src : "https://cdni.autocarindia.com/Galleries/20200901024027_Ghost-front.jpg",
        carName : "Rolls-Royce ghost",
        CarPrice : "$300,200",
        CarDisc : "The Petrol engine is 6750 cc . It is available with Automatic transmission.",
        brand : "RR"
    },
    {
        src : "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20220512055954_2022%20Rolls%20Royce%20Phantom%201.jpg",
        carName : "Rolls-Royce phantom",
        CarPrice : "$465,000",
        CarDisc : "The Phantom uses an aluminium spaceframe chassis; this is a version of Rolls-Royce's modular Architecture of Luxury platform.",
        brand : "RR"
    },
    {
        src : "https://www.motorbeam.com/wp-content/uploads/2022-Rolls-Royce-Wraith.jpg",
        carName : "Rolls-Royce wraith",
        CarPrice : "$344,500",
        CarDisc : "Every Rolls-Royce hits 155 mph, but the Wraith is the fastest street-legal car when you consider its zero-to-sixty.",
        brand : "RR"
    },
    {
        src : "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/DawnModelImage.jpg&w=872&h=578&q=75&c=1",
        carName : "Rolls-Royce dawn",
        CarPrice : "$356,500",
        CarDisc : "The production is limited to only 50 cars worldwide",
        brand : "RR"
    },
];

const dynamicbox = document.querySelector('.dynamic-box');
const all = document.getElementById('all');
const bmw = document.getElementById('bmw');
const rr = document.getElementById('rolls');

function showall(){
    const dynamicText = dynamicCarDetails.map((carDetail)=>{
        return `<div class="car">
        <img src="${carDetail.src}" alt="">
        <div class="detail">
            <h1 class="name">${carDetail.carName}</h1>
            <h2 class="price">${carDetail.CarPrice}</h2>
            <p class="disc">${carDetail.CarDisc}</p>
        </div>
    </div>`
    });
    const dynamic = dynamicText.join("");
    dynamicbox.innerHTML = dynamic;
}


window.addEventListener('DOMContentLoaded',showall);
all.addEventListener('click',showall);

bmw.addEventListener('click',()=>{

    const dynamicarray = dynamicCarDetails.filter((car)=>{
        return car.brand === 'BMW';
    })

    const dynamicText = dynamicarray.map((carDetail)=>{
        return `<div class="car">
        <img src="${carDetail.src}" alt="">
        <div class="detail">
            <h1 class="name">${carDetail.carName}</h1>
            <h2 class="price">${carDetail.CarPrice}</h2>
            <p class="disc">${carDetail.CarDisc}</p>
        </div>
    </div>`
    });
    const dynamic = dynamicText.join("");
    dynamicbox.innerHTML = dynamic;
});
rr.addEventListener('click',()=>{

    const dynamicarray = dynamicCarDetails.filter((car)=>{
        return car.brand === 'RR';
    })

    const dynamicText = dynamicarray.map((carDetail)=>{
        return `<div class="car">
        <img src="${carDetail.src}" alt="">
        <div class="detail">
            <h1 class="name">${carDetail.carName}</h1>
            <h2 class="price">${carDetail.CarPrice}</h2>
            <p class="disc">${carDetail.CarDisc}</p>
        </div>
    </div>`
    });
    const dynamic = dynamicText.join("");
    dynamicbox.innerHTML = dynamic;
});