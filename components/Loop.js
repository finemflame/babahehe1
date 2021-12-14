import Link from 'next/link'
import Image from 'next/image'
import formatDate from '../utils/utils'

export default function Loop({list}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-6">
          {list.map(post => {
              return (
                <article key={post.slug}>
                  <Link href={`/posts/${post.slug}`}>
                    <a>
                      <Image className="rounded-lg" src={post.featuredImage.node.sourceUrl} width="700" height="428"/>
                    </a>
                  </Link>
                  <small className="text-gray-400 font-poppins text-xs">{formatDate(post.date)}</small>
                  <h3 className="text-gray-900 font-poppins font-semibold text-lg mt-1 mb-2 leading-tight">  
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <div className="text-gray-600 font-poppins text-sm" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                </article>
              )
            })}
        </div>
    )
}