import React from 'react'
import file1 from "../../images/file1.png";
import file2 from "../../images/file2.png";
import "../components/Map.css";
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"
import logo8 from "../assets/logo8.png"
import logo9 from "../assets/logo9.png"
import logo10 from "../assets/logo10.png"



const Map = () => {
  return (
    <div  id='map' >
                  <h3 className="text-white text-3xl text-center my-10 pt-16 lg:pt-20">
                  Cryptocurrency World Map – Search Interest by Country
          </h3>
          <div className='lg:px-[10rem] px-[1rem] '>
          {/* <img className='my-[1rem]' src={file1} alt="" /> */}
            {/* <img className='my-[1rem]' src={file2} alt="" /> */}
            <table id="customers">
                <tr id='customers-head'>
                  <th>Worldwide Search Interest</th>
                  <th>Dominance</th>
                  <th>Percentage</th>
                </tr>
                <tr>
                  <td className="icon-flex">1. <img src={logo1} alt="" /> Bitcoin</td>
                  <td><div id='one'></div></td>
                  <td>59.9%</td>
                </tr>
                <tr>
                  <td className="icon-flex">2. <img src={logo2} style={{backgroundColor:"white"}} alt="" /> Ethereum</td>
                  <td><div id='two'></div></td>
                  <td>13.1%</td>
                </tr>
                <tr>
                  <td className="icon-flex">3. <img src={logo3} alt="" /> Dogecoin</td>
                  <td><div id='three'></div></td>
                  <td>7.8%</td>
                </tr>
                <tr>
                  <td className="icon-flex">4. <img src={logo4} style={{backgroundColor:"white"}}alt="" /> XRP</td>
                  <td><div id='four'></div></td>
                  <td>5.5%</td>
                </tr>
                <tr>
                  <td className="icon-flex">5. <img src={logo5} alt="" /> Tron</td>
                  <td><div id='five'></div></td>
                  <td>4.8%</td>
                </tr>
                <tr>
                  <td className="icon-flex">6. <img src={logo6} alt="" /> Cardano</td>
                  <td><div id='six'></div></td>
                  <td>3.9%</td>
                </tr>
                <tr>
                  <td className="icon-flex">7. <img src={logo7} alt="" /> Solana</td>
                  <td><div id='seven'></div></td>
                  <td>1.5%</td>
                </tr>
                <tr>
                  <td className="icon-flex">8. <img src={logo8} alt="" /> Litecoin</td>
                  <td><div id='eight'></div></td>
                  <td>1.4%</td>
                </tr>
                <tr>
                  <td className="icon-flex">9. <img src={logo9} alt="" /> Binance Coin</td>
                  <td><div id='nine'></div></td>
                  <td>1%</td>
                </tr>
                <tr>
                  <td className="icon-flex">10. <img src={logo10} alt="" /> Avalanche</td>
                  <td><div id='ten'></div></td>
                  <td>1%</td>
                </tr>
              </table>
          </div>
    </div>
  )
}

export default Map
