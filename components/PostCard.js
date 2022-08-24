import Image from 'next/image';
import Logo from './../static/banner.png'
import { FiBookmark } from 'react-icons/fi'

const styles = {
  wrapper:`flex max-width-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  authorContainer: `flex gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorName: `font-semibold`,
  authorImage: `object-cover`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  articleDetails: `my-2 text-[.8rem] `,
  detailsContainer:`flex items-center justify-between text-[#787878]`,
  category: `bg-[#f2f3f2] p-1 rounded-full`,
  postDetails: `flex-[2.5] flex flex-col`,
  bookmarkContainer: `cursor-pointer`,
  thumbnailContainer:``
}

const PostCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.postDetails}>
        <div className={styles.authorContainer}>
          <div className={styles.authorImageContainer}>
            <Image
              src={Logo}
              className={styles.authorImage}
              width={40}
              height={40}
            />
          </div>

          <div className={styles.authorName}>Joshua Ramat</div>
        </div>

        <h1 className={styles.title}>7 Free Tools That Will Make You More Productive In 2022</h1>
        <div className={styles.briefing}>
          Productivity is a skill that can be learned.
        </div>
        <div className={styles.detailsContainer}>
          <span className={styles.articleDetails}>Aug 23 • 5 min read • <span className={styles.category}>productivity</span></span>
          <span className={styles.bookmarkContainer}>
            <FiBookmark className='h-5 w-5' />
          </span>
        </div>
      </div>

      <div className={styles.thumbnailContainer}>
        <Image
          height={100}
          width={100}
          src={Logo}
        />
      </div>
    </div>
  )
}

export default PostCard