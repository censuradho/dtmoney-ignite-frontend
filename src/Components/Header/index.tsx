import logoImg from '../../assets/logo.svg'

import { useState } from 'react';
import Modal from 'react-modal'

import {  Container } from './styles'
import { Content } from './styles';


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HeaderProps) {

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    New transaction
                </button>              
                
            </Content>
        </Container>
    );
}

