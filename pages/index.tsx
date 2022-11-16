import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Footer from '../components/Footer'

interface Props{
  posts: [Post];
}

export default function Home ({posts}: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>XXXFLIX - SEX SEX SEXY</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <meta name="description" content="XXXFLIX - SEX SEX SEXY" />
        <meta name="keywords" content="PORN SEX FUCK XXX XNXX XHAMSTER PORNHUB NAUGHTYAMERICA BRAZZERS FreE PORN WATCH SEX INDIAN SEX WHITE SEX BLACK SEX S" />
      </Head>
      <Header />
     
        

        


      {/* POSTS */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>

        {posts.map(post => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <img className='h-30 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={post.imagelink} alt="Featured Image for the Article" />
              <div className='flex justify-between p-5 bg-white'>
           
             <div>
              <p className='text-lg font-bold'>{post.title}</p>
              <p className='text-xs'>{post.description} by  {post.author.name}</p>
            </div>
            <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt="author image for the Article" />
            </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
    
  );
}

export const getServerSideProps = async () =>{
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
   description,
   mainImage,
   imagelink,
   slug
  }`;

  const posts = await sanityClient.fetch(query);

  return{
    props:{
      posts,
    },
  };


}


