import styles from "../assets/scss/common.module.scss";

export const FtuxBlock = ({ icon= <></>, title="", desc="", btnRender=<></> }) => {
    return <div className={styles.common_ftux_block}>
        {icon && icon}
        <div className={styles.common_ftux_block_content}>
            {title && <span className={styles.common_ftux_block_content_title}>{title}</span>}
            {desc && <span className={styles.common_ftux_block_content_desc}>{desc}</span>}
        </div>
        {btnRender && btnRender}
    </div>
};