import React from 'react'
import '../styles/Message.css'

export default function Message({type}) {    
    return (
        <div className={`message ${type}`}>
            <div className='message-container'>
                <div className='message-info'>
                    <div className='message-title'>Message Title</div>
                    <div className='message-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                {type === 'error' && <div className='message-action'>
                    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_181_47468)">
                            <rect y="0.5" width="34" height="34" rx="17" fill="#F46E6E"/>
                            <path d="M23 12L11 24M23 24L11 12" stroke="#F5F6FA" strokeWidth="1.5" strokeLinecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_181_47468">
                            <rect y="0.5" width="34" height="34" rx="17" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>}
                {type === 'success' && <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_181_47463)">
                        <rect y="0.5" width="34" height="34" rx="17" fill="#0AC956"/>
                        <path d="M11.5051 15.3789L16.9168 21.2707" stroke="#F5F6FA" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M24.0001 13L17.0626 21.136" stroke="#F5F6FA" strokeWidth="1.5" strokeLinecap="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_181_47463">
                        <rect y="0.5" width="34" height="34" rx="17" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>}
                {type === 'info' && <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_180_47435)">
                        <path d="M17 0.5C26.3888 0.5 34 8.11116 34 17.5C34 26.8888 26.3888 34.5 17 34.5C7.61116 34.5 0 26.8888 0 17.5C0 8.11116 7.61116 0.5 17 0.5ZM17 23.1667C16.4784 23.1667 16.0556 23.5895 16.0556 24.1111C16.0556 24.6327 16.4784 25.0556 17 25.0556C17.5216 25.0556 17.9444 24.6327 17.9444 24.1111C17.9444 23.5895 17.5216 23.1667 17 23.1667ZM17 9.94444C16.4784 9.94444 16.0556 10.3673 16.0556 10.8889V20.3333C16.0556 20.8549 16.4784 21.2778 17 21.2778C17.5216 21.2778 17.9444 20.8549 17.9444 20.3333V10.8889C17.9444 10.3673 17.5216 9.94444 17 9.94444Z" fill="#6C5CE7"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_180_47435">
                        <rect width="34" height="34" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                    </defs>
                </svg>}
            </div>
        </div>
    )
}
