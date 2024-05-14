
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import { Sidebar, Navbar } from './component';
import { StateContextProvider } from './context';

export function App() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
       <div className="sm:flex hidden mr-10 relative">
        <BrowserRouter>
         <Sidebar />
        </BrowserRouter>
       </div>
       

       <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
