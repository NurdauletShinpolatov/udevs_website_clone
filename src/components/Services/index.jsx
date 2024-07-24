import { services } from '@/utils/constants/servicesConst'
import cls from './Services.module.scss'
import Card from '../Card'

export default function Services() {

  return(
    <div className={cls.services}>
      <div className="container">
        <h1 className={cls.heading}>
          Our services
        </h1>
        <div className={cls.grid}>
          {services.map(service => (
            <Card icon={service.icon} text={service.text} key={service.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}