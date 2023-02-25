import { useEffect, useRef, useState } from 'react';
import { cati, clothes, tags } from '../../pages/shop/data'
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { useShoppingCart } from '../../pages/shop/ShoppingCartContext';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
const Products = () => {
    let sellers = clothes.slice(0,3);
    const [hovered, setHovered] = useState({ liIndex: -1, filter: 0,sellers:-1,card:-1 });
    const [vals, setVals] = useState({ first: 0, last: 30, })
    const [click, setClick] = useState({})
    const [total, setTotal] = useState(0);
    const sliderRef = useRef();
    useEffect(() => {
        const timer = setTimeout(() => {
            const slider = sliderRef.current;
            noUiSlider.create(slider, {
                start: [0, 30],
                connect: true,
                step: 10,
                range: {
                    'min': 0,
                    'max': 30
                },
            });
            slider.noUiSlider.on('update', function () {
                let val = [...slider.noUiSlider.get()];
                setVals({ first: +val[0], last: +val[1] });
            });
        }, 5);  
        return () => clearTimeout(timer);
        
}, [])
    const tape = (title) => {
        return (
            <div className="title flex gap-3">
                <h4 className='text-dark text-2xl font-semibold max-w-full w-auto tracking-wide'>{title}</h4>
                <span className='flex items-center max-w-full w-full'>
                    <div className="yellow h-1.5 bg-darkYellow w-1/5"></div>
                    <div className="light h-px bg-bbb w-4/5"></div>
                </span>
            </div>
        );
    }    
    const {increaseCartQuantity,cartItems,removeItemFromCart,setCartItems} = useShoppingCart();
    useEffect(() => {
        setTotal(0);
        cartItems.forEach((element) => { setTotal((prev) => prev + element.quantity * clothes.find((el) => el.id === element.id).price) });
        setTotal((prev) => prev.toFixed(2));
    }, [cartItems, total])
    const [clothesSort, setClothesSort] = useState(clothes)
    const [clothComponent, setClothComponent] = useState();
    const [count, setCount] = useState(0)
    const [clothesToShow, setClothesToShow] = useState(clothes);
    useEffect(() => {
        if ((document.getElementById('sort').value) === 'rating') {
            setClothesSort(clothesToShow.sort((c1, c2) => +c2.rate - +c1.rate));
        }
        else if ((document.getElementById('sort').value) === 'h-to-l') {
            setClothesSort(clothesToShow.sort((c1, c2) => +c2.price - +c1.price));
        }
        else if ((document.getElementById('sort').value) === 'l-to-h') {
            setClothesSort(clothesToShow.sort((c1, c2) => +c1.price - +c2.price));
        }
        else {
            setClothesSort(clothes);
        }
        setClothComponent(
            clothesSort.map((item, index) => {
                let rate = [];
                for (let i = 0; i < Math.floor(item.rate); i++) { rate = [...rate, <i key={rate.length} className="fa-solid fa-star "></i>] }
                item.rate > Math.floor(item.rate) ? rate = [...rate, <i key={rate.length} className="fa-solid fa-star-half-stroke "></i>] : console.log();
                Math.ceil(item.rate) < 5 ? rate = [...rate, <i key={rate.length} className="fa-regular fa-star"></i>] : console.log()
                return (
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        whileInView={{ y: 0, opacity: 1 }}
                        onMouseEnter={() => setHovered((prev) => { return ({ prev, card: index }) })}
                        onMouseLeave={() => setHovered((prev) => { return ({ prev, card: -1 }) })}
                        className='card xl:max-w-32% sm:max-w-5.5/12  text-center relative transition-all duration-300'
                        key={index}>
                        <div className="image-holder relative">
                            <img src={item.image} alt={item.cat} className="rounded-lg" />
                            <div onClick={() => { setClick((prev) => { return ({ prev, icon: index }) }); setTimeout(() => { increaseCartQuantity(item.id); setClick((prev) => { return ({ prev, icon: -1 }) }) }, 2500); }} className={`absolute bg-darkYellow text-white left-1/2 transition-all duration-300 w-max -translate-x-1/2 rounded-sm overflow-hidden ease-out cursor-pointer ${hovered.card === index ? 'bottom-8 opacity-1' : 'bottom-0 opacity-0'}`} >
                                <span className={`inline-block ${click.icon === index ? 'w-full bg-e69 ' : 'w-4 bg-darkYellow'} absolute transition-all ease-linear duration-500 -z-10 h-full`} ></span>
                                <span className='bg-e69 py-2 px-3 inline-block' >
                                    <i className={`fa-solid  ${click.icon === index ? 'fa-rotate-right animate-spin' : 'fa-bag-shopping'} text-lg  `}></i>
                                </span>
                                <span className='p-3 font-bold text-lg tracking-wider' style={{ wordSpacing: 3 }}>
                                    Add To Cart
                                </span>
                            </div>
                        </div>
                        {item.sale && <div className='bg-darkYellow text-white p-1 px-1.5 absolute top-4 right-0 rounded-l text-sm tracking-wider'>Sale! </div>}
                        <h4 className="text-dark text-xl tracking-wide hover:text-darkYellow transition-all duration-300 cursor-pointer font-bold mt-4">{item.title}</h4>
                        <div className="rate my-1 mx-auto text-golden text-center ">{rate}</div>
                        <div className="price font-semibold text-xl">
                            {item.sale && <span className="text-bbb line-through">${item.oPrice}</span>}
                            <span className="text-darkYellow"> ${item.price}</span>
                        </div>
                    </motion.div>
                )
            }
            )
        )
    }, [cartItems, click.icon, clothesSort, clothesToShow, count, hovered.card, increaseCartQuantity]);
    //getting cart from localstorage if it's there
    useEffect(() => {
        if (window.localStorage.cloth) {
            let ob = JSON.parse(window.localStorage.cloth);
            setCartItems(ob);
        }
    }, [setCartItems])
    //updating cart localstorage
    useEffect(() => {
        const mem = JSON.stringify(cartItems);
        window.localStorage.cloth = mem;
    }, [cartItems])
    return (
        <div className='portfolio__products py-16 lg:px-16 container max-w-full, mx-auto flex lg:flex-row flex-col-reverse justify-between gap-8'>
            <div className="sidebar lg:max-w-22% max-w-full">
                <div className="search bg-f7 rounded-lg w-full flex  ">
                    <input type="text" className='bg-f7 h-full w-full p-3' placeholder='search ...' />
                    <i className="fa-solid fa-magnifying-glass text-white p-3 text-lg leading-none bg-dark rounded hover:bg-darkYellow transition-all duration-300 cursor-pointer m-1"></i>
                </div>
                <div className="cati mt-12">
                    {tape('Catigories')}
                    <ul className='my-4'>
                        {cati.map((item, index) => {
                            let i = 0;
                            clothes.map(cloth => cloth.cat.includes(item) && i++);
                            return (
                                <li onMouseEnter={() => setHovered((prev) => { return ({ prev, liIndex: index }) })}
                                    onMouseLeave={() => setHovered((prev) => { return ({ prev, liIndex: -1 }) })}
                                    onClick={() => { setClothesToShow(() => { let arr = clothes.filter((ele) => ele.cat.includes(item) ? true : false); return (arr)}); setCount(prev => prev + 1); }}
                                    key={index}
                                    className='flex justify-between cursor-pointer py-1.5'>
                                <span className={`block ${hovered.liIndex !== index ? 'text-dark' : 'text-darkYellow'} transition-all duration-300 text-xl font-bold`}>
                                    <i className={`fa-solid fa-chevron-right ${hovered.liIndex !== index ? 'text-999' : 'text-darkYellow'} transition-all duration-300 text-sm mr-2`}></i>{index !== 0 ? item : 'All'}</span>
                                <span className={`block ${hovered.liIndex !== index ? 'text-999' : 'text-darkYellow'} font-bold text-lg`}>({i})</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="pricing">
                    {tape('Price\u00A0Range')}
                    <div className='relative mt-4'>
                        <div id="slider" ref={sliderRef} ></div>
                    </div>
                    <div className="filter mt-6 flex justify-between items-center">
                        <div onMouseEnter={() => setHovered((prev) => { return ({ prev, filter: 1 }) })} onMouseLeave={() => setHovered((prev) => { return ({ prev, filter: 0 }) })} className='flex gap-2 items-center cursor-pointer'>
                            <i className={`fa-solid fa-filter text-sm transition-all duration-300 ${hovered.filter !== 1 ? 'text-darkYellow' : 'text-dark'} `}></i>
                            <p className={` text-base font-semibold tracking-wider transition-all duration-300 ${hovered.filter === 1 ? 'text-darkYellow' : 'text-dark'}`}>Filter</p>
                        </div>
                        <p className="text-sm mt-6">Price: ${vals.first} — ${vals.last}</p>
                    </div>
                </div>
                <div className="best-sellers my-6">
                    {tape('Bestsellers')}
                    <div className="flex flex-col gap-7 mt-4 ">
                        {sellers.map((item, index) => {
                            let rate=[] ;
                            for (let i = 0; i < Math.floor(item.rate); i++) { rate = [...rate , <i key={rate.length} className="fa-solid fa-star "></i>] }
                            item.rate > Math.floor(item.rate) ? rate = [...rate, <i key={rate.length} className="fa-solid fa-star-half-stroke "></i>] : console.log();
                            Math.ceil(item.rate) < 5 ? rate = [...rate, <i key={rate.length} className="fa-regular fa-star"></i>] : console.log()
                            return (
                                <div key={index} className="item flex gap-12 items-center">
                                    <img onMouseEnter={()=>setHovered((prev)=>{return({prev,sellers:index})})} onMouseLeave={()=>setHovered((prev)=>{return({prev,sellers:-1})})} src={item.image80} alt="person" className='max-w-full h-20 rounded-full object-top cursor-pointer' />
                                    <div className="content">
                                        <h4 onMouseEnter={()=>setHovered((prev)=>{return({prev,sellers:index})})} onMouseLeave={()=>setHovered((prev)=>{return({prev,sellers:-1})})} className={` text-lg leading-tight font-semibold transition-all duration-300 cursor-pointer tracking-wider ${hovered.sellers===index?'text-darkYellow': 'text-dark'}`}>{item.title}</h4>
                                        <div className="rate flex my-2 text-golden">{rate}</div>
                                        <p className="price text-golden font-semibold"><span className={`${item.sale === false && 'hidden'} text-999 line-through mr-2 `}>${item.oPrice}</span>${item.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="tags">
                    {tape('Tags')}
                    <div className="content flex flex-wrap gap-2 mt-4">
                        {tags.map((item, index) => {
                            return (<p className='text-dark bg-f7 rounded-lg text-base px-3 py-2 tracking-wider hover:text-white hover:bg-darkYellow transition-all duration-300 cursor-pointer ' key={index} >{item}</p>)
                        })}
                    </div>
                </div>
                <div className="cart my-6">
                    {tape('Shopping\u00a0Cart')}
                    <p className={`text-61 text-lg tracking-wide mt-4 text-center ${cartItems.length>0 && 'hidden'} `} style={{wordSpacing:3}}>No products in the cart.</p>
                    <div className='mt-2'>
                        {cartItems.map((item, index) => {
                            let kind =clothes.find((it) => item.id === it.id)
                            return (
                                <div className='flex justify-between my-6 relative' key={index}>
                                    <div className="flex items-center gap-7">
                                        <img src={kind.image80} alt="clothes" className='rounded-full' onMouseEnter={()=>setHovered((prev)=>{return({prev,cart:index})})} onMouseLeave={()=>setHovered((prev)=>{return({prev,cart:-1})})} />
                                        <div>
                                            <p className={` ${hovered.cart===index?'text-e69':'text-dark'} text-lg mb-1 transition-all duration-200 ease-linear font-bold`} onMouseEnter={()=>setHovered((prev)=>{return({prev,cart:index})})} onMouseLeave={()=>setHovered((prev)=>{return({prev,cart:-1})})}>{kind.title}</p>
                                            <p className={` ${hovered.cart===index?'text-dark':' text-e69'} text-lg transition-all duration-200 ease-linear font-bold`}><span className='text-999'>{item.quantity} x</span> ${kind.price}</p>
                                        </div>
                                    </div>
                                    <p className="text-999 text-lg cursor-pointer hover:text-e69 transition-all duration-300 ease-linear" onClick={() => { setClick((prev) => { return ({ prev, remove: index }) }); setTimeout(() => { setClick((prev) => { return ({ prev, remove: -1 }) }); removeItemFromCart(item.id) }, 2500) }} >X</p>
                                    <i className={`fa-solid fa-circle-notch absolute top-1/3 -right-2 text-2xl animate-spin ${click.remove===index?'block':'hidden'}`}></i>
                                </div>
                            )
                        })}
                    </div>
                    <div className={`mt-8 ${cartItems.length === 0 && 'hidden'} `}>
                        <p className="text-dark text-2xl font-bold tracking-wide">Subtotal: <span className='text-darkYellow'>${total}</span></p>
                        <Link to={'/cart'} >
                            <button className='bg-darkYellow text-white rounded-lg w-full p-2.5 mt-4 text-lg font-bold tracking-wide hover:bg-e69 transition-all duration-300 '>View Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="content w-full">
                <div className="head flex justify-end items-center w-full">
                    <select defaultValue="latest" name="sort" id="sort" onChange={()=>setCount((prev)=>prev+1) } className='outline-none p-4 w-64 rounded-lg text-61 bg-f7'>
                        <option value="rating" >Sort by average rating</option>
                        <option value="latest" >Sort by latest</option>
                        <option value="h-to-l" >Sort by price:high to low</option>
                        <option value="l-to-h" >Sort by price:low to high</option>
                    </select>
                </div>
                <div className="body flex flex-wrap xl:gap-4 gap-6 lg:justify-between xl:justify-start  items-center mt-8">
                    {clothComponent}
                </div>
            </div>
        </div>
    )
}
export default Products