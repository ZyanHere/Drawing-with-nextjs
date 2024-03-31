import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <div>
                <FontAwesomeIcon icon={faPencil} className={styles.icon} />
            </div>
            <div>
                <FontAwesomeIcon icon={faEraser} className={styles.icon} />
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