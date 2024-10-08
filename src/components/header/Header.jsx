import { IoMdHeartHalf } from "react-icons/io";
import styles from "./Header.module.css"
import { useFavourites } from "../../hooks/useFavourites";
export const Header = () => {
    const fav = useFavourites()
    return (
        <header className={styles.header}>
            <IoMdHeartHalf fontSize={30} />
            <span>{fav.length}</span>
        </header>
    )
}