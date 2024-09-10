import React from 'react';
import Input from '@/components/core-components/Input';
import Button from '@/components/core-components/Button';

const Contact: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-background p-8">
            <div className="container mx-auto flex justify-between">
                <div className=''>
                    <h2 className="text-5xl font-semibold text-textColor mb-10">Tell me about your project</h2>

                    <p className=" text-lg text-secondaryText">Any project starts with goal setting. If you have a vision, I can design it.</p>
                    <br />
                    <br />
                    <p className="text-lg text-secondaryText">After the inquiry, I will reply within 2-3 working days, with an approximate quote for the project or with questions for more details. After that, we can have an intro call to discuss your project and see if it's a match.</p>
                    <div className=''>
                        <p className='text-[#a4a4a4] mt-14 text-base'>send an email</p>
                        <div className='hover:translate-y-[-2px] max-w-5 transition-all'>
                            <a className='text-textColor font-bold text-lg hover:text-textSecondaryColor ' href="mailto:info@brossoft.com">info@brossoft.com</a>
                        </div>
                        
                    </div>
                </div>

                <form className="w-full max-w-lg">
                    <Input type="text" placeholder="Your Name" className="w-full" />
                    <Input type="email" placeholder="Your Email" className="w-full" />
                    <Input type="text" placeholder="Subject" className="w-full" />
                    <textarea
                        placeholder="Your Message"
                        className="bg-white rounded-xl text-textColor font-semibold py-3 focus:outline-none outline-none mb-6 px-4 shadow-[3px_3px_rgba(40,40,37)] border-2 border-[#282825] border-solid hover:shadow-[6px_6px_rgba(40,40,37)] duration-200 w-full h-32"
                    />
                    <Button label='Send message' />
                </form>
            </div>
        </div>
    );
};

export default Contact;
