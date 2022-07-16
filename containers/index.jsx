import styles from './container.module.sass'

const Layout = ({children, type}) =>{
    return(
        <div className={type === '1' ? styles.container1 : styles.container2}>
            {children}
        </div>
    )
}

export default Layout;