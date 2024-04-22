import Publication, { PublicationData } from './Publication';

export default function Publications({ publications }: { publications: PublicationData[] }) {
    return (
        <>
            <div className='col-lg-6'>
                <h3 className='mb-4'>Publications</h3>
                <div className='pt-2 pe-4 ms-2'>
                    {publications.map((publication, i) => (
                        <Publication
                            publication={publication}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
