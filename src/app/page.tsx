import React from 'react';
import Header from '../components/layout/header/Header';
import '../app/globals.css';
import Banner from '../components/layout/banner/Banner'
import Input from '@/components/core-components/Input';

export default function Home(): JSX.Element {
    return (
        <div className="">
            
        <Banner />
        <Input type='text' placeholder='Text' />
        </div>
    );
};