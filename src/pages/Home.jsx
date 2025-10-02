import React from 'react'
// import banner from '../assets/banner.jpg'
// import bannerMobile from '../assets/banner-mobile.jpg'
import { useSelector } from 'react-redux'
import { valideURLConvert } from '../utils/valideURLConvert'
import { useNavigate } from 'react-router-dom'
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'
import Marquee from "react-fast-marquee";import Banner from '../components/Banner'
import NewsLetter from '../components/NewsLetter'
import Hero from '../components/Hero'

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
        <Hero/>
      </div>
      </div>

      
    




{/* shop by category */}


<div className='container mx-auto px-4'>
  <h2 className="text-xl sm:text-2xl font-bold mb-4">Shop by Category</h2>
    <div className=" my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-4">
      
  {loadingCategory ? (
    new Array(12).fill(null).map((c, index) => (
      <div
        key={index + "loadingcategory"}
        className="bg-white rounded-2xl p-4 min-h-36 flex flex-col items-center gap-3 shadow-md animate-pulse"
      >
        <div className="bg-blue-100 w-full h-24 rounded-xl"></div>
        <div className="bg-blue-100 h-6 w-3/4 rounded-md"></div>
      </div>
    ))
  ) : (
    categoryData.map((cat) => (
      <div
        key={cat._id + "displayCategory"}
        onClick={() => handleRedirectProductListpage(cat._id, cat.name)}
        className="group cursor-pointer bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center"
      >
        {/* Image */}
        <div className="w-full h-24 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50">
          <img
            src={cat.image}
            alt={cat.name}
            className="max-h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <h1 className="mt-3 text-sm font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
          {cat?.name}
        </h1>
      </div>
    ))
  )}
</div>
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
