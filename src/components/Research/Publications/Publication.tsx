import { ReactNode } from 'react';

export interface PublicationData {
    citation: string | ReactNode;
}

export default function Publication({ publication }: { publication: PublicationData }) {
    return (
        <>
            <div className='position-relative mb-4'>
                <i
                    className='far fa-dot-circle text-primary position-absolute'
                    style={{ top: '2px', left: '-32px' }}
                ></i>
                <p className='text-justify'>{publication.citation}</p>
            </div>
        </>
    );
}
