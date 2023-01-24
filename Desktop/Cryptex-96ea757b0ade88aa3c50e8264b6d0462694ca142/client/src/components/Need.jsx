import React from "react";
import { RiHeart2Fill } from "react-icons/ri";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { GiDivergence } from "react-icons/gi";
import { MdOutlineGppGood } from "react-icons/md";

const mystyle = {
  color: "white",
  // cursor: id,
  padding: "10px",
  fontSize: "15px",
  fontWeight : "bolder"
};
const mystyle2 = {
  color: "white",
  // cursor: id,
  padding: "18px",
  fontSize: "15px",
};

const Need = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services " id="need">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">

    <div className="flex flex-col px-20">
        <h1 className="text-white text-3xl sm:text-5xl py-2">
          Need For
          <br />
          Crypto Donation
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        
      <div className="p-0 pt-2 m-3 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <MdOutlineGppGood fontSize={35} className="bg-green-600 text-white p-1 rounded-md" />
      <button type="button" style={mystyle}>Crypto Is Here For Good</button>
        <div class="content" style={mystyle2}>
          <p>Today, mainstream crypto adoption is taking place at a rate similar to the internet in the mid-late 1990s. Sooner or later, cryptocurrencies will be ubiquitous among individual investors and businesses alike. A study from Deloitte found that nearly 75% of businesses plan to accept either cryptocurrency or stablecoin payments over the next two years.</p>
        </div>
      </div>
      <div className="p-0 pt-2 m-3 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <GiDivergence fontSize={35} className="bg-blue-600 text-white p-1 rounded-md" />
      
      <button type="button" style={mystyle}> Crypto Donations Help Diversify Nonprofit Revenue Streams</button>
        <div class="content" style={mystyle2}>
          <p>Crypto helps your organization become less reliant on one or two main methods of fundraising. You’ll have another donor base to connect with and further opportunities to fundraise, providing options no matter the time of year or what’s happening in the world.</p>
        </div>
      </div>
      <div className="p-0 pt-2 m-3 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <HiOutlineReceiptTax fontSize={35} className="bg-yellow-600 text-white p-1 rounded-md" />
      <button type="button" style={mystyle}>Crypto Charitable Giving Is Highly Tax-Efficient</button>
        <div class="content" style={mystyle2}>
          <p>Donating crypto is a very tax-friendly way to give charitably. Crypto is considered a property by the IRS for tax purposes, meaning that crypto donations are treated similar to stock donations. As a result, crypto donors often aren’t responsible for paying capital gains taxes on their donated cryptocurrency.</p>
        </div>
      </div>

      </div>


    </div>
  </div>
);

export default Need;
