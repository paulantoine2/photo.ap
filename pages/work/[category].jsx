import { useRouter } from 'next/router'
import ReactDom from 'react-dom'
import Layout from '../../components/Layout'
import { Client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import Masonry from 'react-masonry-css'

export default class WorkCategory extends React.Component {
  breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1
  };
  imgExpanded = false;
  expandedBounds = null;

  constructor(props) {
    super(props);
  }
  static async getInitialProps(context) {
    const { category } = context.query
    const work = await Client(context.req).getByUID('work_category', category)
    const collections = await Client(context.req).getByIDs(work.data.collections.map(i => i.collection.id))
    return {
      work: work.data,
      collections: collections.results.map(res => res.data)
    }
  }

  expand(e) {
    if (window.innerWidth < 600) return;
    const img = e.target;
    const container = e.currentTarget;
    const black = document.getElementById('blackout');
    const bounds = container.getBoundingClientRect();
    if (!this.imgExpanded) {
      this.imgExpanded = true;
      container.style.width = bounds.width + 'px';
      container.style.height = bounds.height + 'px';
      img.style.height = bounds.height + 'px';
      img.style.top = bounds.y + 'px';
      img.style.left = bounds.x + 'px';
      img.classList.add('fixed');
      setTimeout(() => {
        black.style.opacity = '0.8';
        black.style.zIndex = '500';
        img.classList.add('expand');
      }, 0);
    } else {
      this.imgExpanded = false;
      img.classList.remove('expand');
      black.style.opacity = '0';
      setTimeout(() => {
        black.style.zIndex = '-1';
        img.classList.remove('fixed');
        img.style = null;
        container.style = null;
      }, 300)
    }

  }

  render() {
    const { work, collections } = this.props;
    const render_col = collections.map((col, j) => {
      const masonry_items = [...col.pictures.map((p, i) => {
        return <div className="Collection__container" key={i} onClick={this.expand.bind(this)}>
          <img src={p.picture.url} alt={p.picture.alt} />
        </div>
      })]
      return <div className="Work__collection">
        <h2 className="typography__headline">{RichText.asText(col.collection_title)}</h2>
        <h2 className="typography__subhead">{RichText.asText(col.description)}</h2>
        <Masonry
          breakpointCols={this.breakpointColumnsObj}
          className="Collection my-masonry-grid"
          columnClassName="Collection__column my-masonry-grid_column"
          key={j}>
          {
            masonry_items.map(i => i)
          }
        </Masonry>
      </div>

    });
    return <Layout>
      <section className="Work__masonry">
        <h1 className="typography__eyebrow"><Link href="/work"><a>My Work</a></Link> {'>'} {RichText.asText(work.title)}</h1>
        {render_col}
      </section>
      <div id="blackout"></div>
    </Layout>
  }
}