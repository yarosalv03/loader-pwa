import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Theme'

import usflag from '../assets/flags/us.png'
import idflag from '../assets/flags/id.png'
import jpflag from '../assets/flags/jp.png'
import itflag from '../assets/flags/it.png'
import gbflag from '../assets/flags/gb.png'
import frflag from '../assets/flags/fr.png'
import fiflag from '../assets/flags/fi.png'
import esflag from '../assets/flags/es.png'
import eeflag from '../assets/flags/ee.png'
import dkflag from '../assets/flags/dk.png'
import deflag from '../assets/flags/de.png'
import czflag from '../assets/flags/cz.png'
import coflag from '../assets/flags/co.png'
import clflag from '../assets/flags/cl.png'
import chflag from '../assets/flags/ch.png'
import caflag from '../assets/flags/ca.png'
import brflag from '../assets/flags/br.png'
import beflag from '../assets/flags/be.png'
import auflag from '../assets/flags/au.png'
import atflag from '../assets/flags/at.png'
import isflag from '../assets/flags/is.png'
import ieflag from '../assets/flags/ie.png'
import arflag from '../assets/flags/ar.png'
import saflag from '../assets/flags/sa.png'
import egflag from '../assets/flags/eg.png'
import aeflag from '../assets/flags/ae.png'
import inflag from '../assets/flags/in.png'
import uyflag from '../assets/flags/uy.png'
import svflag from '../assets/flags/sv.png'
import pyflag from '../assets/flags/py.png'
import paflag from '../assets/flags/pa.png'
import niflag from '../assets/flags/ni.png'
import hnflag from '../assets/flags/hn.png'
import gtflag from '../assets/flags/gt.png'
import ecflag from '../assets/flags/ec.png'
import doflag from '../assets/flags/do.png'
import crflag from '../assets/flags/cr.png'
import boflag from '../assets/flags/bo.png'
import ilflag from '../assets/flags/il.png'
import huflag from '../assets/flags/hu.png'
import zwflag from '../assets/flags/zw.png'
import zaflag from '../assets/flags/za.png'
import ugflag from '../assets/flags/ug.png'
import uaflag from '../assets/flags/ua.png'
import tzflag from '../assets/flags/tz.png'
import trflag from '../assets/flags/tr.png'
import seflag from '../assets/flags/se.png'
import ruflag from '../assets/flags/ru.png'
import rsflag from '../assets/flags/rs.png'
import roflag from '../assets/flags/ro.png'
import ptflag from '../assets/flags/pt.png'
import plflag from '../assets/flags/pl.png'
import peflag from '../assets/flags/pe.png'
import nzflag from '../assets/flags/nz.png'
import noflag from '../assets/flags/no.png'
import nlflag from '../assets/flags/nl.png'
import ngflag from '../assets/flags/ng.png'
import mxflag from '../assets/flags/mx.png'
import luflag from '../assets/flags/lu.png'
import krflag from '../assets/flags/kr.png'
import keflag from '../assets/flags/ke.png'

import '../styles/Home.css'

export default function CountrySelect({ changeCountry }) {
    const { theme } = useContext(ThemeContext);
    const [isOpened, setIsOpened] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        'symbol': 'us',
        'name': 'USA',
        'flag': usflag
    });
    const countries = [
        {
            'symbol': 'us',
            'name': 'USA',
            'flag': usflag
        },
        {
            'symbol': 'id',
            'name': 'Indonesia',
            'flag': idflag
        },
        {
            'symbol': 'jp',
            'name': 'Japan',
            'flag': jpflag
        },
        {
            'symbol': 'it',
            'name': 'Italy',
            'flag': itflag
        },
        {
            'symbol': 'gb',
            'name': 'United Kingdom',
            'flag': gbflag
        },
        {
            'symbol': 'fr',
            'name': 'France',
            'flag': frflag
        },
        {
            'symbol': 'fi',
            'name': 'Finland',
            'flag': fiflag
        },
        {
            'symbol': 'es',
            'name': 'Spain',
            'flag': esflag
        },
        {
            'symbol': 'ee',
            'name': 'Estonia',
            'flag': eeflag
        },
        {
            'symbol': 'dk',
            'name': 'Denmark',
            'flag': dkflag
        },
        {
            'symbol': 'de',
            'name': 'Germany',
            'flag': deflag
        },
        {
            'symbol': 'cz',
            'name': 'Czechia',
            'flag': czflag
        },
        {
            'symbol': 'co',
            'name': 'Colombia',
            'flag': coflag
        },
        {
            'symbol': 'cl',
            'name': 'Chile',
            'flag': clflag
        },
        {
            'symbol': 'ch',
            'name': 'Switzerland',
            'flag': chflag
        },
        {
            'symbol': 'ca',
            'name': 'Canada',
            'flag': caflag
        },
        {
            'symbol': 'br',
            'name': 'Brazil',
            'flag': brflag
        },
        {
            'symbol': 'be',
            'name': 'Belgium',
            'flag': beflag
        },
        {
            'symbol': 'au',
            'name': 'Australia',
            'flag': auflag
        },
        {
            'symbol': 'at',
            'name': 'Austria',
            'flag': atflag
        },
        {
            'symbol': 'is',
            'name': 'Iceland',
            'flag': isflag
        },
        {
            'symbol': 'ie',
            'name': 'Ireland',
            'flag': ieflag
        },
        {
            'symbol': 'ar',
            'name': 'Argentina',
            'flag': arflag
        },
        {
            'symbol': 'sa',
            'name': 'Saudi Arabia',
            'flag': saflag
        },
        {
            'symbol': 'eg',
            'name': 'Egypt',
            'flag': egflag
        },
        {
            'symbol': 'ae',
            'name': 'United Arab Emirates',
            'flag': aeflag
        },
        {
            'symbol': 'in',
            'name': 'India',
            'flag': inflag
        },
        {
            'symbol': 'uy',
            'name': 'Uruguay',
            'flag': uyflag
        },
        {
            'symbol': 'sv',
            'name': 'El Salvador',
            'flag': svflag
        },
        {
            'symbol': 'py',
            'name': 'Paraguay',
            'flag': pyflag
        },
        {
            'symbol': 'pa',
            'name': 'Panama',
            'flag': paflag
        },
        {
            'symbol': 'ni',
            'name': 'Nicaragua',
            'flag': niflag
        },
        {
            'symbol': 'hn',
            'name': 'Honduras',
            'flag': hnflag
        },
        {
            'symbol': 'gt',
            'name': 'Guatemala',
            'flag': gtflag
        },
        {
            'symbol': 'ec',
            'name': 'Ecuador',
            'flag': ecflag
        },
        {
            'symbol': 'do',
            'name': 'Dominican Republic',
            'flag': doflag
        },
        {
            'symbol': 'cr',
            'name': 'Costa Rica',
            'flag': crflag
        },
        {
            'symbol': 'bo',
            'name': 'Bolivia',
            'flag': boflag
        },
        {
            'symbol': 'il',
            'name': 'Israel',
            'flag': ilflag
        },
        {
            'symbol': 'hu',
            'name': 'Hungary',
            'flag': huflag
        },
        {
            'symbol': 'zw',
            'name': 'Zimbabwe',
            'flag': zwflag
        },
        {
            'symbol': 'za',
            'name': 'South Africa',
            'flag': zaflag
        },
        {
            'symbol': 'ug',
            'name': 'Uganda',
            'flag': ugflag
        },
        {
            'symbol': 'ua',
            'name': 'Ukraine',
            'flag': uaflag
        },
        {
            'symbol': 'tz',
            'name': 'Tanzania',
            'flag': tzflag
        },
        {
            'symbol': 'tr',
            'name': 'Turkey',
            'flag': trflag
        },
        {
            'symbol': 'se',
            'name': 'Sweden',
            'flag': seflag
        },
        {
            'symbol': 'ru',
            'name': 'Russia',
            'flag': ruflag
        },
        {
            'symbol': 'rs',
            'name': 'Serbia',
            'flag': rsflag
        },
        {
            'symbol': 'ro',
            'name': 'Romania',
            'flag': roflag
        },
        {
            'symbol': 'pt',
            'name': 'Portugal',
            'flag': ptflag
        },
        {
            'symbol': 'pl',
            'name': 'Poland',
            'flag': plflag
        },
        {
            'symbol': 'pe',
            'name': 'Peru',
            'flag': peflag
        },
        {
            'symbol': 'nz',
            'name': 'New Zealand',
            'flag': nzflag
        },
        {
            'symbol': 'no',
            'name': 'Norway',
            'flag': noflag
        },
        {
            'symbol': 'nl',
            'name': 'Netherlands',
            'flag': nlflag
        },
        {
            'symbol': 'ng',
            'name': 'Nigeria',
            'flag': ngflag
        },
        {
            'symbol': 'mx',
            'name': 'Mexico',
            'flag': mxflag
        },
        {
            'symbol': 'lu',
            'name': 'Luxembourg',
            'flag': luflag
        },
        {
            'symbol': 'kr',
            'name': 'South Korea',
            'flag': krflag
        },
        {
            'symbol': 'ke',
            'name': 'Kenya',
            'flag': keflag
        }
    ];
    const toggleOpened = () => {
        setIsOpened(isOpened ? false : true);
    }
    const selectCountry = (country) => {
        setSelectedCountry(country);
        setIsOpened(false);
        changeCountry(country.symbol);
    }
    return (
        <div className='country-select'>
            <div className='country-select-button'>
                <div className='country-info'>
                    <div className='country-flag'>
                        <img src={selectedCountry.flag} alt="flag" />
                    </div>
                    <div className='country-name'>{selectedCountry.name}</div>
                </div>
                <div className={`country-select-arrow ${isOpened ? 'rotate' : ''}`} onClick={toggleOpened}>
                    {theme === 'light-theme' ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="22" height="22" rx="6" fill="#EAECF2"/>
                        <path d="M8.20215 10L11.2021 13L14.2021 10" stroke="#121316" strokeLinecap="round"/>
                    </svg> : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="22" height="22" rx="6" fill="#121316"/>
                        <path d="M8.20215 10L11.2021 13L14.2021 10" stroke="#8391A1" strokeLinecap="round"/>
                    </svg>}
                </div>
            </div>
            {isOpened && <div className='country-select-button-overlap' />}
            {isOpened && <div className='country-select-list'>
                {countries.map(country => (
                    <div className='country-row' key={country.name} onClick={() => selectCountry(country)}>
                        <div className='country-info' style={{ marginLeft: '0' }}>
                            <div className='country-flag'>
                                <img src={country.flag} alt="flag" />
                            </div>
                            <div className='country-name'>{country.name}</div>
                        </div>
                        {selectedCountry.name === country.name && <div className='select-badge'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0ZM5.25257 7.18371L3.91971 5.85C3.87193 5.80222 3.81521 5.76431 3.75278 5.73845C3.69034 5.71259 3.62343 5.69929 3.55586 5.69929C3.48828 5.69929 3.42137 5.71259 3.35894 5.73845C3.29651 5.76431 3.23978 5.80222 3.192 5.85C3.0955 5.9465 3.04129 6.07738 3.04129 6.21386C3.04129 6.35033 3.0955 6.48121 3.192 6.57771L4.88914 8.27486C4.93679 8.32288 4.99347 8.36099 5.05592 8.387C5.11837 8.41302 5.18535 8.42641 5.253 8.42641C5.32065 8.42641 5.38763 8.41302 5.45008 8.387C5.51253 8.36099 5.56921 8.32288 5.61686 8.27486L9.13114 4.75971C9.17956 4.71213 9.21808 4.65543 9.24448 4.59288C9.27088 4.53034 9.28463 4.46318 9.28495 4.3953C9.28527 4.32741 9.27214 4.26013 9.24632 4.19734C9.22051 4.13455 9.18252 4.0775 9.13454 4.02946C9.08656 3.98143 9.02955 3.94337 8.96679 3.91748C8.90404 3.89159 8.83677 3.87839 8.76888 3.87862C8.701 3.87886 8.63383 3.89253 8.57125 3.91886C8.50867 3.94518 8.45193 3.98364 8.40429 4.032L5.25257 7.18371Z" fill="#6C5CE7"/>
                            </svg>
                        </div> }
                    </div>
                ))}
            </div>}
        </div>
    )
}
