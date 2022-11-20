import React from 'react'
import Navigation from '.';
import { selectLoggedState } from '../../../pages/Auth/authSlice';
import { useAppSelector } from '../../../redux/app/hooks';
import NoUserNavigation from './NoUserNavigation';

const NavPicker= () => {
    //in order not to call Cart endpoint everytime
  const islogged = useAppSelector(selectLoggedState);
    if(islogged){
        return (
            <Navigation/>
        )
    }
    else{
        return (
            <NoUserNavigation/>
        )
    }
}

export default NavPicker