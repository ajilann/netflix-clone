import React from 'react'
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../container/header';
import { FaqsContainer } from '../container/faqs';
import { FooterContainer } from '../container/footer';
import { JumbotronContainer } from '../container/jumbotron';


export default function home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
                </Feature>
            <OptForm>
               <OptForm.Input placeholder="Email address" />
               <OptForm.Button> Try it now</OptForm.Button>
               <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
            
        </>
    )
}

