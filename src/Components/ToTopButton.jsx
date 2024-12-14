// HOOKS
import { useEffect } from 'react';

// ICONS
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function CircularProgress() {
    useEffect(() => {
        let handleCircularProgressBar = () => {
            let progBar = document.querySelector(".progress-circle .progress-bar");
            if (progBar)
                progBar.style.strokeDasharray = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}, 100`;
        }
        let handleAppearButton = () => {
            let progCircle = document.querySelector(".progress-circle");
            if (progCircle) {
                if (window.scrollY >= (window.innerHeight / 2)) {
                    progCircle.style.opacity = `1`;
                    progCircle.style.bottom = `20px`;
                }
                else {
                    progCircle.style.opacity = `0`;
                    progCircle.style.bottom = `-20px`;
                }
            }
        }

        window.addEventListener('scroll', handleCircularProgressBar);
        window.addEventListener('scroll', handleAppearButton);
        return () => {
            window.removeEventListener('scroll', handleCircularProgressBar);
            window.removeEventListener('scroll', handleAppearButton);
        }
    }, [])

    return (
        <div
            className="progress-circle hover-element"
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }}
        >
            <svg className="progress-svg hover-element" viewBox="0 0 36 36">
                <path
                    className="progress-bg hover-element"
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="progress-bar hover-element"
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <div className="progress-text hover-element">
                <KeyboardArrowUpIcon className='hover-element' />
            </div>

        </div>
    );
}
