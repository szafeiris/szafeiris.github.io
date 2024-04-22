import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToTopButton() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(true);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setHidden(latest <= 200);
    });

    function handleScrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <motion.a
            className='btn btn-outline-dark px-0 back-to-top'
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.6 }}
            onClick={handleScrollToTop}
        >
            <FontAwesomeIcon icon={faAngleDoubleUp} />
        </motion.a>
    );
}
