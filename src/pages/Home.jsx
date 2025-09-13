import React from 'react'
// import banner from '../assets/banner.jpg'
// import bannerMobile from '../assets/banner-mobile.jpg'
import { useSelector } from 'react-redux'
import { valideURLConvert } from '../utils/valideURLConvert'
import { useNavigate } from 'react-router-dom'
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'
// import HeaderSlider from '../components/HeaderSlider'
import Banner from '../components/Banner'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  const loadingCategory = useSelector(state => state.product.loadingCategory)
  const categoryData = useSelector(state => state.product.allCategory)
  const subCategoryData = useSelector(state => state.product.allSubCategory)
  const navigate = useNavigate()

  const handleRedirectProductListpage = (id, cat) => {
    console.log(id, cat)
    const subcategory = subCategoryData.find(sub => {
      const filterData = sub.category.some(c => {
        return c._id == id
      })

      return filterData ? true : null
    })
    const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(subcategory.name)}-${subcategory._id}`

    navigate(url)
    console.log(url)
  }


  return (
    <section className='bg-white'>

      <div>
        <h1 className=' text-white'>Hellooo</h1>
        
        <div className='container mx-auto'>

        <Banner />


      </div>
      </div>

      
      {/* <div className='container mx-auto'>
        <div className={`w-full h-full min-h-48 bg-blue-100 rounded ${!banner && "animate-pulse my-2"} `}>
          <img
            src={banner}
            className='w-full h-full hidden lg:block'
            alt='banner'
          />
          <img
            src={bannerMobile}
            className='w-full h-full lg:hidden'
            alt='banner'
          />
        </div>
      </div> */}




   <div className="container mx-auto px-4 my-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4 lg:gap-8">
  {loadingCategory
    ? new Array(12).fill(null).map((c, index) => (
        <div
          key={index + "loadingcategory"}
          className="bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse"
        >
          <div className="bg-blue-100 min-h-24 rounded"></div>
          <div className="bg-blue-100 h-8 rounded"></div>
        </div>
      ))
    : categoryData.map((cat) => (
        <div
          key={cat._id + "displayCategory"}
          onClick={() =>
            handleRedirectProductListpage(cat._id, cat.name)
          }
          className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
        >
          {/* Image */}
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay with name */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h1 className="text-white text-lg font-semibold text-center">
              {cat.name}
            </h1>
          </div>
        </div>
      ))}
</div>


      {/***display category product */}
      {
        categoryData?.map((c, index) => {
          return (
            <CategoryWiseProductDisplay
              key={c?._id + "CategorywiseProduct"}
              id={c?._id}
              name={c?.name}
            />
          )
        })
      }

      <div>
        <NewsLetter/>
      </div>



    </section>
  )
}

export default Home
