
import ContactUs from './Components/ContactUs';
import RegisterForm from './Components/RegisterForm';
import AddAbout from './Dashboard/DashPages/About/AddAbout';
import AllAboutUs from './Dashboard/DashPages/About/AllAboutUs';
import EditAbout from './Dashboard/DashPages/About/EditAbout';
import AddBlog from './Dashboard/DashPages/Blogs/AddBlog';
import AllBlogs from './Dashboard/DashPages/Blogs/AllBlogs';
import EditBlog from './Dashboard/DashPages/Blogs/Editblog';
import AddWork from './Dashboard/DashPages/OurWorks/AddWork';
import AllWorks from './Dashboard/DashPages/OurWorks/AllWorks';
import EditWork from './Dashboard/DashPages/OurWorks/EditWork';
import AddProduct from './Dashboard/DashPages/Products/AddProduct';
import AddService from './Dashboard/DashPages/Services/AddService';
import AllServices from './Dashboard/DashPages/Services/AllServices';
import EditService from './Dashboard/DashPages/Services/EditService';
import AddTeam from './Dashboard/DashPages/Team/AddTeam';
import AllTeam from './Dashboard/DashPages/Team/AllTeam';
import EditTeam from './Dashboard/DashPages/Team/EditTeam';
import NewDashboard from './Dashboard/NewDashboard';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Aboutpage from './Pages/About/Aboutpage';
import Contactpage from './Pages/Contact/Contactpage';
import Blogpage from './Pages/Blogs/Blogpage';
import Servicespage from './Pages/Servicespage/Servicespage';
import Login from './Pages/User/Login';
import Signup from './Pages/User/Signup';
import Forgotpassword from './Pages/User/Forgotpassword';
import Shopsection from './Pages/Shop/Shopsection';
import AllProducts from './Dashboard/DashPages/Products/AllProducts';

function App() {
  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />

        <Route path='/about' element={<Aboutpage/>} />
         <Route path='/contact' element={<Contactpage/>} />
         <Route path='/blog' element={<Blogpage/>} />
         <Route path='/services' element={<Servicespage/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<Signup/>} />
         <Route path='/forgotpassword' element={<Forgotpassword/>} />
         <Route path='/shop' element={<Shopsection/>} />

       {/* Dashboard Pages */}
       
        <Route path='/addblog' element={<AddBlog/>} />
        <Route path='/editblog/:id' element={<EditBlog/>} />
        <Route path='/blog-list' element={<AllBlogs/>} />
        <Route path='/register' element={<RegisterForm/>} />
        <Route path='/work-list' element={<AllWorks/>} />
        <Route path='/addwork' element={<AddWork/>} />
        <Route path='/editwork/:id' element={<EditWork/>} />
        <Route path='/add-about' element={<AddAbout/>} />
        <Route path='/edit-about/:id' element={<EditAbout/>} />
        <Route path='/about-list' element={<AllAboutUs/>} />
        <Route path='/service-list' element={<AllServices/>} />
        <Route path='/add-service' element={<AddService/>} />
        <Route path='/edit-service/:id' element={<EditService/>} />
        <Route path='/team-list' element={<AllTeam/>} />
        <Route path='/add-team' element={<AddTeam/>} />
        <Route path='/edit-team/:id' element={<EditTeam/>} />


        <Route path='/add-product' element={<AddProduct/>} />
        <Route path='/products-list' element={<AllProducts/>} />
        <Route path='/contact-list' element={<ContactUs/>} />

        <Route path='/dashboard' element={<NewDashboard/>} />

        
      </Routes>
      </BrowserRouter>
   </>

  );
}

export default App;
