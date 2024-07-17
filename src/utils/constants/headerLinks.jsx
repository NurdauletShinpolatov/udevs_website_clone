// icons of Services
import phoneIcon from '@/assets/images/mobileApp.svg'
import erpIcon from '@/assets/images/erp.svg'
import designIcon from '@/assets/images/ui_ux.svg'
import consultingIcon from '@/assets/images/consulting.svg'
import optimizingIcon from '@/assets/images/optimizing.svg'

// icons of Portfolio
import d from '@/assets/images/D.svg'
import s from '@/assets/images/S.svg'
import g from '@/assets/images/G.svg'
import i from '@/assets/images/I.svg'

// icon of Languages
import ru from '@/assets/images/ru.svg'
import en from '@/assets/images/en.svg'

export const headerLinks = [
  {
    id: 1,
    text: 'Direction',
    isDropDown: false,
  },
  {
    id: 2,
    text: 'Command',
    isDropDown: false,
  },
  {
    id: 3,
    text: 'Services',
    isDropDown: true,
    subitems: [
      {
        id: 31,
        text: "Development of mobile applications",
        icon: phoneIcon
      },
      {
        id: 32,
        text: "Development and implementation ERP systems",
        icon: erpIcon
      },
      {
        id: 33,
        text: "User interface, User Experience design",
        icon: designIcon
      },
      {
        id: 34,
        text: "IT consulting",
        icon: consultingIcon
      },
      {
        id: 35,
        text: "Optimization IT consulting infrastracture",
        icon: optimizingIcon
      },
    ]
  },
  {
    id: 4,
    text: 'Tools',
    isDropDown: false,
  },
  {
    id: 5,
    text: 'Clients',
    isDropDown: false,
  },
  {
    id: 6,
    text: 'Portfolio',
    isDropDown: true,
    subitems: [
      {
        id: 1,
        text: "Delever",
        icon: d
      },
      {
        id: 2,
        text: "Sms.uz",
        icon: s
      },
      {
        id: 3,
        text: "Goodzone",
        icon: g
      },
      {
        id: 4,
        text: "Iman",
        icon: i
      },
    ]
  },
  {
    id: 7,
    text: 'Language',
    isDropDown: true,
    subitems: [
      {
        id: 1,
        text: "Рус",
        icon: ru
      },
      {
        id: 2,
        text: "Eng",
        icon: en
      }
    ]
  }
]