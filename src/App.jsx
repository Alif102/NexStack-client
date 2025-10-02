import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import fetchUserDetails from './utils/fetchUserDetails';
import { setUserDetails } from './store/userSlice';
import { setAllCategory, setAllSubCategory, setLoadingCategory } from './store/productSlice';
import { useDispatch } from 'react-redux';
import Axios from './utils/Axios';
import SummaryApi from './common/SummaryApi';
import GlobalProvider from './provider/GlobalProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const dispatch = useDispatch()
  const location = useLocation()

  const [showModal, setShowModal] = useState(false);

  const fetchUser = async () => {
    const userData = await fetchUserDetails()
    dispatch(setUserDetails(userData.data))
  }

  const fetchCategory = async () => {
    try {
      dispatch(setLoadingCategory(true))
      const response = await Axios({
        ...SummaryApi.getCategory
      })
      const { data: responseData } = response

      if (responseData.success) {
        dispatch(setAllCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name))))
      }
    } catch (error) {
      // handle error if needed
    } finally {
      dispatch(setLoadingCategory(false))
    }
  }

  const fetchSubCategory = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.getSubCategory
      })
      const { data: responseData } = response

      if (responseData.success) {
        dispatch(setAllSubCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name))))
      }
    } catch (error) {
      // handle error if needed
    } finally {
    }
  }

  useEffect(() => {
    fetchUser()
    fetchCategory()
    fetchSubCategory()

    // Modal logic (show once)
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
      setShowModal(true);
      localStorage.setItem("modalShown", "true");
    }
  }, [])

  // helper to copy text and show toast
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard');
    } catch (err) {
      toast.error('Copy failed');
    }
  }

  const adminCreds = {
    email: 'alifahmed102@gmail.com',
    password: '1111111'
  }

  const userCreds = {
    email: 'user1@gmail.com',
    password: '123456'
  }

  return (
    <GlobalProvider>
      <Header />
      <main className='min-h-[78vh]'>
        <Outlet />
      </main>
      <Footer />
      <Toaster />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Test Credentials</h2>
            <p className="text-sm text-gray-600 mb-4">Use the following test accounts (only for development/testing).</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Admin Card */}
              <div className="border rounded-lg p-4 text-left">
                <h3 className="font-semibold mb-2">Admin</h3>
                <div className="text-sm mb-2">
                  <div><span className="font-medium">Email:</span> {adminCreds.email}</div>
                  <div><span className="font-medium">Password:</span> {adminCreds.password}</div>
                </div>
              
              </div>

              {/* User Card */}
              <div className="border rounded-lg p-4 text-left">
                <h3 className="font-semibold mb-2">User</h3>
                <div className="text-sm mb-2">
                  <div><span className="font-medium">Email:</span> {userCreds.email}</div>
                  <div><span className="font-medium">Password:</span> {userCreds.password}</div>
                </div>
              
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Close
              </button>

            
            </div>

        
          </div>
        </div>
      )}
    </GlobalProvider>
  )
}

export default App
