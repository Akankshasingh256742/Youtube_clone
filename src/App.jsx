import './App.css'
import Header from './component/Header'
import Body from './component/body'
import { Provider } from 'react-redux'
import store from './util/store'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Maincontainer from './component/Maincontainer'
import Watch from './component/Watch'
import Suggestions from './component/Suggestions'
import SuggesSearch from './component/SuggesSearch'


const approuter = createBrowserRouter([{
  path:'/',
  element:<Header />,
  children:[
     {
      path: '/',
      element:<Body />,
      children:[
        {
          path:'/',
          element:<Maincontainer />
         },
         {
          path:'/watch',
          element:<Watch />
         },
         {
          path:'/suggestion',
          element:<SuggesSearch />
         }
      ]
     },
  ]
}])

function App() {
  return (
    <div className=''>
      <Provider store={store} >
      
      <RouterProvider router={approuter} />
      </Provider>
    </div>
  )
}

export default App
