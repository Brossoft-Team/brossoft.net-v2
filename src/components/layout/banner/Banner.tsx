import React from 'react';
import Image from 'next/image';
import Button from '@/components/core-components/Button';

const Banner: React.FC = () => {
    return (
        <div className="w-full relative flex flex-col justify-center items-center bg-background p-8 h-[650px]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0 md:w-[620px]">
                    <p className='text-xl text-textSecondaryColor'>Hi, we are brossoft</p>
                    <h1 className="text-8xl font-extrabold text-textColor mb-4 md:w-px">WELCOME TO BROSSOFT!</h1>
                    <p className="text-xl text-textSecondaryColor">Brossoft is a freelance company that creates custom websites, offering professional and user-friendly designs</p>
                </div>
                <Image src="/assets/brossoft_transparent.svg" alt="Banner image" width={400} height={400} />
            </div>
            <Button label='label' className='relative left-0'/>
        </div>
    );
};

export default Banner;
