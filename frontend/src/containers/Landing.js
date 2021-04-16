import React from 'react'
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <div className = 'landing'>
             <div>
               <img className = 'landing_hero' src = 'images/hero.jpg' alt = 'hero' />
           </div>

           <div className = 'landing_description'>
               <h1>
                   Welcome to Home Afrika. We help you discover the perfect home 
                   or apartment for you and your family.
                </h1>
           </div>
           
           <div className = 'landing_offers'>
               <hr/>
               <h1>What we Offer</h1>
               <hr/>
           </div>

           <div className = 'landing_cards'>
               <div className = 'landing_card'>
                    <img className = 'landing_card_img' src = 'images/spacious.jpg' alt = 'spacious' />
                    <h1 className = 'landing_card_h1'>Spacious Interiors</h1>
               </div>
               
               <div className = 'landing_card'>
                    <img className = 'landing_card_img' src = 'images/playground.jpg' alt = 'spacious' />
                    <h1 className = 'landing_card_h1'>Magical Playgrounds</h1>
               </div>

               <div className = 'landing_card'>
                    <img className = 'landing_card_img' src = 'images/parking.jpg' alt = 'spacious' />
                    <h1 className = 'landing_card_h1'>Secure Parking</h1>
               </div>
            </div>

            <Link to = '/search' className = 'landing_search_link' >
                <button className = 'landing_search'>
                    Find a Home/Apartment
                </button>
            </Link>
        </div>
    )
}

export default Landing
