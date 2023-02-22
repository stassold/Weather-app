import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './UI.module.css'

function ButtonLink(props) {
    return (
        <Link to={props.to} className={styles.link}>
            <Button className={styles.button_nav} variant={props.variant} color={props.color} disableElevation >
                {props.children}
            </Button>
        </Link>
    );
}

export default ButtonLink;
