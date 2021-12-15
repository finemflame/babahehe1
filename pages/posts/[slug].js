import Head from 'next/head'
import Single from "../../components/Single"

export default function Post({post}) {
    return(
        <>
            <Head>
                <title>{post.title} | A simple Headless WP with NEXT.js and (WP)GraphQL</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
            </Head>
            <div className="mx-auto w-9/12 py-8 px-4">
                <Single post={post} />
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(process.env.WP_GRAPHQL_EP, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `
                query Post($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        content
                        date
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }`,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        }),
    })
    const json = await res.json()
    return {
        props: {
            post: json.data.post
        }
    }
}
export async function getStaticPaths() {
    const res = await fetch(process.env.WP_GRAPHQL_EP, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        query: `{
            posts {
                nodes {
                    slug
                }
            }
        }`
        })
    })
    const json = await res.json()
    const posts = json.data.posts.nodes
    const paths = posts.map(post => ({
        params: {slug: post.slug}
    }))
    return {paths, fallback: false}
}
