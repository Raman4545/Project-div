import React from 'react';
import Navbar from '../components/navbar';
import Topbanner from '../components/topbanner';
import Contacts from '../components/contacts';
import Slogan from '../components/slogan';
import Services from '../components/services';
import Aboutcompany from '../components/about-company';
import Slogan2 from '../components/slogan-2';
import Note from '../components/note';
import MagicForm from '../components/magicform';
import ScrollableComponent from '../components/scrollableform';
const Dashboard = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Topbanner id="top-banner"></Topbanner>
     <ScrollableComponent></ScrollableComponent>
     <Slogan></Slogan>
     <Services id="services"></Services>
     <Slogan2></Slogan2>
     <Aboutcompany id="about-company"></Aboutcompany>
     <Note></Note>
     <Contacts id='contacts'></Contacts>
    </div>
  )
}

export default Dashboard;
