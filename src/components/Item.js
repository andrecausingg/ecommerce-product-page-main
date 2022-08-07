// Image 
import imageProduct1 from  '../images/image-product-1.jpg'

// Image Icon Prev Next
import prev from '../images/icon-previous.svg'
import next from '../images/icon-next.svg'
import cart from '../images/icon-cart.svg'

// Image Icon Minus Plus
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'

const Item = () => {
  return (
    <section className='yot-row yot-flex-ai-c' style={{marginTop:'35px'}}>
        <div className='item-image-container yot-col-50-l'>
            <div className='item-main-product'>
                <img src={imageProduct1} alt='Product-1' />
            </div>
            <div className='item-prev-next-icon'> 
                <div className='item-pn-icon-container'>
                    <img src={prev} alt='Previous' style={{width:'12px', height:'12px'}}/>
                </div>
                <div className='item-pn-icon-container'>
                    <img src={next} alt='Previous' style={{width:'12px', height:'12px'}} />
                </div>
            </div>
        </div>

        <div className='item-description-container yot-col-33-33-l yot-bg-white'>
            <h5 className='yot-tc-orange' style={{letterSpacing:'2px'}}>SNEAKY COMPANY</h5>
            <h2>Fall Limited Edition Sneakers</h2>
            <p className='yot-tc-dark-grayish-blue'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            
            <div className='yot-flex yot-flex-ai-c-jc-sb yot-margin-tb-24'>
                <div className='yot-flex yot-flex-ai-c'>
                    <h3>$125.00</h3>
                    <span className='yot-tc-orange yot-margin-l-16 item-percent'><b>50%</b></span>
                </div>
                <div>
                    <span><del>$250.00</del></span>
                </div>
            </div>
            <div>
                <div className='item-dec-inc-container yot-flex yot-flex-ai-c-jc-sb'>
                    <img src={minus} alt='Minus' style={{width:'16px'}}/>
                    <h4>0</h4>
                    <img src={plus} alt='Minus' style={{width:'16px', height:'16px'}}/>
                </div>
                <button className='yot-btn yot-margin-t-16'>
                    <div className='yot-flex yot-flex-ai-c-jc-c'>
                        <img src={cart} alt='Cart' style={{width:'16px', height:'16px'}}/>
                        <span className='yot-margin-l-16'>Add to Cart</span>
                    </div>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Item