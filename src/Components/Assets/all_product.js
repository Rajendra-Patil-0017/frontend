import p1_img from "./footwear1.png";
import p2_img from "./footwear2.png";
import p3_img from "./footwear3.png";
import p4_img from "./footwear4.png";
import p5_img from "./full-dress1.png";
import p6_img from "./full-dress2.png";
import p7_img from "./full-dress3.png";
import p8_img from "./full-dress4.png";
import p9_img from "./headphone1.png";
import p10_img from "./headphone2.png";
import p11_img from "./headphone3.png";
import p12_img from "./headphone4.png";
import p13_img from "./mobile1.png";
import p14_img from "./mobile2.png";
import p15_img from "./mobile3.png";
import p16_img from "./mobile4.png";
import p17_img from "./Pant1.png";
import p18_img from "./pant2.png";
import p19_img from "./pant3.png";
import p20_img from "./Shrit1.png";
import p21_img from "./Shrit2.png";
import p22_img from "./Shrit3.png";
import p23_img from "./T-shirt1.png";
import p24_img from "./T-shirt2.jpg";
import p25_img from "./T-shirt3.jpg";
import p26_img from "./Watch1.png";
import p27_img from "./watch2.png";
import p28_img from "./watch3.png";
import p29_img from "./Watch4.png";
/*import p30_img from "./Earbud.png";
import p31_img from "./shoes.png";
import p32_img from "./pants.png";
import p33_img from "./golden watch.png";
import p34_img from "./tshirt.png";
import p35_img from "./woman purple sweater skirt.png";
import p36_img from "./Shirt.png";*/

let all_product=[
    {
        id:1,
        name:"Leather Shoes",
        category:"footwear",
        image:p1_img,
        new_price:2000,
        old_price:3500,
    },
    {
        id:2,
        name:"Leather Shoes",
        category:"footwear",
        image:p2_img,
        new_price:2500,
        old_price:4500,
    },
    {
        id:3,
        name:"Women Slipper",
        category:"footwear",
        image:p3_img,
        new_price:1000,
        old_price:1500,
    },
    {
        id:4,
        name:"Women Slipper",
        category:"footwear",
        image:p4_img,
        new_price:2000,
        old_price:3500,
    },
    {
        id:5,
        name:"Women Suit",
        category:"womens",
        image:p5_img,
        new_price:1000,
        old_price:2000,
    },
    {
        id:6,
        name:"Women Suit",
        category:"womens",
        image:p6_img,
        new_price:1500,
        old_price:2500,
    },
    {
        id:7,
        name:"Women Suit",
        category:"womens",
        image:p7_img,
        new_price:1500,
        old_price:2500,
    },
    {
        id:8,
        name:"Women Suit",
        category:"womens",
        image:p8_img,
        new_price:2500,
        old_price:3000,
    },
    {
        id:9,
        name:"Sony Headphone",
        category:"headphone",
        image:p9_img,
        new_price:2700,
        old_price:4900,
    },
    {
        id:10,
        name:"Boat Headphone",
        category:"headphone",
        image:p10_img,
        new_price:1100,
        old_price:2500,
    },
    {
        id:11,
        name:"Zebronics Headphone",
        category:"headphone",
        image:p11_img,
        new_price:800,
        old_price:1200,
    },
    {
        id:12,
        name:"Boat Gaming Headphone",
        category:"headphone",
        image:p12_img,
        new_price:1900,
        old_price:4900,
    },
    {
        id:13,
        name:"iqoo Z7 5G Mobile",
        category:"mobile",
        image:p13_img,
        new_price:21999,
        old_price:24999,
    },
    {
        id:14,
        name:"Samsung Galaxy A23 5G Mobile",
        category:"mobile",
        image:p14_img,
        new_price:19000,
        old_price:28890,
    },
    {
        id:15,
        name:"Samsung Galaxy M33 5G Mobile",
        category:"mobile",
        image:p15_img,
        new_price:19790,
        old_price:24999,
    },
    {
        id:16,
        name:"One plue 10R 5G Mobile",
        category:"mobile",
        image:p16_img,
        new_price:29999,
        old_price:38999,
    },
    {
        id:17,
        name:"Demin Pant",
        category:"pant",
        image:p17_img,
        new_price:750,
        old_price:1500,
    },
    {
        id:18,
        name:"White Pant",
        category:"pant",
        image:p18_img,
        new_price:850,
        old_price:1400,
    },
    {
        id:19,
        name:"Cotton Jean Pant",
        category:"pant",
        image:p19_img,
        new_price:1250,
        old_price:2500,
    },
    {
        id:20,
        name:"silk Shirt",
        category:"mens",
        image:p20_img,
        new_price:900,
        old_price:1600,
    },
    {
        id:21,
        name:"Cotton Shirt",
        category:"mens",
        image:p21_img,
        new_price:650,
        old_price:1000,
    },
    {
        id:22,
        name:"Styles Shirt",
        category:"mens",
        image:p22_img,
        new_price:1050,
        old_price:1500,
    },
    {
        id:23,
        name:"Cotton T-Shirt",
        category:"t-shirt",
        image:p23_img,
        new_price:650,
        old_price:900,
    },
    {
        id:24,
        name:"Black Cotton T-Shirt",
        category:"t-shirt",
        image:p24_img,
        new_price:750,
        old_price:1000,
    },
    {
        id:25,
        name:"White Cotton T-Shirt",
        category:"t-shirt",
        image:p25_img,
        new_price:850,
        old_price:1250,
    },
    {
        id:26,
        name:"Forsinnig Leather Watch",
        category:"watch",
        image:p26_img,
        new_price:6249,
        old_price:14629,
    },
    {
        id:27,
        name:"Hyperchrome Watch",
        category:"watch",
        image:p27_img,
        new_price:2600,
        old_price:4999,
    },
    {
        id:28,
        name:"Vintage Helvetia Swiss Watch",
        category:"watch",
        image:p28_img,
        new_price:13590,
        old_price:25999,
    },
    {
        id:29,
        name:"Omega Geneve Watch",
        category:"watch",
        image:p29_img,
        new_price:13453,
        old_price:25999,
    },
    /*{
        id:30,
        name:"Earbud",
        Category:"Electronics",
        Image:p30_img,
        new_price:1449,
        old_price:2999,
    },
    {
        id:31,
        name:"shoes",
        Category:"Footwear",
        Image:p31_img,
        new_price:3999,
        old_price:6999,
    },
    {
        id:32,
        name:"pants",
        Category:"Pant",
        Image:p32_img,
        new_price:999,
        old_price:1200,
    },
    {
        id:33,
        name:"golden watch",
        Category:"Watch",
        Image:p33_img,
        new_price:15999,
        old_price:25000,
    },
    {
        id:34,
        name:"T-Shirt 5",
        Category:"Mens",
        Image:p34_img,
        new_price:1999,
        old_price:2800,
    },
    {
        id:35,
        name:"Woman purple sweater skirt",
        Category:"Wonmes",
        Image:p35_img,
        new_price:1499,
        old_price:2500,
    },
    {
        id:36,
        name:"Shirt 3",
        Category:"Mens",
        Image:p36_img,
        new_price:1299,
        old_price:2299,
    },*/
]

export default all_product;