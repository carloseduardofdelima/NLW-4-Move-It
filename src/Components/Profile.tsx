import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/carloseduardofdelima.png" alt="foto"/>
            <div>
                <strong>Carlos</strong>
                <p>
                    <img src="icons/level.svg" alt="icon"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}