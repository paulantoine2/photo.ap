import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Masonry from 'react-masonry-css'

const WorkCategory = () => {
  const router = useRouter()
  const { category } = router.query
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1
  };

  return <Layout>
    <section className="Work__masonry">
      <h1 className="typography__eyebrow"><Link href="/work"><a>My Work</a></Link> {'>'} {category}</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <div>
          <h2 className="typography__headline">Komodo Cruise</h2>
          <h2 className="typography__subhead">4 Days in the Flores Sea, exploring Indonesian Islands</h2>
        </div>
        <img src="/travel1.jpeg" alt="" />
        <img src="/travel2.jpeg" alt="" />
        <img src="/event1.jpeg" alt="" />
        <img src="/portrait2.jpeg" alt="" />
        <img src="/portrait1.jpeg" alt="" />
        <img src="/event2.jpeg" alt="" />
        <img src="/contact.jpeg" alt="" />
        <img src="/profile.jpeg" alt="" />
        <h2 className="typography__headline">Java Volcanoes</h2>
        <img src="/portrait2.jpeg" alt="" />
        <img src="/travel1.jpeg" alt="" />
        <img src="/travel2.jpeg" alt="" />
        <img src="/event1.jpeg" alt="" />
        <img src="/portrait2.jpeg" alt="" />
        <img src="/portrait1.jpeg" alt="" />
        <img src="/event2.jpeg" alt="" />
        <img src="/contact.jpeg" alt="" />
        <img src="/profile.jpeg" alt="" />
        <img src="/portrait2.jpeg" alt="" />
      </Masonry>
    </section>
  </Layout>
}

export default WorkCategory