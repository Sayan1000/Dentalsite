import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import PortfolioGrid from '../components/PortfolioGrid'
import VideoGallery from '../components/VideoGallery'
import Testimonials from '../components/Testimonials'
import ContactBlock from '../components/ContactBlock'
import Footer from '../components/Footer'
import GALLERY from '../data/gallery'

export default function Home(){
  const galleryItems = GALLERY.slice(0,9) // or full list

  return (
    <>
      <Head>
        <title>Dhananjoy Mondal — Dental Technician</title>
        <meta name="description" content="Dento-lab portfolio — dentures & prosthetics"/>
      </Head>

      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <PortfolioGrid items={galleryItems} />
        <VideoGallery items={[
          { id:'v1', src:'/media/2.mp4', thumb:'/media/Thumbnail2.jpg', caption:'Denture finishing'},
          { id:'v2', src:'/media/video2.mp4', thumb:'/media/Thumbnail1.webp', caption:'Polishing workflow'},
          { id:'v3', src:'/media/Video3.mp4', thumb:'/media/Thumbnail3.webp', caption:'Clinical Explanation by the Dentist'}
        ]} />
        <Testimonials />
        <ContactBlock />
      </main>
      <Footer />
    </>
  )
}
