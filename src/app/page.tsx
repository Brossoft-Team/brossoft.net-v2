import React from 'react';
import Header from '../components/layout/header/Header';
import '../app/globals.css';
import Banner from '../components/layout/banner/Banner'
import Input from '@/components/core-components/Input';
import  Footer from "../components/layout/footer/Footer";

export default function Home(): JSX.Element {
    return (
        <div className="font-poppins font-medium">
            
        <Banner />
        <Input type='text' placeholder='Text' />
       
        </div>
    );
};