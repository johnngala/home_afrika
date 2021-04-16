import React from 'react';
import { Helmet } from 'react-helmet';


const About = () => {
  
    return (
        <main className='about'>
            <Helmet>
                <title>Bold Collections - About</title>
                <meta
                    name='description'
                    content='About us'
                />
            </Helmet>

            <header className='about__header'>
                <h1 className='about__heading'>Who we are!</h1>
            </header>

             <div className = 'about__image'>
                    <img src = 'images/about.jpg' alt = 'about' className = 'about__us__image'/>
            </div>
            
            <section className='about__info'>
                <div className='about__about'>  
                    <h2 className='about__subheading'>Comfortable Living.Healthy Life</h2>
                    <p className='about__paragraph'>
                        Home Afrika is a real estate firm focused on delivering high quality and customized services to clients in Kenya. The firm began operations with a team of only four members of staff but has now grown to over two hundred and the initial five clients have multiplied many times over.
                        Today, the company has made its presence strongly felt in the Kenyan property market and can with certainty declare itself a market leader. The firm offers a wide scope of real estate services, particularly specializing in real estate consultancy, management and sale of residential properties and a variety of commercial properties in Nairobi, Mombasa and East African region.
                        Home Afrika has expertise in both rental property and property for sale in Kenya. In over two decades of its existence, Home Afrika has definitely impacted housing in Kenya in a big way. With one of the largest property listings by a property Agent in Kenya,Home Afrika continues  to epitomize its mantra of caring, always.
                        Home Afrika offers highly specialized and professional property management services in Kenya. This is on the backbone of decades of experience and knowledge of the field. The professionalism and seamless property management of Home Afrika are unmatched in the region.
                    </p>    
                </div>
                
            </section>
            
        </main>
    );
};

export default About;
