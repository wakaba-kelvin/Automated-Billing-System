import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./Content.scss"

function Content() {
  return (
  
    
    <div className="Content">
      <div className="upper">
        <Navbar/>
      </div>
      
      <div className="lower">
        
      <div className="cards">
        <div className="card1">
          <div className="toper">
          <h4>Income Today</h4>
          {/* <hr /> */}
          </div>
          <div className="lowerz">
            <div className="income">
              <h4>Ksh. <span><h5>0</h5></span></h4>
            </div>
            <div className="descriptionz">
              <div className="entities">
                0 entities
              </div>
              <div className="reports">
                <a href="#"> view reports</a>
              </div>

            </div>
          </div>
          
        </div>
        <div className="card2">
          <div className="toper">
          <h4>Income This month</h4>
          
          </div>
          <div className="lowerz">
            <div className="income">
              <p>Tap here to view</p>
            </div>
            <div className="descriptionz">
              
              <div className="reports">
                <a href="#"> view All</a>
              </div>

            </div>
          </div>
          
        </div>
        <div className="card3">
          <div className="toper">
          <h4>Active Users</h4>
          {/* <hr /> */}
          </div>
          <div className="lowerz">
            <div className="income">
              <span>1</span>
            </div>
            <div className="descriptionz">
                <a href="#">View all</a>
            </div>
          </div>
          
        </div>
        <div className="card4">
          <div className="toper">
          <h4>Total Users</h4>
          {/* <hr /> */}
          </div>
          <div className="lowerz">
            <div className="income">
              <span>1</span>
            </div>
            <div className="descriptionz">
              
              <div className="reports">
                <a href="#"> view reports</a>
              </div>

            </div>
          </div>
          
        </div>
      </div>
      <div className="container">
      

        <div className="aside-left">
          <div className="juu">
            <div className="aside1">
              <div className="num">
                <span><h3>0</h3></span>
              </div>
              <div className="conne">
                <p>Connected Clients</p>
              </div>
            </div>
            <div className="aside-center">
            <div className="num">
                <span><h3>0</h3></span>
              </div>
              <div className="conne">
                <p>Active Clients</p>
              </div>
            </div>
            <div className="aside2">
            <div className="num">
                <span><h3>0</h3></span>
              </div>
              <div className="conne">
                <p>Overdue Clients</p>
              </div>
            </div>

          </div>
          <div className="kati">
          <div className="aside1">
              <div className="num">
                <span><h3>0</h3></span>
              </div>
              <div className="conne">
                <p>Disconnected Clients</p>
              </div>
            </div>
            <div className="aside-center">
            <div className="num">
                <span><h3>0</h3></span>
              </div>
              <div className="conne">
                <p>Inactive Clients</p>
              </div>
            </div>
            <div className="aside2">
            <div className="num">
                <span><h3>0</h3></span>
              </div>
              <div className="conne">
                <p>Disabled Clients</p>
              </div>
            </div>
          </div>
          <div className="chini">
          <div className="aside1">
              <div className="num">
                <span><h3>0</h3></span>
              </div>
              <div className="conne">
                <p>Hotspot Clients</p>
              </div>
            </div>
            <div className="aside-center">
            <div className="num">
                <span><h3>0</h3></span>
              </div>
              <div className="conne">
                <p>Connected Clients</p>
              </div>
            </div>
            <div className="aside2">
            <div className="num">
                <span><h3>0</h3></span>
              </div>
              <div className="conne">
                <p>Disconnected </p>
                  <p>Clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="aside-right">
        {/* <div className="juu">
            
            </div> */}
            {/* <div className="kati"></div>
            <div className="chini"></div> */}
        </div>
      </div>

      </div>
    </div>
    
  )
}

export default Content