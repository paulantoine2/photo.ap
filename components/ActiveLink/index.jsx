import { useRouter } from 'next/router'
import classnames from 'classnames'

export default function ActiveLink({ children, className, href }) {
  const router = useRouter();
  const classNames = {
    [className]: true,
    [className + '--open']: router.pathname === href
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }
  
  return (
    <a href={href} onClick={handleClick} className={classnames(classNames)}>
      {children}
    </a>
  )
}