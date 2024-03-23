import blogs from '../../utils/blog';
import './Blog.css';

export const Blog = () => {
  return (
    <>
      <section className="blogs" id='blogs'>
        <header>My Medium Blogs</header>
        <div className="blog-container">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <picture>
                <img src={blog.image} alt="Blog Thumbnail"></img>
              </picture>
              <article>
                <p className='blog-title'>{blog.title}</p>
                <p className='blog-description'>{blog.description}</p>
                <div>
                <a className='btn-link'
                href={blog.link} target="_blank" rel="noopener noreferrer">
                  Read more &rarr;
                </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
