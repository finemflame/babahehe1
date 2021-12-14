import Head from 'next/head'
import LogoBar from '../components/LogoBar'
import LastPost from '../components/LastPost'
import Loop from '../components/Loop'
import Foot from '../components/Foot'

export default function Homepage({posts, menuItems}) {
  return(
    <>
      <Head>
        <title>B!THE BLOG | A basic Headless WP with NEXT.js, (WP)GraphQL &amp; tailwindcss</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>
      <LogoBar menuItems={menuItems} />
      <div className="mx-auto w-9/12 py-8 px-4">
        <h1 className="text-gray-900 font-poppins font-bold text-8xl mb-12">The Blog</h1>
        <LastPost lastOne={posts.nodes[0]}/>
        <Loop list={posts.nodes.slice(1)} />
      </div>
      <div className="mx-auto w-9/12 py-6 px-4">
        <hr className='border-gray-900 border-2 mb-6' />
        <Foot />
      </div>
    </>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://btheblog.000webhostapp.com/graphql', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: `query MyQuery {
        menuItems(where: {location: PRIMARY}) {
          nodes {
            label
            url
          }
        },
        posts {
          nodes {
            title
            slug
            excerpt
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }`
    })
  })
  const json = await res.json()
  return {
    props: {
      posts: json.data.posts,
      menuItems: json.data.menuItems.nodes
    }
  }
}