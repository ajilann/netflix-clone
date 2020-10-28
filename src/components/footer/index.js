import React from 'react'
import {Container, Row, Column, Link, Title, Text, Break } from './styles/footer';

export default function Footer({children, ...restProps}) {
    return <Container { ...restProps}>{children}</Container>; 
}

Footer.Row = function FooterRow({children, ...restProps}) {
    return <Row { ...restProps}>{children}</Row>
};

Footer.Column = function FooterColumn({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
};

Footer.Link = function FooterLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
};

Footer.Title = function FooterTitle({children, ...restPorps}){
    return <Title {...restPorps}>{children}</Title>
};

Footer.Text = function FooterText({children, ...restPorps}){
    return <Text {...restPorps}>{children}</Text>
};

Footer.Break = function FooterBreak({children, ...restPorps}){
    return <Break {...restPorps}>{children}</Break>
};


