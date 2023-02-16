import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { clothes, tableColumns } from '../../pages/shop/data';
import {useShoppingCart} from '../../pages/shop/ShoppingCartContext'
const CartDetails = () => {
    const {increaseCartQuantity,decreaseCartQuantity,cartItems,removeItemFromCart,setCartItems} = useShoppingCart();
    useEffect(() => {
        if (window.localStorage.cloth) {
            let ob = JSON.parse(window.localStorage.cloth);
            setCartItems(ob);
        }
    }, [])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        cartItems.forEach(element => {
            if (element.quantity === 0) {
                removeItemFromCart(element.id);
            }
        });
        const mem = JSON.stringify(cartItems);
        window.localStorage.cloth = mem;
        setTotal(0);
        cartItems.forEach((item) => {
            let kind = clothes.find((it) => item.id === it.id);
            setTotal(prev => prev + kind.price*item.quantity );
        }
        );
    }, [cartItems, removeItemFromCart])
    return (
        <div className='py-20 sm:px-6 px-3 xs:px-4 container mx-auto'>
            <div className={`${cartItems.length === 0 && 'hidden'}`}>
                <table className="w-full sm:block hidden" >
                    <thead>
                        <tr className=' text-dark text-lg tracking-wide font-bold  ' >
                            {tableColumns.map((item, index) => <th key={index} className={`min-w-8 py-4 bg-f7 text-left ${index === 0 && 'pl-8 rounded-l-lg'} ${index === tableColumns.length - 1 && ' rounded-r-lg'} `}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((item, index) => {
                                let kind = clothes.find((it) => item.id === it.id);
                                return (
                                    <tr key={index} className='border-b text-left text-darkYellow text-lg font-bold border-b-c6'>
                                        <td style={{ width: '1%' }} className='pl-4 py-6'>
                                            <img src={kind.image80} alt="clothes" className='rounded-full ' />
                                        </td>
                                        <td className='pl-4 tracking-wider' ><span className='hover:text-darkYellow text-dark transition-all duration-300 ease-linear cursor-default'>{kind.title}</span></td>
                                        <td>${kind.price}</td>
                                        <td className='text-dark' >
                                            <span onClick={() => decreaseCartQuantity(item.id)} className='py-2 px-3 mr-2 bg-f7 text-999 text-xs hover:bg-black rounded-lg transition-all duration-300 ease-linear hover:text-white cursor-pointer' >
                                                <i className="fa-solid fa-minus"></i>
                                            </span>
                                            {item.quantity}
                                            <span onClick={() => increaseCartQuantity(item.id)} className='py-2 px-3 ml-2 bg-f7 text-999 text-xs hover:bg-black rounded-lg transition-all duration-300 ease-linear hover:text-white cursor-pointer' >
                                                <i className="fa-solid fa-plus"></i>
                                            </span>
                                        </td>
                                        <td>${(item.quantity * kind.price).toFixed(2)}</td>
                                        <td>
                                            <span onClick={() => removeItemFromCart(item.id)} className='transition-all duration-300 ease-linear block text-center text-xl font-normal  text-999 hover:text-danger cursor-pointer '>X</span>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <table className="w-full, sm:hidden block" >
                    <tbody className='flex flex-col'>
                        {
                            cartItems.map((item, index) => {
                                let kind = clothes.find((it) => item.id === it.id);
                                return (
                                    <tr key={index} className='border-b text-left flex flex-col w-full text-darkYellow text-xl font-bold border-b-c6'>
                                        <td className='pl-4 tracking-wide flex justify-between border-b border-b-borders py-4'>
                                            <span className='text-dark font-normal' >Product:</span>
                                            <span className='hover:text-darkYellow text-dark transition-all duration-300 ease-linear cursor-default'>{kind.title}</span>
                                        </td>
                                        <td className='flex justify-between border-b border-b-borders py-4'>
                                            <span className="font-normal text-dark">price:</span>
                                            <span className="">${kind.price}</span>
                                        </td>
                                        <td className='text-dark flex justify-between border-b border-b-borders py-4'>
                                            <span className="font-normal">Quantity:</span>
                                            <div>
                                                <span onClick={() => decreaseCartQuantity(item.id)} className='py-2 px-3 mr-2 bg-f7 text-999 text-xs hover:bg-black rounded-lg transition-all duration-300 ease-linear hover:text-white cursor-pointer' >
                                                    <i className="fa-solid fa-minus"></i>
                                                </span>
                                                {item.quantity}
                                                <span onClick={() => increaseCartQuantity(item.id)} className='py-2 px-3 ml-2 bg-f7 text-999 text-xs hover:bg-black rounded-lg transition-all duration-300 ease-linear hover:text-white cursor-pointer' >
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </div>
                                        </td>
                                        <td className='flex justify-between border-b border-b-borders py-4' >
                                            <span className="text-dark font-normal">Total:</span>
                                            <span className="">${(item.quantity * kind.price).toFixed(2)}</span>
                                        </td>
                                        <td className='flex justify-end'>
                                            <span onClick={() => removeItemFromCart(item.id)} className='transition-all duration-300 ease-linear inline-block  text-xl font-normal  text-999 hover:text-danger cursor-pointer '>X</span>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div className="coupon my-12 flex sm:flex-row flex-col items-center gap-2">
                    <input type="text" placeholder='Coupon code' className="px-6 py-4 rounded sm:min-w-56 w-full sm:w-auto bg-f7" />
                    <button className='bg-darkYellow text-white rounded px-4 py-3 h-full text-lg font-semibold sm:min-w-32 sm:w-auto w-full  tracking-wide hover:bg-e69 transition-all duration-300 '>Apply Coupon</button>
                </div>
                <div className="flex justify-end">
                    <div className="cart-totals shadow-xl rounded xl:w-1/3 w-full px-8 py-6">
                        <h3 className="text-dark text-3xl font-bold border-b border-c6 w-full py-4 tracking-wider">Cart Totals</h3>
                        <div className="flex items-center justify-between my-6 ">
                            <h4 className="text-dark text-xl font-bold ">Subtotal</h4>
                            <p className="text-darkYellow text-xl font-bold">${total.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between my-6">
                            <h4 className="text-dark text-2xl font-bold ">Total</h4>
                            <p className="text-darkYellow text-2xl font-bold">${total.toFixed(2)}</p>
                        </div>
                            <button className='bg-darkYellow text-white rounded w-full p-4 text-lg font-bold tracking-wide hover:bg-e69 transition-all duration-300 '>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
            <div className={`${cartItems.length !== 0 && 'hidden'} my-20`}>
                <p className="text-61 text-xl mb-5">Your cart is currently empty.</p>
                <NavLink to={'/shop'} >
                    <button className='bg-darkYellow text-white rounded w-44 px-4 py-3 mt-4 text-lg font-bold tracking-wide hover:bg-e69 transition-all duration-300 '>Return To Shop</button>
                </NavLink>
            </div>
        </div>
    )
}

export default CartDetails