import proje1ticaret from "../assets/akdumanticaret.png"
import proje2anka from "../assets/ankatokenproje.png"
import proje3django from "../assets/djangofullstack.png"
import proje4hava from "../assets/havadurumu.png"
import proje5shopping from "../assets/shoppingcarproje.png"
import proje6stock from "../assets/stockApp.png"
import proje7takas from "../assets/takastokenproje.png"

const projects = [
    {
        id: 1,
        name: "Modern E-commerce",
        image: proje1ticaret,
        domain: "https://e-commerce-dae4ex0jf-muhammetakdumans-projects.vercel.app/",
        techologies: "REACT , TYPESCRİPT,REDUX",
        description: "Modern e-commerce app",
        additionalInfo: "The project I developed to learn TypeScript and redux in depth"

    },
    {
        id: 2,
        name: "Anka Token Website",
        image: proje2anka,
        domain: "https://anka-token-ldxwdxh4f-muhammetakdumans-projects.vercel.app/",
        techologies: "REACT, NEXT.JS, BOOTSTRAP, TAİLWİND",
        description: "Anka Token Website",
        additionalInfo: ""
    },
    {
        id: 3,
        name: "BLOG",
        image: proje3django,
        domain: "https://github.com/muhammetakduman/django-apiServices-",
        techologies: "PYTHON,DJANGO, SQL, BOOTSTRAP",
        description: "Django Blog Website",
        additionalInfo: "Commenting, article sharing, user creation, authorization, crud operations and api writing."
    },
    {
        id: 4,
        name: "OpenWeather",
        image: proje4hava,
        domain: "https://openweather-gdg997p6b-muhammetakdumans-projects.vercel.app/",
        techologies: "JAVASCRİPT , CSS",
        description: "Hava Durumu",
        additionalInfo: "Learned crud operations logic using OpenweatherAPI."
    },
    {
        id: 5,
        name: "Shopping Card",
        image: proje5shopping,
        domain: "https://shoppingcart-61zzjy8z6-muhammetakdumans-projects.vercel.app/",
        techologies: "REACT , HOOKS , REDUX , CSS",
        description: "Mini Shopping Card",
        additionalInfo: "Modern e-commerce site using React hooks"
    },
    {
        id: 6,
        name: "Stock APP",
        image: proje6stock,
        domain: "https://github.com/KourosBey/StockTrackerAPI",
        techologies: ".NET(CRUD), MSSQL, REACT, REDUX , MUİ",
        description: "Stok Yönetim Sitesi",
        additionalInfo: "Business and stock tracking system that I developed with my friend."
    },
    {
        id: 7,
        name: "Takas Token",
        image: proje7takas,
        domain: "https://takastoken.io/",
        techologies: "NEXT JS , TAİLWİND",
        description: "Takas Token",
        additionalInfo: "Takas token website"
    }
]
export default projects;