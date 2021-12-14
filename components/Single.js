import Link from 'next/link'
import Image from 'next/image'
import formatDate from '../utils/utils'

export default function Single({post}) {
    return (
        <>
            <article className="mb-12 mx-auto">
                <div className="my-6 text-center">
                    <Image className="rounded-xl mx-auto" src={post.featuredImage.node.sourceUrl} width="980" height="600" layout='responsive'/>
                </div>
                <div>
                    <small className="text-gray-400 font-poppins text-sm">{formatDate(post.date)}</small>
                    <h1 className="text-gray-900 font-poppins font-semibold text-6xl my-6">
                        {post.title}
                    </h1>
                    <div className="text-gray-600 font-poppins my-2" dangerouslySetInnerHTML={{__html:post.content}}></div>
                </div>
            </article>
            <Link href={`/`}><a className="text-gray-900 font-poppins">Back to home</a></Link>
        </>
    )
}