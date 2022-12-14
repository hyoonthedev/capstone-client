import './Footer.scss';

import { useState } from 'react';

function Footer() {

    const [gitOpen, setGitOpen] = useState(false);
    const [linkedOpen, setLinkedOpen] = useState(false);

    const handleGit = () => {
        if(gitOpen === false){
            setGitOpen(true)
        } else {
            setGitOpen(false)
        }
    }

    const handleLinked = () => {
        if(linkedOpen === false){
            setLinkedOpen(true)
        } else {
            setLinkedOpen(false)
        }
    }
    return(
        <footer className="footer">
            <span className="footer__github">
                <i onClick={() => handleGit()} className="fa-brands fa-github"></i>
                <p className={gitOpen === false ? "footer__text-hidden" : "footer__text"}>github.com/hyoonhyoon</p>
            </span>
            <span className="footer__linkedin">
                <i onClick={() => handleLinked()} className="fa-brands fa-linkedin"></i>
                <p className={linkedOpen === false ? "footer__text-hidden" : "footer__text"}>linkedin.com/in/vincentc1292</p>
            </span>
        </footer>
    )
}

export default Footer;