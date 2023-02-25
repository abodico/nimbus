const HomeFBox = (props) => {
    return (
        <div className="portfolio__home-container__elementor-boxes__Home-f-box transition-all duration-300 ease-in-out hover:-translate-y-5 flex cursor-pointer justify-between shadow-lg max-w-full md:w-auto w-full hover:shadow-2xl bg-white px-4 py-6 gap-16 rounded-lg items-center">
            <div className='flex gap-6 items-center' >
                <span className={`px-2 py-1 font-bold text-2xl text-white rounded-full ${props.class}`} >
                <i className="fa-solid fa-check"></i>
                </span>
                <div className="text ">
                    <h4 className='text-xl font-semibold' style={{wordSpacing:4,color:'#232323'}} >{props.title }</h4>
                    <p className="text-61">{props.text}</p>
                </div>
            </div>
            <i className="fa-solid fa-greater-than text-61 transition-all duration-300 ease-in-out"></i>
        </div>
    );
}

export default HomeFBox