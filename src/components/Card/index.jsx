import Image from 'next/image'
import cls from './Card.module.scss'

export default function Card({ icon, text }) {

  return(
    <div className={cls.card}>
      <Image src={icon} alt={text} width={35} height={35}/>
      <p>{ text }</p>
    </div>
  )
}