import { ReactTyped } from 'react-typed';

export interface HomeProps {
    jobTitles: string[];
    typeSpeed: number;
    deleteSpeed: number;
    profilePicture: string;
}

export default function Home({ jobTitles, typeSpeed, deleteSpeed, profilePicture }: HomeProps) {
    return (
        <>
            <div
                className='container-fluid bg-primary d-flex align-items-center mb-5 py-5'
                id='home'
                style={{ minHeight: '100vh' }}
            >
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0'>
                            <img
                                className='img-fluid w-100 rounded-circle shadow-sm'
                                src={profilePicture}
                                alt='Profile picture'
                            />
                        </div>
                        <div className='col-lg-7 text-center text-lg-start pb-5'>
                            <h3 className='text-white  mb-3'>I'm</h3>
                            <h1
                                className='display-3 text-uppercase er text-primary mb-2'
                                style={{ WebkitTextStroke: '2px #ffffff' }}
                            >
                                Stelios Zafeiris
                            </h1>
                            <h1>
                                <ReactTyped
                                    strings={jobTitles}
                                    typeSpeed={typeSpeed}
                                    loop
                                    backSpeed={deleteSpeed}
                                    cursorChar='|'
                                    showCursor={true}
                                    className='text-white'
                                />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
