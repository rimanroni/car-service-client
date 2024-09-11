import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SiderCard = ({price , _id}) => {
    const servicsItem = [
        'Full Car Repair',
        'Engine Repair',
        'Automatic Services',
        'Engine Oil Change',
        'Battery Charge'
    ]
    return (
        <div className='px-4'>
            <div className='bg-[#F3F3F3] mt-2 p-4'>
                 <h1 className='text-xl font-bold'>Services</h1>
                {
                    servicsItem.map((item)=>(
                        <div key={item}
                         className='flex group hover:bg-[#FF3811]
                         bg-white hover:text-white mt-4 items-center p-4 rounded
                         justify-between duration-300 delay-150 cursor-pointer'
                        >
                            <h1 className='font-semibold'>{item}</h1>
                            <span className='
                            group-hover:text-white
                            text-[#FF3811]'><FaLongArrowAltRight /></span>
                        </div>
                    ))
                }
            </div>

            <div className="mt-8 bg-[#151515] text-white p-8 rounded">
                <h1 className='text-2xl font-bold'>Download</h1>
                <div className='flex justify-between items-center px-4 mt-4'>
                    <div className='flex items-center space-x-4'>
                        <img src="/Frame (1).svg" alt="" />
                        <div>
                            <h1 className='font-bold'>Our Brochure</h1>
                            <p>Download</p>
                        </div>
                     </div>
                    <div>
                        <button
                        className='bg-[#FF3811] p-4 rounded'
                        ><FaLongArrowAltRight /></button>
                    </div>
                </div>
                <div className='flex justify-between items-center px-4 mt-4'>
                    <div className='flex items-center space-x-4'>
                        <img src="/Frame (1).svg" alt="" />
                        <div>
                            <h1 className='font-bold'>Company Details</h1>
                            <p>Download</p>
                        </div>
                     </div>
                    <div>
                        <button
                        className='bg-[#FF3811] p-4 rounded'
                        ><FaLongArrowAltRight /></button>
                    </div>
                </div>
            </div>


            {/* offar part */}
            <div className='bg-[#151515] rounded-lg py-6 px-8 text-white mt-8'>
               <div>
               
               <div className='text-center'>
               <div className='flex justify-center '>
               <svg xmlns="http://www.w3.org/2000/svg" width="135" height="73" viewBox="0 0 135 73" fill="none">
                    <path d="M134.047 48.3935C133.34 46.2511 132.671 44.4412 132.151 42.5574C131.817 41.3754 131.148 41.043 129.996 41.0799C126.353 41.2277 122.674 41.043 119.069 41.4863C115.463 41.9295 113.01 40.8583 111.375 37.6448C110.892 36.6845 110.074 35.8349 109.368 34.9854C108.402 33.8403 108.216 32.6953 108.773 31.2547C110.372 27.1917 111.747 23.0547 113.345 18.9547C113.865 17.625 113.605 16.8124 112.416 16.0367C110.223 14.5592 108.179 12.9709 106.06 11.4935C103.087 9.46193 103.905 9.31419 100.931 11.5304C97.6606 13.9682 94.39 16.3691 91.1565 18.8809C90.1158 19.6935 89.1123 19.8043 87.8858 19.361C85.916 18.6223 83.9462 17.8836 81.902 17.4403C80.1552 17.034 79.3375 16.0367 78.8915 14.4115C77.7022 10.2745 76.3642 6.17455 75.1749 2.03761C74.8404 0.855627 74.2457 0.264636 73.0192 0.227699C69.9715 0.190762 66.961 0.190762 63.9506 0.0430145C62.2781 -0.0308594 61.3489 0.560132 60.8657 2.22229C59.7507 6.24842 58.4127 10.2007 57.2606 14.2268C56.8146 15.8151 56.0712 16.7385 54.3616 17.1079C52.2059 17.5881 50.0503 18.2529 48.0061 19.0655C46.5938 19.6196 45.5531 19.361 44.4381 18.5115C40.7958 15.7412 37.1163 13.0448 33.5112 10.2376C32.5448 9.49887 31.8015 9.49887 30.8723 10.2007C28.2707 12.0845 25.6318 13.9313 22.993 15.7043C21.878 16.443 21.8409 17.2187 22.2869 18.3637C23.9222 22.6115 25.4832 26.8962 26.9327 31.1809C27.1928 31.9565 26.9327 33.1385 26.4867 33.8403C25.1487 35.9088 23.5133 37.7926 22.1382 39.8241C21.3205 41.0061 20.3542 41.4863 18.9047 41.4124C14.3332 41.2277 9.76173 41.1169 5.15307 41.0799C4.52124 41.0799 3.51775 41.3754 3.33191 41.8187C2.47708 43.8872 1.84525 46.0295 1.02759 48.3935C2.03108 48.3935 2.70008 48.3935 3.40625 48.3935C10.2077 48.3935 17.0464 48.2457 23.8478 48.4673C26.5238 48.5412 28.3078 48.0241 29.1998 45.3646C29.4972 44.5151 30.1662 43.7763 30.6493 43.0376C41.8736 25.825 64.8797 18.8808 83.8718 26.8592C93.721 30.9962 101.117 37.7187 106.209 47.0637C106.506 47.6547 107.324 48.3565 107.881 48.3565C116.467 48.4304 125.09 48.3935 134.047 48.3935Z" fill="white"/>
                    <path d="M134.047 48.3935C125.052 48.3935 116.467 48.4304 107.844 48.3196C107.287 48.3196 106.469 47.6178 106.172 47.0268C101.08 37.6818 93.6839 30.9592 83.8348 26.8223C64.8798 18.8809 41.8737 25.825 30.5751 43.0007C30.0548 43.7764 29.3858 44.4782 29.1256 45.3277C28.2336 47.9872 26.4496 48.5412 23.7736 48.4304C16.9722 48.2088 10.1707 48.3565 3.33203 48.3565C2.66303 48.3565 1.99403 48.3565 0.953369 48.3565C1.73387 46.0295 2.3657 43.8502 3.2577 41.7818C3.44353 41.3385 4.44702 41.043 5.07886 41.043C9.65034 41.08 14.259 41.1908 18.8305 41.3755C20.3171 41.4493 21.2463 40.9691 22.064 39.7872C23.4763 37.7556 25.0745 35.8718 26.4125 33.8034C26.8585 33.1016 27.1186 31.9196 26.8585 31.1439C25.409 26.8223 23.8108 22.5746 22.2126 18.3268C21.7666 17.1818 21.841 16.4061 22.9188 15.6673C25.5948 13.8944 28.1964 12.0106 30.7981 10.1637C31.7273 9.49888 32.4706 9.46194 33.4369 10.2007C37.0421 13.0079 40.7587 15.7043 44.3639 18.4746C45.4789 19.3241 46.5196 19.6196 47.9319 19.0286C49.976 18.216 52.1317 17.5511 54.2874 17.0709C55.997 16.7016 56.7404 15.7782 57.1864 14.1899C58.3014 10.1637 59.6393 6.21149 60.7915 2.18537C61.2747 0.523205 62.2038 -0.0677857 63.8763 0.0060882C66.8868 0.153836 69.9345 0.153836 72.945 0.190773C74.2086 0.190773 74.7661 0.781764 75.1006 2.00068C76.29 6.13762 77.628 10.2376 78.8173 14.3746C79.2633 15.9998 80.081 16.9971 81.8278 17.4034C83.8719 17.8836 85.8418 18.5854 87.8116 19.3241C89.0381 19.8043 90.0416 19.6565 91.0822 18.8439C94.3157 16.3691 97.5864 13.9313 100.857 11.4935C103.83 9.27726 103.05 9.425 105.986 11.4565C108.105 12.934 110.186 14.5223 112.342 15.9259C113.531 16.7016 113.791 17.5142 113.271 18.8439C111.71 22.907 110.297 27.0439 108.699 31.1439C108.142 32.5845 108.328 33.7295 109.294 34.8746C110 35.7241 110.781 36.5737 111.301 37.534C112.936 40.7475 115.389 41.8187 118.994 41.3755C122.599 40.9322 126.279 41.1169 129.921 40.9691C131.073 40.9322 131.742 41.3016 132.077 42.4466C132.709 44.4412 133.378 46.2511 134.047 48.3935Z" fill="#FF3811"/>
                    <path d="M96.2854 60.8781C91.8997 56.5565 87.4769 52.1979 83.0541 47.8024C82.2736 47.0268 81.7904 47.5439 81.2329 48.0979C79.1516 50.2033 77.0703 52.3087 74.9518 54.3403C73.6138 55.6331 72.1643 56.8889 70.752 58.1448C70.8635 58.3295 70.975 58.4772 71.0864 58.6619C75.2119 57.8493 78.8171 58.6988 81.7904 61.6168C84.7266 64.5349 85.5071 68.1916 84.7637 72.1439C88.6291 68.3763 92.3829 64.6826 96.2854 60.8781Z" fill="white"/>
                    <path d="M64.2481 58.4403C63.6906 57.8123 63.4305 57.406 63.096 57.0736C60.1226 54.1186 57.075 51.2375 54.176 48.2087C53.1353 47.1375 52.5035 47.1745 51.5 48.2087C47.6347 52.124 43.7694 55.9655 39.7925 59.77C38.7891 60.7303 39.012 61.3213 39.8669 62.1709C42.9889 65.2366 46.0737 68.3393 49.1957 71.4051C49.4559 71.6637 49.8275 71.8114 50.2735 72.1069C48.9727 63.2421 55.2167 57.1475 64.2481 58.4403Z" fill="white"/>
                    <path d="M49.7903 43.9609C45.0702 48.7257 40.4987 53.3798 35.9644 57.96C36.2989 58.4032 36.7449 59.0311 37.1537 59.5483C41.9482 54.7834 46.5568 50.2402 51.4628 45.4014C50.9425 44.9582 50.3478 44.4411 49.7903 43.9609Z" fill="white"/>
                    <path d="M102.53 54.7836C102.418 54.5989 102.344 54.3773 102.195 54.1926C97.9953 50.0187 93.8327 45.8818 89.6329 41.7079C88.9267 41.0061 88.4064 40.9692 87.6259 41.7079C86.8082 42.5205 86.9569 43.0746 87.7002 43.8133C91.454 47.4701 95.1335 51.1637 98.8502 54.8574C99.4448 55.4484 100.077 56.0025 100.932 56.8151C101.489 56.1133 101.935 55.5592 102.53 54.7836Z" fill="white"/>
                    <path d="M99.5562 57.7384C95.2449 53.4537 91.0079 49.2799 86.7709 45.0321C86.0648 44.3303 85.4701 43.7763 84.5038 44.8105C83.5746 45.8078 84.0949 46.3988 84.8383 47.1006C88.6293 50.8312 92.3831 54.5618 96.1369 58.2925C97.8094 59.9916 97.8466 59.9916 99.5562 57.7384Z" fill="white"/>
                    <path d="M48.2292 42.5943C46.5567 40.5627 46.5939 40.5627 44.8099 42.2988C41.1676 45.9186 37.5252 49.5015 33.9201 53.1213C32.1733 54.8573 32.2104 55.0789 34.2917 56.2609C38.9376 51.7177 43.5462 47.1744 48.2292 42.5943Z" fill="white"/>
                    <path d="M96.2854 60.878C92.3829 64.7195 88.6291 68.3762 84.7637 72.1807C85.5071 68.2285 84.7266 64.6087 81.7904 61.6537C78.8171 58.6988 75.1748 57.8861 71.0864 58.6988C70.975 58.5141 70.8635 58.3663 70.752 58.1816C72.1643 56.9258 73.5766 55.7069 74.9518 54.3771C77.0703 52.3087 79.1516 50.2402 81.2329 48.1348C81.7904 47.5807 82.2736 47.0636 83.0541 47.8393C87.4769 52.1609 91.8997 56.5195 96.2854 60.878ZM86.1389 54.8942C85.3584 55.9285 84.4292 56.6303 84.5036 57.1474C84.6151 57.7753 85.5814 58.2924 86.1761 58.8465C86.6964 58.2924 87.5884 57.7384 87.6256 57.1474C87.6999 56.5564 86.8822 55.8915 86.1389 54.8942Z" fill="white"/>
                    <path d="M64.2481 58.4402C55.1795 57.1474 48.9727 63.242 50.2735 72.1438C49.8275 71.8483 49.4559 71.7006 49.1957 71.442C46.0737 68.3763 42.9889 65.2736 39.8669 62.2078C39.012 61.3583 38.7891 60.7673 39.7925 59.8069C43.7322 56.0024 47.6347 52.124 51.5 48.2456C52.5035 47.2114 53.1353 47.1745 54.176 48.2456C57.075 51.2745 60.1226 54.1556 63.096 57.1105C63.4305 57.406 63.7278 57.8123 64.2481 58.4402ZM51.277 57.2583C50.2363 56.4087 49.5673 55.4853 49.0842 55.5592C48.4152 55.67 47.8577 56.5934 47.263 57.1474C47.8205 57.7015 48.3037 58.588 48.9355 58.6988C49.4559 58.7727 50.162 57.9601 51.277 57.2583Z" fill="white"/>
                    <path d="M49.7903 43.9609C50.3478 44.4411 50.9425 44.9212 51.4628 45.4014C46.594 50.2402 41.9853 54.7834 37.1537 59.5483C36.7449 58.9942 36.2617 58.3663 35.9644 57.96C40.4987 53.3798 45.1073 48.7257 49.7903 43.9609Z" fill="white"/>
                    <path d="M102.529 54.7835C101.935 55.5592 101.489 56.1132 100.931 56.852C100.076 56.0394 99.4445 55.4853 98.8498 54.8943C95.1332 51.2006 91.4537 47.5069 87.6999 43.8502C86.9194 43.1114 86.7707 42.5574 87.6256 41.7448C88.3689 41.006 88.9264 41.043 89.6325 41.7448C93.7952 45.9186 97.995 50.0556 102.195 54.2294C102.343 54.3403 102.418 54.5988 102.529 54.7835Z" fill="white"/>
                    <path d="M99.5562 57.7384C97.8837 59.9916 97.8466 59.9916 96.1369 58.2925C92.3831 54.5618 88.6293 50.7943 84.8383 47.1006C84.0949 46.3988 83.5746 45.8078 84.5038 44.8105C85.4701 43.7763 86.0648 44.3303 86.7709 45.0321C91.0079 49.2799 95.2449 53.4537 99.5562 57.7384Z" fill="white"/>
                    <path d="M48.2292 42.5942C43.5462 47.2114 38.9376 51.7177 34.2917 56.2978C32.2104 55.1159 32.1733 54.8942 33.9201 53.1582C37.5624 49.5384 41.2047 45.9555 44.8099 42.3357C46.5939 40.5627 46.5939 40.5627 48.2292 42.5942Z" fill="white"/>
                    <path d="M86.139 54.8943C86.8452 55.9286 87.6629 56.5565 87.6257 57.1475C87.5885 57.7385 86.6965 58.2925 86.1762 58.8466C85.5815 58.2925 84.6152 57.8124 84.5037 57.1475C84.4294 56.6304 85.3585 55.9286 86.139 54.8943Z" fill="white"/>
                    <path d="M51.2767 57.2582C50.1617 57.96 49.4927 58.7727 48.8981 58.6619C48.2662 58.588 47.7831 57.6646 47.2256 57.1105C47.8203 56.5564 48.3777 55.633 49.0467 55.5222C49.5671 55.4853 50.2361 56.4456 51.2767 57.2582Z" fill="white"/>
                    </svg>
               </div>
                    <h1 className='text-bold text-xl'>Docktor</h1>
                    <p className='font-bold'>Need Help? We Are Here <br />
                    To Help You</p>
                    <div className='bg-white text-black px-8 py-3 mt-8 rounded-lg'>
                        <h1 className='text-xl'><span className='text-primaryColor
                        font-bold' >Car Doctor </span>Special</h1>
                        <p className='font-bold'>Save up to<span className='text-primaryColor'> 60% off</span></p>
                        <button className='bg-primaryColor py-2 px-4 text-white rounded relative top-6'>Get A Quote</button>
                    </div>
               </div>
                
               </div>
            </div>
            <div className='mt-8 space-y-3'>
                <p className='font-bold text-2xl'>Price ${price}</p>

               <Link to={`/checkout/${_id}`}><button className='bg-primaryColor w-full py-3 text-white font-bold rounded-lg'>Proceed Checkout</button></Link>
            </div> 
        </div>
    );
};

export default SiderCard;