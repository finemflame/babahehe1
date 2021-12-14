import Link from 'next/link'
import Image from 'next/image'
import formatDate from '../utils/utils'

export default function LastPost({lastOne}) {
    return (
        <article className="md:grid md:grid-cols-3 md:gap-x-6 mb-12">
          <div className="col-span-2">
          <Link href={`/posts/${lastOne.slug}`}><a><Image className="rounded-xl" src={lastOne.featuredImage.node.sourceUrl} width="980" height="600" layout='responsive'/></a></Link>
          </div>
          <div>
            <small className="text-gray-400 font-poppins text-sm">{formatDate(lastOne.date)}</small>
            <h2 className="text-gray-900 font-poppins font-semibold text-4xl 2xl:text-6xl mb-4 leading-tight">
              <Link href={`/posts/${lastOne.slug}`}><a>{lastOne.title}</a></Link>
            </h2>
            <div className="text-gray-600 font-poppins 2xl:text-xl" dangerouslySetInnerHTML={{__html:lastOne.excerpt}}></div>
          </div>
        </article>
    )
}