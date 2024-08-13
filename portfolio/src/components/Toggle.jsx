import styles from "./Toggle.module.scss"


export function Toggle() {
    const setDarkMode = () => {
        document.querySelector('body')?.setAttribute('data-theme','dark')
    }
    const setLightMode = () => {
        document.querySelector('body')?.setAttribute('data-theme','light')
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setLightMode();
        else setDarkMode();

    }
    return(
        <div className={styles.lightmode__switch}>
                <input
                className={styles.lightmode__inp} 
                type="checkbox"
                id='lightmode__toggle' 
                onChange={toggleTheme}/>
                 <label className={styles.lightmode__label} htmlFor='lightmode__toggle'>
            </label>
            </div>
    )
}