// import { BsFillPersonFill, BsShield ,BsBarChartLine,BsActivity} from 'react-icons/bs';
// import { AiOutlineSetting } from 'react-icons/ai'
import { IoMdBusiness } from 'react-icons/io'
import { BsInboxes } from 'react-icons/bs'
// import { MdOutlinePlace } from 'react-icons/md'
// import { VscTypeHierarchySub } from 'react-icons/vsc'
// import { AiOutlineBarChart,AiOutlineNotification } from 'react-icons/ai'

interface ISidebarLink {
    title: string;
    link: string;
    icon: React.ReactNode;
}

export const sidebarLinks:ISidebarLink[] = [
    { title: "Home", icon: <IoMdBusiness /> ,link:'/'},
    { title: "Entretiens", icon: <BsInboxes /> ,link:'/entretiens'},
    { title: "Test", icon: <BsInboxes /> ,link:'/teers'},
  ];
