import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
import {useDispatch} from 'react-redux'
import { menuItemClick, actionItemClick } from '@/slice/menuSlice'
import { MENU_ITEMS } from '@/constants'

const Menu = () => {
    const dispatch = useDispatch()

    const handleMenuClick = (itemName) => {
        dispatch (menuItemClick(item))
    }

    return (
        <div className={styles.menuContainer}>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)} />
            </div>
            <div>
                <FontAwesomeIcon icon={faEraser} className={styles.icon} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}/>
            </div>
            <div>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>
            </div>
            <div>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon}/>
            </div>
            <div>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon}/>
            </div>
        </div>
    )
}

export default Menu;