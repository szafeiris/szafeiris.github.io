import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToBottomIcon() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setHidden(latest > 100);
    });

    return (
        <motion.i
            className='fa-2x text-white scroll-to-bottom'
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.6 }}
        >
            <FontAwesomeIcon icon={faAngleDown} />
        </motion.i>
    );
}
