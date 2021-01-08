<template>

   <div>
        <div id="wrapper">
            <header class="l-header js-header b-fonts__medium">
                <div class="p-header l-wide-container">
                    <div class="p-header__left js-logo">
                        <div class="p-header__left__inner">
                            <a class="js-target--pointer__stateChange" href="/">
                                <div class="js-target__inner--pointer__stateChange js-target__parent--spring">
                                    <!-- <svg version="1.1" id="logo" class="p-header__logo js-logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60 23.3" style="enable-background:new 0 0 60 23.3;" xml:space="preserve">

                                        <g>
                                            <g>
                                                <path class="js-st-logo st-logo" d="M9.9,10.1C9.7,9.6,9.7,9.6,9,9.6l-3.4,0c-0.6,0-0.7,0.1-0.9,0.6l-0.9,2.6c-0.3,1-0.5,1.7-0.5,1.9	C3.4,14.9,3.5,15,4,15l0.8,0.1c0.2,0.1,0.2,0.5,0,0.6c-0.6,0-1.3,0-2.4-0.1c-0.8,0-1.6,0-2.2,0.1c-0.1-0.1-0.2-0.5,0-0.6L0.8,15	c0.6,0,1.1-0.3,1.4-1.1c0.4-1.1,1.1-2.6,2-5.2l2.4-6.2C6.9,1.7,7.1,1.2,7,0.9C7.6,0.7,8,0.3,8.2,0c0.1,0,0.3,0,0.3,0.2	c0.3,1,0.7,2.1,1,3.1l3.2,9.3c0.7,2,1,2.3,2,2.5l0.6,0.1c0.2,0.1,0.1,0.5,0,0.6c-0.9,0-1.8-0.1-2.8-0.1c-1.1,0-2,0-2.7,0.1	c-0.2-0.1-0.2-0.5,0-0.6l0.7-0.1c0.5,0,0.8-0.2,0.8-0.4c0-0.3-0.1-0.7-0.3-1.2L9.9,10.1z M5.4,8.2C5.2,8.7,5.3,8.8,5.9,8.8h2.8	c0.7,0,0.7-0.1,0.5-0.7L8,4.3C7.8,3.7,7.6,3.1,7.5,2.8h0C7.4,2.9,7.1,3.5,6.9,4.2L5.4,8.2z"/>
                                                <path class="js-st-logo st-logo" d="M27.5,16c-1.9,0-3.2-0.6-3.6-0.9c-0.3-0.5-0.6-2.2-0.6-3.2c0.1-0.2,0.5-0.2,0.6-0.1c0.3,1.2,1.3,3.4,4,3.4	c1.9,0,2.9-1.3,2.9-2.7c0-1-0.2-2.1-1.9-3.2L26.6,8c-1.2-0.8-2.5-2.1-2.5-4c0-2.2,1.7-4,4.7-4c0.7,0,1.5,0.1,2.1,0.3	c0.3,0.1,0.6,0.1,0.8,0.1C32,1,32.2,2.3,32.2,3.3c-0.1,0.1-0.5,0.2-0.6,0.1c-0.3-1.1-0.9-2.6-3.1-2.6c-2.3,0-2.8,1.5-2.8,2.6	c0,1.3,1.1,2.3,2,2.8l1.8,1.2c1.5,0.9,2.9,2.2,2.9,4.4C32.4,14.3,30.5,16,27.5,16z"/>
                                                <path class="js-st-logo st-logo" d="M48.7,9.5c0.5,1.1,1,2.1,1.6,3.2h0c0.6-1.1,1.2-2.3,1.8-3.5l2.2-4.4c1-2.1,1.7-3.4,1.8-4.4	c0.8,0.1,1.3,0.1,1.7,0.1c0.6,0,1.3,0,2.1-0.1c0.1,0.1,0.1,0.5,0,0.6l-0.5,0c-1.5,0.1-1.6,0.6-1.6,2.2c0,2.4,0.1,6.7,0.3,10.1	c0.1,1.2,0,1.8,1.1,1.9l0.7,0.1c0.1,0.1,0.1,0.5,0,0.6c-0.9,0-1.9-0.1-2.7-0.1c-0.8,0-1.8,0-2.8,0.1c-0.2-0.1-0.2-0.4,0-0.6L55,15	c1.1-0.1,1.1-0.5,1.1-2L56,3.4h0c-0.2,0.3-1,2.1-1.5,3l-2.1,4c-1,2-2.1,4.2-2.5,5.3c0,0.1-0.1,0.1-0.2,0.1c0,0-0.2,0-0.2-0.1	c-0.4-1.2-1.5-3.5-2-4.6l-2.1-4.5c-0.5-1.1-1-2.3-1.5-3.3h0c-0.1,1.4-0.2,2.8-0.2,4.1c-0.1,1.4-0.2,3.5-0.2,5.4	c0,1.7,0.1,2.1,1,2.2l0.9,0.1c0.2,0.1,0.1,0.5,0,0.6c-0.8,0-1.7-0.1-2.6-0.1c-0.7,0-1.6,0-2.4,0.1c-0.1-0.1-0.2-0.5,0-0.6l0.5-0.1	c1-0.1,1.3-0.3,1.4-1.9c0.1-1.5,0.3-2.8,0.4-5.1c0.1-1.9,0.2-3.9,0.3-5.2c0-1.5-0.1-1.8-1.5-2l-0.4,0c-0.1-0.1-0.1-0.5,0.1-0.6	c0.7,0,1.2,0.1,1.8,0.1c0.5,0,1.2,0,1.9-0.1c-0.1,0.9,0.5,2.3,1.2,3.8L48.7,9.5z"/>
                                            </g>
                                            <g>
                                                <path class="js-st-logo st-logo" d="M0.9,22.3c0.1,0,0.1-0.1,0.1-0.1l0-0.2c0-0.2,0-0.4-0.3-0.4c-0.1,0-0.3,0.1-0.3,0.2c0,0.1,0,0.1,0,0.1	C0.2,22,0.1,22,0.1,22C0,22,0,22,0,22c0-0.2,0.5-0.5,0.8-0.5c0.3,0,0.5,0.2,0.4,0.5l0,0.7c0,0.2,0,0.4,0.2,0.4c0,0,0.1,0,0.1,0	c0,0,0,0,0.1,0c0,0,0,0,0,0.1c0,0-0.2,0.2-0.4,0.2c-0.1,0-0.2,0-0.3-0.1c0,0,0-0.1-0.1-0.1c0,0-0.1,0-0.2,0.1	c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1C0.1,23.1,0,23,0,22.8c0-0.2,0.1-0.3,0.4-0.4L0.9,22.3z M0.6,23.1	c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.1-0.1,0.1-0.2l0-0.3c0,0,0-0.1,0-0.1c0,0-0.1,0-0.2,0c-0.3,0.1-0.4,0.2-0.4,0.3	C0.3,22.9,0.4,23.1,0.6,23.1z"/>
                                                <path class="js-st-logo st-logo" d="M2.9,22c0-0.2,0-0.2-0.1-0.3l0,0c0,0,0-0.1,0-0.1c0.1,0,0.3-0.1,0.4-0.2c0,0,0,0,0,0v0.2c0,0,0,0,0,0	c0.2-0.1,0.3-0.3,0.5-0.3c0.1,0,0.2,0.1,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.1	c-0.1,0-0.1,0-0.2,0.1c0,0.1-0.1,0.2-0.1,0.3v0.6c0,0.3,0,0.4,0.2,0.4l0.2,0c0,0,0,0.1,0,0.1c-0.2,0-0.3,0-0.5,0	c-0.2,0-0.3,0-0.4,0c0,0,0-0.1,0-0.1l0.1,0c0.2,0,0.2-0.1,0.2-0.4V22z"/>
                                                <path class="js-st-logo st-logo" d="M6.3,21.5c0,0,0.1,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.2c0,0,0,0-0.1,0c-0.1-0.1-0.3-0.2-0.4-0.2	c-0.3,0-0.6,0.2-0.6,0.7c0,0.3,0.2,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.3c0,0,0.1,0,0.1,0.1c-0.1,0.3-0.5,0.4-0.7,0.4	c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.1-0.2-0.4-0.2-0.6c0-0.5,0.3-1,1-1C6,21.4,6.2,21.5,6.3,21.5z"/>
                                                <path class="js-st-logo st-logo" d="M7.7,20.8c0-0.3,0-0.3-0.1-0.4l0,0c0,0,0-0.1,0-0.1c0.1,0,0.3-0.1,0.5-0.2c0,0,0,0,0,0c0,0.1,0,0.3,0,0.5v0.9	c0,0,0,0.1,0,0.1c0.2-0.1,0.4-0.2,0.6-0.2c0.4,0,0.6,0.3,0.6,0.6v0.7c0,0.3,0,0.4,0.2,0.4l0.1,0c0,0,0,0.1,0,0.1	c-0.2,0-0.3,0-0.4,0c-0.2,0-0.3,0-0.4,0c0,0,0-0.1,0-0.1l0.1,0c0.2,0,0.2-0.1,0.2-0.4v-0.6c0-0.3-0.1-0.5-0.4-0.5	c-0.1,0-0.3,0.1-0.3,0.1C8,21.8,8,21.8,8,22v0.7c0,0.3,0,0.4,0.2,0.4l0.1,0c0,0,0,0.1,0,0.1c-0.1,0-0.3,0-0.4,0	c-0.2,0-0.3,0-0.4,0c0,0,0-0.1,0-0.1l0.1,0c0.2,0,0.2-0.1,0.2-0.4V20.8z"/>
                                                <path class="js-st-logo st-logo" d="M10.8,22c0-0.2,0-0.2-0.1-0.3l0,0c0,0,0-0.1,0-0.1c0.1,0,0.3-0.1,0.4-0.2c0,0,0,0,0,0c0,0.2,0,0.4,0,0.5v0.8	c0,0.3,0,0.4,0.2,0.4l0.1,0c0,0,0,0.1,0,0.1c-0.1,0-0.3,0-0.4,0c-0.2,0-0.3,0-0.4,0c0,0,0-0.1,0-0.1l0.1,0c0.2,0,0.2-0.1,0.2-0.4	V22z M11.2,20.7c0,0.2-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2C11.1,20.5,11.2,20.6,11.2,20.7z"/>
                                                <path class="js-st-logo st-logo" d="M13.1,21.7c-0.1,0-0.1,0-0.1,0.1v0.8c0,0.2,0,0.5,0.3,0.5c0,0,0.1,0,0.1,0c0,0,0.1-0.1,0.1-0.1	c0,0,0.1,0,0,0.1c-0.1,0.1-0.2,0.2-0.5,0.2c-0.4,0-0.4-0.2-0.4-0.5v-1c0-0.1,0-0.1-0.1-0.1h-0.1c0,0,0-0.1,0-0.1	c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.1-0.2,0.2-0.3c0,0,0.1,0,0.1,0v0.2c0,0.1,0,0.1,0.1,0.1h0.5c0.1,0,0,0.2,0,0.2H13.1z"/>
                                                <path class="js-st-logo st-logo" d="M15.1,22.1c-0.1,0-0.1,0-0.1,0.1c0,0.4,0.3,0.8,0.7,0.8c0.1,0,0.3,0,0.4-0.2c0,0,0.1,0,0.1,0.1	c-0.1,0.3-0.5,0.4-0.7,0.4c-0.3,0-0.5-0.1-0.6-0.3c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.5,0.3-1,0.9-1c0.4,0,0.6,0.3,0.6,0.5	c0,0.1,0,0.1,0,0.1c0,0-0.1,0-0.3,0H15.1z M15.4,22c0.3,0,0.4,0,0.4,0c0,0,0,0,0-0.1c0-0.1-0.1-0.3-0.3-0.3	c-0.3,0-0.5,0.2-0.5,0.4c0,0,0,0,0,0H15.4z"/>
                                                <path class="js-st-logo st-logo" d="M18.7,21.5c0,0,0.1,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.2c0,0,0,0-0.1,0c-0.1-0.1-0.3-0.2-0.4-0.2	c-0.3,0-0.6,0.2-0.6,0.7c0,0.3,0.2,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.3c0,0,0.1,0,0.1,0.1c-0.1,0.3-0.5,0.4-0.7,0.4	c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.1-0.2-0.4-0.2-0.6c0-0.5,0.3-1,1-1C18.4,21.4,18.6,21.5,18.7,21.5z"/>
                                                <path class="js-st-logo st-logo" d="M20.5,21.7c-0.1,0-0.1,0-0.1,0.1v0.8c0,0.2,0,0.5,0.3,0.5c0,0,0.1,0,0.1,0c0,0,0.1-0.1,0.1-0.1	c0,0,0.1,0,0,0.1c-0.1,0.1-0.2,0.2-0.5,0.2c-0.4,0-0.4-0.2-0.4-0.5v-1c0-0.1,0-0.1-0.1-0.1h-0.1c0,0,0-0.1,0-0.1	c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.1-0.2,0.2-0.3c0,0,0.1,0,0.1,0v0.2c0,0.1,0,0.1,0.1,0.1h0.5c0.1,0,0,0.2,0,0.2H20.5z"/>
                                                <path class="js-st-logo st-logo" d="M23,21.5c0,0.1,0.1,0.2,0.1,0.3c0,0-0.1,0-0.1,0c-0.1-0.2-0.2-0.3-0.4-0.3c-0.2,0-0.3,0.1-0.3,0.3	c0,0.2,0.2,0.3,0.3,0.4c0.2,0.1,0.4,0.3,0.4,0.6c0,0.3-0.3,0.5-0.6,0.5c-0.2,0-0.4,0-0.5-0.1c0-0.1-0.1-0.3-0.1-0.4	c0,0,0.1,0,0.1,0c0.1,0.2,0.2,0.4,0.5,0.4c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.2-0.3-0.3-0.4c-0.2-0.1-0.4-0.3-0.4-0.5	c0-0.3,0.3-0.5,0.6-0.5C22.8,21.4,23,21.5,23,21.5z"/>
                                                <path class="js-st-logo st-logo" d="M27.1,22.3c0.1,0,0.1-0.1,0.1-0.1l0-0.2c0-0.2,0-0.4-0.3-0.4c-0.1,0-0.3,0.1-0.3,0.2c0,0.1,0,0.1,0,0.1	C26.5,22,26.3,22,26.3,22c0,0-0.1,0-0.1-0.1c0-0.2,0.5-0.5,0.8-0.5c0.3,0,0.5,0.2,0.4,0.5l0,0.7c0,0.2,0,0.4,0.2,0.4	c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0.1c0,0-0.2,0.2-0.4,0.2c-0.1,0-0.2,0-0.3-0.1c0,0,0-0.1-0.1-0.1c0,0-0.1,0-0.2,0.1	c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.2,0.1-0.3,0.4-0.4L27.1,22.3z M26.8,23.1	c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.1-0.1,0.1-0.2l0-0.3c0,0,0-0.1,0-0.1c0,0-0.1,0-0.2,0c-0.3,0.1-0.4,0.2-0.4,0.3	C26.5,22.9,26.6,23.1,26.8,23.1z"/>
                                                <path class="js-st-logo st-logo" d="M29.1,22c0-0.2,0-0.2-0.1-0.3l0,0c0,0,0-0.1,0-0.1c0.1,0,0.3-0.1,0.4-0.2c0,0,0,0,0,0c0,0.1,0,0.2,0,0.2	c0,0,0,0,0,0c0.2-0.1,0.4-0.2,0.6-0.2c0.4,0,0.5,0.2,0.5,0.5v0.7c0,0.3,0,0.4,0.2,0.4l0.1,0c0,0,0,0.1,0,0.1c-0.1,0-0.3,0-0.4,0	c-0.2,0-0.3,0-0.4,0c0,0,0-0.1,0-0.1l0.1,0c0.2,0,0.2-0.1,0.2-0.4v-0.6c0-0.2-0.1-0.4-0.4-0.4c-0.2,0-0.3,0.1-0.4,0.2	c-0.1,0.1-0.1,0.1-0.1,0.3v0.7c0,0.3,0,0.3,0.2,0.4l0.1,0c0,0,0,0.1,0,0.1c-0.1,0-0.2,0-0.4,0c-0.2,0-0.3,0-0.4,0c0,0,0-0.1,0-0.1	l0.1,0c0.2,0,0.2-0.1,0.2-0.4V22z"/>
                                                <path class="js-st-logo st-logo" d="M33.6,22.6c0,0.3,0,0.5,0.1,0.5c0,0,0.1,0,0.2,0c0,0,0,0.1,0,0.1c-0.2,0-0.4,0.1-0.6,0.1c0,0,0,0,0,0v-0.1	c0-0.1,0-0.1,0-0.1h0c-0.2,0.1-0.3,0.2-0.5,0.2c-0.5,0-0.8-0.4-0.8-0.8c0-0.6,0.5-1,1-1c0.1,0,0.2,0,0.3,0c0,0,0,0,0-0.1v-0.7	c0-0.3,0-0.3-0.1-0.4l0,0c0,0,0-0.1,0-0.1c0.1,0,0.3-0.1,0.5-0.2c0,0,0,0,0,0c0,0.1,0,0.3,0,0.5V22.6z M33.3,21.9	c0-0.1,0-0.1,0-0.2c-0.1-0.1-0.2-0.2-0.4-0.2c-0.4,0-0.6,0.3-0.6,0.7c0,0.4,0.2,0.8,0.6,0.8c0.1,0,0.3-0.1,0.3-0.1	c0,0,0-0.1,0-0.2V21.9z"/>
                                                <path class="js-st-logo st-logo" d="M37.8,22.3c0.1,0,0.1-0.1,0.1-0.1l0-0.2c0-0.2,0-0.4-0.3-0.4c-0.1,0-0.3,0.1-0.3,0.2c0,0.1,0,0.1,0,0.1	C37.2,22,37.1,22,37,22c0,0-0.1,0-0.1-0.1c0-0.2,0.5-0.5,0.8-0.5c0.3,0,0.5,0.2,0.4,0.5l0,0.7c0,0.2,0,0.4,0.2,0.4	c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0.1c0,0-0.2,0.2-0.4,0.2c-0.1,0-0.2,0-0.3-0.1c0,0,0-0.1-0.1-0.1c0,0-0.1,0-0.2,0.1	c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.2,0.1-0.3,0.4-0.4L37.8,22.3z M37.5,23.1	c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.1-0.1,0.1-0.2l0-0.3c0,0,0-0.1,0-0.1c0,0-0.1,0-0.2,0c-0.3,0.1-0.4,0.2-0.4,0.3	C37.3,22.9,37.3,23.1,37.5,23.1z"/>
                                                <path class="js-st-logo st-logo" d="M40.6,21.5c0,0.1,0.1,0.2,0.1,0.3c0,0-0.1,0-0.1,0c-0.1-0.2-0.2-0.3-0.4-0.3c-0.2,0-0.3,0.1-0.3,0.3	c0,0.2,0.2,0.3,0.3,0.4c0.2,0.1,0.4,0.3,0.4,0.6c0,0.3-0.3,0.5-0.6,0.5c-0.2,0-0.4,0-0.5-0.1c0-0.1-0.1-0.3-0.1-0.4	c0,0,0.1,0,0.1,0c0.1,0.2,0.2,0.4,0.5,0.4c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.2-0.3-0.3-0.4c-0.2-0.1-0.4-0.3-0.4-0.5	c0-0.3,0.3-0.5,0.6-0.5C40.4,21.4,40.5,21.5,40.6,21.5z"/>
                                                <path class="js-st-logo st-logo" d="M42.8,21.5c0,0.1,0.1,0.2,0.1,0.3c0,0-0.1,0-0.1,0c-0.1-0.2-0.2-0.3-0.4-0.3c-0.2,0-0.3,0.1-0.3,0.3	c0,0.2,0.2,0.3,0.3,0.4c0.2,0.1,0.4,0.3,0.4,0.6c0,0.3-0.3,0.5-0.6,0.5c-0.2,0-0.4,0-0.5-0.1c0-0.1-0.1-0.3-0.1-0.4	c0,0,0.1,0,0.1,0c0.1,0.2,0.2,0.4,0.5,0.4c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.2-0.3-0.3-0.4c-0.2-0.1-0.4-0.3-0.4-0.5	c0-0.3,0.3-0.5,0.6-0.5C42.6,21.4,42.8,21.5,42.8,21.5z"/>
                                                <path class="js-st-logo st-logo" d="M45.8,22.3c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.3-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9	C45.4,21.4,45.8,21.8,45.8,22.3z M44.9,21.6c-0.3,0-0.5,0.3-0.5,0.7c0,0.4,0.2,0.8,0.6,0.8c0.4,0,0.5-0.4,0.5-0.7	C45.5,22,45.3,21.6,44.9,21.6z"/>
                                                <path class="js-st-logo st-logo" d="M48.4,21.5c0,0,0.1,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.2c0,0,0,0-0.1,0c-0.1-0.1-0.3-0.2-0.4-0.2	c-0.3,0-0.6,0.2-0.6,0.7c0,0.3,0.2,0.7,0.7,0.7c0.2,0,0.4-0.1,0.5-0.3c0,0,0.1,0,0.1,0.1c-0.1,0.3-0.5,0.4-0.7,0.4	c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.1-0.2-0.4-0.2-0.6c0-0.5,0.3-1,1-1C48.1,21.4,48.3,21.5,48.4,21.5z"/>
                                                <path class="js-st-logo st-logo" d="M49.8,22c0-0.2,0-0.2-0.1-0.3l0,0c0,0,0-0.1,0-0.1c0.1,0,0.3-0.1,0.4-0.2c0,0,0,0,0,0c0,0.2,0,0.4,0,0.5v0.8	c0,0.3,0,0.4,0.2,0.4l0.1,0c0,0,0,0.1,0,0.1c-0.1,0-0.3,0-0.4,0c-0.2,0-0.3,0-0.4,0c0,0,0-0.1,0-0.1l0.1,0c0.2,0,0.2-0.1,0.2-0.4	V22z M50.2,20.7c0,0.2-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2C50.1,20.5,50.2,20.6,50.2,20.7z"/>
                                                <path class="js-st-logo st-logo" d="M52.4,22.3c0.1,0,0.1-0.1,0.1-0.1l0-0.2c0-0.2,0-0.4-0.3-0.4c-0.1,0-0.3,0.1-0.3,0.2c0,0.1,0,0.1,0,0.1	C51.8,22,51.7,22,51.6,22c0,0-0.1,0-0.1-0.1c0-0.2,0.5-0.5,0.8-0.5c0.3,0,0.5,0.2,0.4,0.5l0,0.7c0,0.2,0,0.4,0.2,0.4	c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0.1c0,0-0.2,0.2-0.4,0.2c-0.1,0-0.2,0-0.3-0.1c0,0,0-0.1-0.1-0.1c0,0-0.1,0-0.2,0.1	c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.2,0.1-0.3,0.4-0.4L52.4,22.3z M52.1,23.1	c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.1-0.1,0.1-0.2l0-0.3c0,0,0-0.1,0-0.1c0,0-0.1,0-0.2,0c-0.3,0.1-0.4,0.2-0.4,0.3	C51.9,22.9,51.9,23.1,52.1,23.1z"/>
                                                <path class="js-st-logo st-logo" d="M54.8,21.7c-0.1,0-0.1,0-0.1,0.1v0.8c0,0.2,0,0.5,0.3,0.5c0,0,0.1,0,0.1,0c0,0,0.1-0.1,0.1-0.1	c0,0,0.1,0,0,0.1c-0.1,0.1-0.2,0.2-0.5,0.2c-0.4,0-0.4-0.2-0.4-0.5v-1c0-0.1,0-0.1-0.1-0.1h-0.1c0,0,0-0.1,0-0.1	c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.1-0.2,0.2-0.3c0,0,0.1,0,0.1,0v0.2c0,0.1,0,0.1,0.1,0.1h0.5c0.1,0,0,0.2,0,0.2H54.8z"/>
                                                <path class="js-st-logo st-logo" d="M56.7,22.1c-0.1,0-0.1,0-0.1,0.1c0,0.4,0.3,0.8,0.7,0.8c0.1,0,0.3,0,0.4-0.2c0,0,0.1,0,0.1,0.1	c-0.1,0.3-0.5,0.4-0.7,0.4c-0.3,0-0.5-0.1-0.6-0.3c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.5,0.3-1,0.9-1c0.4,0,0.6,0.3,0.6,0.5	c0,0.1,0,0.1,0,0.1c0,0-0.1,0-0.3,0H56.7z M57,22c0.3,0,0.4,0,0.4,0c0,0,0,0,0-0.1c0-0.1-0.1-0.3-0.3-0.3c-0.3,0-0.5,0.2-0.5,0.4	c0,0,0,0,0,0H57z"/>
                                                <path class="js-st-logo st-logo" d="M59.9,21.5c0,0.1,0.1,0.2,0.1,0.3c0,0-0.1,0-0.1,0c-0.1-0.2-0.2-0.3-0.4-0.3c-0.2,0-0.3,0.1-0.3,0.3	c0,0.2,0.2,0.3,0.3,0.4c0.2,0.1,0.4,0.3,0.4,0.6c0,0.3-0.3,0.5-0.6,0.5c-0.2,0-0.4,0-0.5-0.1c0-0.1-0.1-0.3-0.1-0.4	c0,0,0.1,0,0.1,0c0.1,0.2,0.2,0.4,0.5,0.4c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.2-0.3-0.3-0.4c-0.2-0.1-0.4-0.3-0.4-0.5	c0-0.3,0.3-0.5,0.6-0.5C59.7,21.4,59.9,21.5,59.9,21.5z"/>
                                            </g>
                                        </g>
                                    </svg> -->
                                </div>
                            </a>
                        </div>
                        <a @click="home()" href="/" class="p-header__close c-btn--close js-target__aboutClose js-target--pointer__stateChange js-hover" data-hover-in-time="1200" data-hover-out-time="100">
                            <div class="c-btn--close__layer front js-target__inner--pointer__stateChange js-target__parent--spring">
                                <div class="c-btn--close__bar">
                                    <div class="c-btn--close__bar__inner js-closeBar"></div>
                                </div>
                                <div class="c-btn--close__bar">
                                    <div class="c-btn--close__bar__inner js-closeBar"></div>
                                </div>
                            </div>
                            <div class="c-btn--close__layer back">
                                <div class="c-btn--close__bar">
                                    <div class="c-btn--close__bar__inner js-closeBar"></div>
                                </div>
                                <div class="c-btn--close__bar">
                                    <div class="c-btn--close__bar__inner js-closeBar"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="/" class="p-header__close--works-detail c-btn--close js-target__worksDetailClose js-target--pointer__stateChange js-hover" data-hover-in-time="1200" data-hover-out-time="100">
                        <div class="c-btn--close__layer front js-target__inner--pointer__stateChange js-target__parent--spring">
                            <div class="c-btn--close__bar">
                                <div class="c-btn--close__bar__inner js-closeBar"></div>
                            </div>
                            <div class="c-btn--close__bar">
                                <div class="c-btn--close__bar__inner js-closeBar"></div>
                            </div>
                        </div>
                        <div class="c-btn--close__layer back">
                            <div class="c-btn--close__bar">
                                <div class="c-btn--close__bar__inner js-closeBar"></div>
                            </div>
                            <div class="c-btn--close__bar">
                                <div class="c-btn--close__bar__inner js-closeBar"></div>
                            </div>
                        </div>
                    </a>
                    <nav class="js-nav">
                        <ul class="p-header__list">
                            <li class="p-header__list__item works pc">
                                <div class="p-header__list__item__inner--works">
                                    <div class="p-header__list__item--all">
                                        <a class="js-nav__link js-target--pointer__stateChange" href="/works/">
                                            <span class="js-target__inner--pointer__stateChange js-target__parent--spring">All</span>
                                        </a>
                                    </div>
                                    <div class="p-header__list__item--focus">
                                        <a @click="home()" class="js-nav__link js-target--pointer__stateChange" href="/">
                                            <span class="js-target__inner--pointer__stateChange js-target__parent--spring">Focus</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="p-header__list__item has-children">
                                <a @click="about()" class="js-nav__link js-target--pointer__stateChange about" href="/about">
                                    <span class="js-target__inner--pointer__stateChange js-target__parent--spring">About</span>
                                </a>
                                <div class="p-header__list__item__inner">
                                    <ul class="p-header__languageList">
                                        <li class="p-header__languageList__item">
                                            <a class="js-nav__link js-trigger--langChange js-target--pointer__stateChange" data-lang="en" href="#">
                                                <span class="js-target__inner--pointer__stateChange js-target__parent--spring">En</span>
                                            </a>
                                        </li>
                                        <li class="p-header__languageList__item">
                                            <a class="js-nav__link js-trigger--langChange js-target--pointer__stateChange" data-lang="zh-cmn-Hans" href="#">
                                                <span class="js-target__inner--pointer__stateChange js-target__parent--spring">Cn</span>
                                            </a>
                                        </li>
                                        <li class="p-header__languageList__item">
                                            <a class="js-nav__link js-trigger--langChange js-target--pointer__stateChange" data-lang="ja" href="#">
                                                <span class="js-target__inner--pointer__stateChange js-target__parent--spring">Jp</span>
                                            </a>
                                        </li>
                                        <li class="p-header__languageList__item line"></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="l-navSp b-fonts__medium js-nav">
                <div class="p-navSp">
                    <div class="p-header__list__item__inner--works">
                        <div class="p-header__list__item--all p-navSp__item">
                            <a class="js-nav__link js-target--pointer__stateChange" href="/works/">
                                <span class="js-target__inner--pointer__stateChange js-target__parent--spring">All</span>
                            </a>
                        </div>
                        <div class="p-header__list__item--focus p-navSp__item">
                            <a @click="ss()" class="js-nav__link js-target--pointer__stateChange" href="/">
                                <span class="js-target__inner--pointer__stateChange js-target__parent--spring">Focus</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <main id="page" class="js-smooth-scroll-wrapper">
                <div id="contents" class="js-smooth-scroll-content">
                    <div id="works" class="l-works page-content">
                        <nav class="p-works">
                            <div class="p-works__bg"></div>
                            <div class="l-middle-container">
                                <ul class="p-works__list p-list b-fonts__medium js-target--smooth">

                                    <li class="p-list__item p-works__list__item">
                                        <a @click="limooproject()" class="js-hover__works-list js-trigger--pageTransition js-target--pointer__stateChange js-hover" data-hover-in-time="450" data-hover-out-time="700" href="/limoo-project">
                                            <div>
                                                <div class="js-parent--parallax p-works__text">
                                                    <div class="js-target--parallax" data-parallax-move-range-y="230">
                                                        <div class="p-works__text__inner">
                                                            <div class="num">
                                                                <small>01</small>
                                                            </div>
                                                            <div class="p-works__title">
                                                                <h1>
                                                                  Limoo Teb Project
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-works__panel">
                                                    <div class="p-works__thumb">
                                                        <div class="p-works__thumb__maskCover"></div>
                                                        <div class="p-works__thumb__inner js-parent--parallax">
                                                            <div class="p-works__thumb__img js-target--parallax" style="background-image:url('images/7stones/limoo-teb/limoo-teb4.jpg'); background-size: cover;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="p-list__item p-works__list__item">
                                        <a @click="jabanproject()" href="jaban-project" class="js-hover__works-list js-trigger--pageTransition js-target--pointer__stateChange js-hover" data-hover-in-time="450" data-hover-out-time="700">
                                            <div>
                                                <div class="js-parent--parallax p-works__text">
                                                    <div class="js-target--parallax" data-parallax-move-range-y="230">
                                                        <div class="p-works__text__inner">
                                                            <div class="num">
                                                                <small>02</small>
                                                            </div>
                                                            <div class="p-works__title">
                                                                <h1>Jaban Project</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-works__panel">
                                                    <div class="p-works__thumb">
                                                        <div class="p-works__thumb__maskCover"></div>
                                                        <div class="p-works__thumb__inner js-parent--parallax">
                                                            <div class="p-works__thumb__img js-target--parallax" style="background-image:url('images/7stones/jaban-project-main.jpg'); background-size: cover;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="p-list__item p-works__list__item">
                                        <a @click="jabanproject()" href="jaban-project" class="js-hover__works-list js-trigger--pageTransition js-target--pointer__stateChange js-hover" data-hover-in-time="450" data-hover-out-time="700">
                                            <div>
                                                <div class="js-parent--parallax p-works__text">
                                                    <div class="js-target--parallax" data-parallax-move-range-y="230">
                                                        <div class="p-works__text__inner">
                                                            <div class="num">
                                                                <small>03</small>
                                                            </div>
                                                            <div class="p-works__title">
                                                                <h1>Jaban Project view 2</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-works__panel">
                                                    <div class="p-works__thumb">
                                                        <div class="p-works__thumb__maskCover"></div>
                                                        <div class="p-works__thumb__inner js-parent--parallax">
                                                            <div class="p-works__thumb__img js-target--parallax" style="background-image:url('images/7stones/jaban-project-main2.jpg'); background-size: cover;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                     <li class="p-list__item p-works__list__item">
                                        <a @click="jabanproject()" href="jaban-project" class="js-hover__works-list js-trigger--pageTransition js-target--pointer__stateChange js-hover" data-hover-in-time="450" data-hover-out-time="700">
                                            <div>
                                                <div class="js-parent--parallax p-works__text">
                                                    <div class="js-target--parallax" data-parallax-move-range-y="230">
                                                        <div class="p-works__text__inner">
                                                            <div class="num">
                                                                <small>04</small>
                                                            </div>
                                                            <div class="p-works__title">
                                                                <h1>Jaban Project view 3</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-works__panel">
                                                    <div class="p-works__thumb">
                                                        <div class="p-works__thumb__maskCover"></div>
                                                        <div class="p-works__thumb__inner js-parent--parallax">
                                                            <div class="p-works__thumb__img js-target--parallax" style="background-image:url('images/7stones/jaban-project-main3.jpg'); background-size: cover;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="p-list__item p-works__list__item">
                                        <a @click="yasproject()" class="js-hover__works-list js-trigger--pageTransition js-target--pointer__stateChange js-hover" data-hover-in-time="450" data-hover-out-time="700" href="/yas-project">
                                            <div>
                                                <div class="js-parent--parallax p-works__text">
                                                    <div class="js-target--parallax" data-parallax-move-range-y="230">
                                                        <div class="p-works__text__inner">
                                                            <div class="num">
                                                                <small>05</small>
                                                            </div>
                                                            <div class="p-works__title">
                                                                <h1>
                                                                  Yas Project
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-works__panel">
                                                    <div class="p-works__thumb">
                                                        <div class="p-works__thumb__maskCover"></div>
                                                        <div class="p-works__thumb__inner js-parent--parallax">
                                                            <div class="p-works__thumb__img js-target--parallax" style="background-image:url('images/7stones/yas-project-main.jpg'); background-size: cover;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </main>
            <aside id="side-contact" class="p-sideContact">
                <address class="l-wide-container">
                    <dl class="p-sideContact__inner js-target--sideFix">
                        <div class="p-sideContact__unit">
                            <dt class="b-fonts__medium">Hello.</dt>
                            <dd>
                                <a class="js-target--pointer__stateChange lang-fonts--en c-link--underline js-hover" data-hover-in-time="1010" data-hover-out-time="850" href="mailto: &#105;&#110;&#102;&#111;&#64;&#97;&#115;&#109;&#111;&#98;&#105;&#117;&#115;&#46;&#99;&#111;&#46;&#106;&#112;">
                                    <span class="js-target__inner--pointer__stateChange c-link--underline__inner">
                                        &#105;&#110;&#102;&#111;&#64;&#97;&#115;&#109;&#111;&#98;&#105;&#117;&#115;&#46;&#99;&#111;&#46;&#106;&#112;<span class="c-link--underline__line"></span>
                                    </span>
                                </a>
                            </dd>
                        </div>
                        <div class="p-sideContact__unit">
                            <dt class="b-fonts__medium">Work Together.</dt>
                            <dd>
                                <a class="js-target--pointer__stateChange lang-fonts--en c-link--underline js-hover" data-hover-in-time="1010" data-hover-out-time="850" href="mailto: &#106;&#111;&#98;&#115;&#64;&#97;&#115;&#109;&#111;&#98;&#105;&#117;&#115;&#46;&#99;&#111;&#46;&#106;&#112;">
                                    <span class="js-target__inner--pointer__stateChange c-link--underline__inner">
                                        &#106;&#111;&#98;&#115;&#64;&#97;&#115;&#109;&#111;&#98;&#105;&#117;&#115;&#46;&#99;&#111;&#46;&#106;&#112;<span class="c-link--underline__line"></span>
                                    </span>
                                </a>
                            </dd>
                        </div>
                    </dl>
                </address>
            </aside>
            <div id="stage" class="p-stage">
                <div id="app-canvas"></div>
                <ul class="p-stage__menu">
                    <li class="p-stage__menu__item js-canvas__target" data-canvas-thumb="" data-canvas-zoom="" data-canvas-url="">
                        PARK MANSION<br>Minami Azabu
                    </li>

                </ul>
            </div>
            <div id="indicator">
                <div id="app-indicator"></div>
            </div>
            <div id="pageCover" class="p-pageCover js-target--height__screenFix--mobile" data-fix-height-ratio="1.1">
                <div class="p-pageCover__inner js-target--height__screenFix--mobile" data-fix-height-ratio="1">
                    <p id="pageCoverText" class="p-pageCover__text b-fonts__medium">Next</p>
                </div>
            </div>
        </div>
        <div id="app-mousePointer"></div>
        <div id="wait-loader" class="l-wide-container p-waitLoader">
            <div class="p-waitLoader__inner">
                <div class="p-waitLoader__circle">
                    <div class="p-waitLoader__layer back"></div>
                    <div class="p-waitLoader__layer front"></div>
                </div>
            </div>
        </div>
         <div id="loading" class="p-loading">
        <div class="p-loading__outer">
            <div class="p-loading__bg"></div>
            <div class="p-loading__inner">
                <div>
                    <div class="p-loading__front">
                        <div class="p-loading__front__inner">
                            <svg class="p-loading__logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280.13 113.21" style="enable-background:new 0 0 280.13 113.21;" xml:space="preserve">
                                <g>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path class="st-logo-load"  d="M0,26.21,9.9.44h3.67L24.12,26.21H20.23l-3-7.81H6.45L3.62,26.21ZM7.44,15.63h8.73L13.48,8.49q-1.23-3.25-1.83-5.34a32.85,32.85,0,0,1-1.38,4.92Z"/>
                                            <path class="st-logo-load"  d="M26.89,26.21V.44H38.32a15.31,15.31,0,0,1,5.24.69,5.73,5.73,0,0,1,2.86,2.46A7.25,7.25,0,0,1,47.5,7.47a6.48,6.48,0,0,1-1.78,4.62,8.94,8.94,0,0,1-5.48,2.39,9.14,9.14,0,0,1,2,1.29,17.2,17.2,0,0,1,2.83,3.43l4.49,7H45.32l-3.41-5.36q-1.5-2.33-2.46-3.55a8,8,0,0,0-1.74-1.73,5.28,5.28,0,0,0-1.55-.68,10.54,10.54,0,0,0-1.9-.12h-4V26.21Zm3.41-14.4h7.33a11.09,11.09,0,0,0,3.66-.48,3.84,3.84,0,0,0,2-1.55A4.17,4.17,0,0,0,44,7.47a3.84,3.84,0,0,0-1.33-3,6.22,6.22,0,0,0-4.19-1.17H30.3Z"/>
                                            <path class="st-logo-load"  d="M71.23,17.17l3.41.87a11.48,11.48,0,0,1-3.86,6.4A10.65,10.65,0,0,1,64,26.65,12.25,12.25,0,0,1,57.19,25a10.61,10.61,0,0,1-4-4.91,17.53,17.53,0,0,1-1.36-6.91,15.26,15.26,0,0,1,1.53-7,10.53,10.53,0,0,1,4.38-4.55A12.77,12.77,0,0,1,64,0a10.55,10.55,0,0,1,6.5,2A10.21,10.21,0,0,1,74.2,7.51l-3.36.79a8,8,0,0,0-2.6-4.1A7,7,0,0,0,64,2.92a8.34,8.34,0,0,0-5,1.42,7.54,7.54,0,0,0-2.8,3.83,15.27,15.27,0,0,0-.81,4.94,15.69,15.69,0,0,0,1,5.74,7.13,7.13,0,0,0,3,3.67,8.36,8.36,0,0,0,4.38,1.21,7.35,7.35,0,0,0,4.85-1.65A8.49,8.49,0,0,0,71.23,17.17Z"/>
                                            <path class="st-logo-load"  d="M78.94,26.21V.44h3.41V11h13.4V.44h3.41V26.21H95.75V14.06H82.35V26.21Z"/>
                                            <path class="st-logo-load" d="M105.42,26.21V.44h3.41V26.21Z"/>
                                            <path class="st-logo-load" d="M121.39,26.21V3.48H112.9v-3h20.43v3H124.8V26.21Z"/>
                                            <path class="st-logo-load" d="M136.9,26.21V.44h18.63v3H140.31v7.89h14.25v3H140.31v8.77h15.82v3Z"/>
                                            <path class="st-logo-load" d="M179.23,17.17l3.41.87a11.48,11.48,0,0,1-3.86,6.4A10.65,10.65,0,0,1,172,26.65a12.25,12.25,0,0,1-6.78-1.7,10.61,10.61,0,0,1-4-4.91,17.53,17.53,0,0,1-1.36-6.91,15.26,15.26,0,0,1,1.53-7,10.53,10.53,0,0,1,4.38-4.55A12.77,12.77,0,0,1,172,0a10.55,10.55,0,0,1,6.5,2,10.21,10.21,0,0,1,3.68,5.54l-3.36.79a8,8,0,0,0-2.6-4.1A7,7,0,0,0,172,2.92a8.34,8.34,0,0,0-5,1.42,7.54,7.54,0,0,0-2.8,3.83,15.27,15.27,0,0,0-.81,4.94,15.69,15.69,0,0,0,1,5.74,7.13,7.13,0,0,0,3,3.67,8.36,8.36,0,0,0,4.38,1.21,7.35,7.35,0,0,0,4.85-1.65A8.49,8.49,0,0,0,179.23,17.17Z"/>
                                            <path class="st-logo-load" d="M193.39,26.21V3.48H184.9v-3h20.43v3H196.8V26.21Z"/>
                                            <path class="st-logo-load" d="M225.74.44h3.41V15.33a17.55,17.55,0,0,1-.88,6.17,7.58,7.58,0,0,1-3.17,3.72,11.29,11.29,0,0,1-6,1.43,12.42,12.42,0,0,1-5.93-1.25,7.12,7.12,0,0,1-3.28-3.61,17.14,17.14,0,0,1-1-6.46V.44h3.41V15.31a14.37,14.37,0,0,0,.63,5,4.7,4.7,0,0,0,2.14,2.45,7.36,7.36,0,0,0,3.72.86c2.51,0,4.29-.57,5.36-1.7s1.6-3.33,1.6-6.56Z"/>
                                            <path class="st-logo-load" d="M234.88,26.21V.44H246.3a15.27,15.27,0,0,1,5.24.69,5.75,5.75,0,0,1,2.87,2.46,7.33,7.33,0,0,1,1.07,3.88,6.47,6.47,0,0,1-1.77,4.62,9,9,0,0,1-5.49,2.39,9.24,9.24,0,0,1,2.06,1.29,17.54,17.54,0,0,1,2.83,3.43l4.48,7H253.3l-3.41-5.36q-1.5-2.33-2.46-3.55a7.75,7.75,0,0,0-1.73-1.73,5.33,5.33,0,0,0-1.56-.68,10.46,10.46,0,0,0-1.9-.12h-4V26.21Zm3.41-14.4h7.33a11.09,11.09,0,0,0,3.66-.48,3.92,3.92,0,0,0,2-1.55A4.16,4.16,0,0,0,252,7.47a3.86,3.86,0,0,0-1.32-3,6.24,6.24,0,0,0-4.19-1.17h-8.16Z"/>
                                            <path class="st-logo-load" d="M260.89,26.21V.44h18.64v3H264.3v7.89h14.26v3H264.3v8.77h15.83v3Z"/>
                                            <path class="st-logo-load" d="M17.89,69.41V43.64H36.52v3H21.3v7.89H35.55v3H21.3v8.77H37.12v3Z"/>
                                            <path class="st-logo-load" d="M41.79,69.41V43.64h3.5L58.83,63.87V43.64h3.26V69.41H58.6L45.06,49.16V69.41Z"/>
                                            <path class="st-logo-load" d="M79.88,59.3v-3l10.92,0v9.56a19.31,19.31,0,0,1-5.19,3,15.45,15.45,0,0,1-5.48,1,14.58,14.58,0,0,1-6.9-1.63,10.68,10.68,0,0,1-4.68-4.7A14.73,14.73,0,0,1,67,56.65a15.91,15.91,0,0,1,1.58-7,10.46,10.46,0,0,1,4.52-4.85,14.26,14.26,0,0,1,6.81-1.58,13.36,13.36,0,0,1,5,.91,8.26,8.26,0,0,1,3.54,2.52,11,11,0,0,1,2,4.22l-3.07.84A9.68,9.68,0,0,0,85.9,48.6a6.05,6.05,0,0,0-2.47-1.81,9,9,0,0,0-3.55-.67,10.57,10.57,0,0,0-4,.71,7.52,7.52,0,0,0-2.75,1.87,9.13,9.13,0,0,0-1.63,2.55,13.59,13.59,0,0,0-1,5.19,12.57,12.57,0,0,0,1.19,5.76,7.58,7.58,0,0,0,3.45,3.45,10.7,10.7,0,0,0,4.82,1.12,11.43,11.43,0,0,0,4.32-.85,11.07,11.07,0,0,0,3.2-1.82V59.3Z"/>
                                            <path class="st-logo-load" d="M96.41,69.41V43.64h3.41V69.41Z"/>
                                            <path class="st-logo-load" d="M105.79,69.41V43.64h3.5l13.54,20.23V43.64h3.27V69.41h-3.5L109.06,49.16V69.41Z"/>
                                            <path class="st-logo-load" d="M131.9,69.41V43.64h18.63v3H135.31v7.89h14.25v3H135.31v8.77h15.82v3Z"/>
                                            <path class="st-logo-load" d="M155.91,69.41V43.64h18.63v3H159.32v7.89h14.26v3H159.32v8.77h15.82v3Z"/>
                                            <path class="st-logo-load" d="M179.9,69.41V43.64h11.43a15.31,15.31,0,0,1,5.24.69,5.73,5.73,0,0,1,2.86,2.46,7.24,7.24,0,0,1,1.07,3.88,6.47,6.47,0,0,1-1.77,4.62,8.94,8.94,0,0,1-5.48,2.39A9.14,9.14,0,0,1,195.3,59a17.2,17.2,0,0,1,2.83,3.43l4.48,7h-4.28l-3.41-5.36q-1.5-2.32-2.47-3.55a7.75,7.75,0,0,0-1.73-1.73,5.39,5.39,0,0,0-1.55-.68,10.54,10.54,0,0,0-1.9-.12h-4V69.41ZM183.31,55h7.33a11.09,11.09,0,0,0,3.66-.48,3.84,3.84,0,0,0,2-1.55,4.17,4.17,0,0,0,.69-2.31,3.8,3.8,0,0,0-1.33-3,6.17,6.17,0,0,0-4.19-1.18h-8.16Z"/>
                                            <path class="st-logo-load" d="M206.43,69.41V43.64h3.41V69.41Z"/>
                                            <path class="st-logo-load" d="M215.82,69.41V43.64h3.49l13.54,20.23V43.64h3.27V69.41h-3.5L219.08,49.16V69.41Z"/>
                                            <path class="st-logo-load" d="M253.91,59.3v-3l10.91,0v9.56a19.26,19.26,0,0,1-5.18,3,15.47,15.47,0,0,1-5.49,1,14.58,14.58,0,0,1-6.9-1.63,10.74,10.74,0,0,1-4.68-4.7A14.73,14.73,0,0,1,241,56.65a15.9,15.9,0,0,1,1.57-7,10.48,10.48,0,0,1,4.53-4.85,14.22,14.22,0,0,1,6.8-1.58,13.32,13.32,0,0,1,5.05.91,8.36,8.36,0,0,1,3.55,2.52,11.32,11.32,0,0,1,1.95,4.22l-3.08.84a9.68,9.68,0,0,0-1.44-3.09,6.08,6.08,0,0,0-2.46-1.81,9.06,9.06,0,0,0-3.55-.67,10.59,10.59,0,0,0-4,.71,7.6,7.6,0,0,0-2.75,1.87,9.1,9.1,0,0,0-1.62,2.55,13.4,13.4,0,0,0-1,5.19,12.57,12.57,0,0,0,1.19,5.76,7.58,7.58,0,0,0,3.45,3.45A10.73,10.73,0,0,0,254,66.77a11.35,11.35,0,0,0,4.32-.85,10.94,10.94,0,0,0,3.2-1.82V59.3Z"/>
                                            <path class="st-logo-load" d="M14.63,112.61l9.9-25.77H28.2l10.55,25.77H34.87l-3-7.81H21.08l-2.83,7.81ZM22.07,102h8.74l-2.69-7.14q-1.23-3.26-1.83-5.34a32.89,32.89,0,0,1-1.39,4.92Z"/>
                                            <path class="st-logo-load" d="M41.53,112.61V86.84H53a15.27,15.27,0,0,1,5.24.69A5.75,5.75,0,0,1,61.06,90a7.33,7.33,0,0,1,1.07,3.88,6.44,6.44,0,0,1-1.78,4.62,8.94,8.94,0,0,1-5.48,2.39,9.24,9.24,0,0,1,2.06,1.29,17.54,17.54,0,0,1,2.83,3.43l4.48,7H60l-3.41-5.36q-1.5-2.32-2.46-3.55A8,8,0,0,0,52.35,102a5.33,5.33,0,0,0-1.56-.68,10.46,10.46,0,0,0-1.9-.12h-4v11.44Zm3.41-14.4h7.33a11,11,0,0,0,3.65-.48,3.9,3.9,0,0,0,2-1.55,4.16,4.16,0,0,0,.68-2.31,3.83,3.83,0,0,0-1.32-3,6.22,6.22,0,0,0-4.2-1.18H44.94Z"/>
                                            <path class="st-logo-load" d="M73.38,112.61V89.88H64.89v-3H85.32v3H76.79v22.73Z"/>
                                            <path class="st-logo-load" d="M112.49,109.57a10.77,10.77,0,0,1-3.41,2.61,9.24,9.24,0,0,1-4,.87,7.86,7.86,0,0,1-6.27-2.67,7.27,7.27,0,0,1-1.89-4.87,6.78,6.78,0,0,1,1.54-4.32,12.88,12.88,0,0,1,4.6-3.38,15.73,15.73,0,0,1-2.32-3.25,5.7,5.7,0,0,1-.58-2.41,5.4,5.4,0,0,1,1.82-4,6.42,6.42,0,0,1,4.58-1.71A5.94,5.94,0,0,1,110.88,88a5.2,5.2,0,0,1,1.68,3.88q0,3.67-4.87,6.28l4.63,5.89a15.26,15.26,0,0,0,1.23-3.59l3.28.7a17.9,17.9,0,0,1-2.28,5.56,18.11,18.11,0,0,0,4,4l-2.12,2.52A18.52,18.52,0,0,1,112.49,109.57Zm-2-2.5-5.8-7.19a11.18,11.18,0,0,0-3.46,2.84,4.56,4.56,0,0,0-.9,2.59,5.55,5.55,0,0,0,1.25,3.26,4.14,4.14,0,0,0,3.54,1.68,5.81,5.81,0,0,0,2.94-.88A7.15,7.15,0,0,0,110.5,107.07Zm-4.44-10.93A8.37,8.37,0,0,0,108.72,94a3.53,3.53,0,0,0,.61-2,2.89,2.89,0,0,0-.84-2.15,2.8,2.8,0,0,0-2.08-.84,3,3,0,0,0-2.14.83,2.73,2.73,0,0,0-.85,2,2.92,2.92,0,0,0,.31,1.26,6.27,6.27,0,0,0,.92,1.39Z"/>
                                            <path class="st-logo-load" d="M132.18,112.61V86.84h8.88a21.18,21.18,0,0,1,4.58.37,8.7,8.7,0,0,1,3.78,1.84,10.46,10.46,0,0,1,3.05,4.41,17.15,17.15,0,0,1,1,6.12,18.28,18.28,0,0,1-.68,5.21,12.82,12.82,0,0,1-1.76,3.75,9.3,9.3,0,0,1-2.35,2.34,9.44,9.44,0,0,1-3.07,1.29,17.7,17.7,0,0,1-4.14.44Zm3.41-3h5.5a13.23,13.23,0,0,0,4-.48,5.63,5.63,0,0,0,2.31-1.33,8.14,8.14,0,0,0,1.89-3.26,16,16,0,0,0,.68-5,11.92,11.92,0,0,0-1.33-6.21,6.65,6.65,0,0,0-3.22-2.91,13.43,13.43,0,0,0-4.42-.53h-5.41Z"/>
                                            <path class="st-logo-load" d="M158.25,112.61V86.84h18.63v3H161.66v7.89h14.25v3H161.66v8.77h15.82v3Z"/>
                                            <path class="st-logo-load" d="M181,104.33l3.22-.28a7,7,0,0,0,1.06,3.17,5.81,5.81,0,0,0,2.59,2,9.81,9.81,0,0,0,4,.76,9.36,9.36,0,0,0,3.44-.58,4.85,4.85,0,0,0,2.23-1.59,3.72,3.72,0,0,0,.72-2.21,3.31,3.31,0,0,0-.7-2.11,5.16,5.16,0,0,0-2.32-1.53c-.69-.26-2.22-.68-4.59-1.25a23.85,23.85,0,0,1-5-1.61,7,7,0,0,1-2.75-2.4A5.83,5.83,0,0,1,182,93.5a6.57,6.57,0,0,1,1.11-3.65,6.91,6.91,0,0,1,3.23-2.57,12.23,12.23,0,0,1,4.73-.88,13.05,13.05,0,0,1,5.06.92A7.25,7.25,0,0,1,199.5,90a7.76,7.76,0,0,1,1.27,4.06l-3.27.25a5.31,5.31,0,0,0-1.79-3.7,7,7,0,0,0-4.49-1.24,7.2,7.2,0,0,0-4.51,1.13,3.41,3.41,0,0,0-1.41,2.73,2.93,2.93,0,0,0,1,2.29q1,.9,5.14,1.84A33.43,33.43,0,0,1,197.15,99a7.83,7.83,0,0,1,3.32,2.63,6.43,6.43,0,0,1,1.07,3.66,7,7,0,0,1-1.18,3.88A7.78,7.78,0,0,1,197,112a11.86,11.86,0,0,1-5,1,14.83,14.83,0,0,1-5.86-1,8.24,8.24,0,0,1-3.71-3.07A8.76,8.76,0,0,1,181,104.33Z"/>
                                            <path class="st-logo-load" d="M206.78,112.61V86.84h3.41v25.77Z"/>
                                            <path class="st-logo-load" d="M228.26,102.5v-3l10.92,0V109a19.46,19.46,0,0,1-5.19,3,15.45,15.45,0,0,1-5.48,1,14.58,14.58,0,0,1-6.9-1.63,10.76,10.76,0,0,1-4.69-4.7,14.85,14.85,0,0,1-1.58-6.87,16,16,0,0,1,1.57-7A10.48,10.48,0,0,1,221.44,88a14.25,14.25,0,0,1,6.8-1.58,13.37,13.37,0,0,1,5.06.91,8.39,8.39,0,0,1,3.54,2.52,11.32,11.32,0,0,1,1.95,4.22l-3.08.84a9.27,9.27,0,0,0-1.44-3.09,5.85,5.85,0,0,0-2.46-1.8,8.85,8.85,0,0,0-3.55-.68,10.5,10.5,0,0,0-4,.71,7.44,7.44,0,0,0-2.75,1.87,9.13,9.13,0,0,0-1.63,2.55,13.4,13.4,0,0,0-1,5.19A12.57,12.57,0,0,0,220,105.4a7.6,7.6,0,0,0,3.46,3.45,10.66,10.66,0,0,0,4.81,1.12,11.44,11.44,0,0,0,4.33-.85,11.21,11.21,0,0,0,3.2-1.82v-4.8Z"/>
                                            <path class="st-logo-load" d="M244.17,112.61V86.84h3.5l13.53,20.23V86.84h3.27v25.77H261L247.44,92.36v20.25Z"/>
                                        </g>
                                    </g>

                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="p-loading__back">
                        <div class="p-loading__back__inner">
                            <svg class="p-loading__logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280.13 113.21" style="enable-background:new 0 0 280.13 113.21;" xml:space="preserve">

                                <g>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path class="st-logo-load-back"  d="M0,26.21,9.9.44h3.67L24.12,26.21H20.23l-3-7.81H6.45L3.62,26.21ZM7.44,15.63h8.73L13.48,8.49q-1.23-3.25-1.83-5.34a32.85,32.85,0,0,1-1.38,4.92Z"/>
                                            <path class="st-logo-load-back"  d="M26.89,26.21V.44H38.32a15.31,15.31,0,0,1,5.24.69,5.73,5.73,0,0,1,2.86,2.46A7.25,7.25,0,0,1,47.5,7.47a6.48,6.48,0,0,1-1.78,4.62,8.94,8.94,0,0,1-5.48,2.39,9.14,9.14,0,0,1,2,1.29,17.2,17.2,0,0,1,2.83,3.43l4.49,7H45.32l-3.41-5.36q-1.5-2.33-2.46-3.55a8,8,0,0,0-1.74-1.73,5.28,5.28,0,0,0-1.55-.68,10.54,10.54,0,0,0-1.9-.12h-4V26.21Zm3.41-14.4h7.33a11.09,11.09,0,0,0,3.66-.48,3.84,3.84,0,0,0,2-1.55A4.17,4.17,0,0,0,44,7.47a3.84,3.84,0,0,0-1.33-3,6.22,6.22,0,0,0-4.19-1.17H30.3Z"/>
                                            <path class="st-logo-load-back"  d="M71.23,17.17l3.41.87a11.48,11.48,0,0,1-3.86,6.4A10.65,10.65,0,0,1,64,26.65,12.25,12.25,0,0,1,57.19,25a10.61,10.61,0,0,1-4-4.91,17.53,17.53,0,0,1-1.36-6.91,15.26,15.26,0,0,1,1.53-7,10.53,10.53,0,0,1,4.38-4.55A12.77,12.77,0,0,1,64,0a10.55,10.55,0,0,1,6.5,2A10.21,10.21,0,0,1,74.2,7.51l-3.36.79a8,8,0,0,0-2.6-4.1A7,7,0,0,0,64,2.92a8.34,8.34,0,0,0-5,1.42,7.54,7.54,0,0,0-2.8,3.83,15.27,15.27,0,0,0-.81,4.94,15.69,15.69,0,0,0,1,5.74,7.13,7.13,0,0,0,3,3.67,8.36,8.36,0,0,0,4.38,1.21,7.35,7.35,0,0,0,4.85-1.65A8.49,8.49,0,0,0,71.23,17.17Z"/>
                                            <path class="st-logo-load-back"  d="M78.94,26.21V.44h3.41V11h13.4V.44h3.41V26.21H95.75V14.06H82.35V26.21Z"/>
                                            <path class="st-logo-load-back" d="M105.42,26.21V.44h3.41V26.21Z"/>
                                            <path class="st-logo-load-back" d="M121.39,26.21V3.48H112.9v-3h20.43v3H124.8V26.21Z"/>
                                            <path class="st-logo-load-back" d="M136.9,26.21V.44h18.63v3H140.31v7.89h14.25v3H140.31v8.77h15.82v3Z"/>
                                            <path class="st-logo-load-back" d="M179.23,17.17l3.41.87a11.48,11.48,0,0,1-3.86,6.4A10.65,10.65,0,0,1,172,26.65a12.25,12.25,0,0,1-6.78-1.7,10.61,10.61,0,0,1-4-4.91,17.53,17.53,0,0,1-1.36-6.91,15.26,15.26,0,0,1,1.53-7,10.53,10.53,0,0,1,4.38-4.55A12.77,12.77,0,0,1,172,0a10.55,10.55,0,0,1,6.5,2,10.21,10.21,0,0,1,3.68,5.54l-3.36.79a8,8,0,0,0-2.6-4.1A7,7,0,0,0,172,2.92a8.34,8.34,0,0,0-5,1.42,7.54,7.54,0,0,0-2.8,3.83,15.27,15.27,0,0,0-.81,4.94,15.69,15.69,0,0,0,1,5.74,7.13,7.13,0,0,0,3,3.67,8.36,8.36,0,0,0,4.38,1.21,7.35,7.35,0,0,0,4.85-1.65A8.49,8.49,0,0,0,179.23,17.17Z"/>
                                            <path class="st-logo-load-back" d="M193.39,26.21V3.48H184.9v-3h20.43v3H196.8V26.21Z"/>
                                            <path class="st-logo-load-back" d="M225.74.44h3.41V15.33a17.55,17.55,0,0,1-.88,6.17,7.58,7.58,0,0,1-3.17,3.72,11.29,11.29,0,0,1-6,1.43,12.42,12.42,0,0,1-5.93-1.25,7.12,7.12,0,0,1-3.28-3.61,17.14,17.14,0,0,1-1-6.46V.44h3.41V15.31a14.37,14.37,0,0,0,.63,5,4.7,4.7,0,0,0,2.14,2.45,7.36,7.36,0,0,0,3.72.86c2.51,0,4.29-.57,5.36-1.7s1.6-3.33,1.6-6.56Z"/>
                                            <path class="st-logo-load-back" d="M234.88,26.21V.44H246.3a15.27,15.27,0,0,1,5.24.69,5.75,5.75,0,0,1,2.87,2.46,7.33,7.33,0,0,1,1.07,3.88,6.47,6.47,0,0,1-1.77,4.62,9,9,0,0,1-5.49,2.39,9.24,9.24,0,0,1,2.06,1.29,17.54,17.54,0,0,1,2.83,3.43l4.48,7H253.3l-3.41-5.36q-1.5-2.33-2.46-3.55a7.75,7.75,0,0,0-1.73-1.73,5.33,5.33,0,0,0-1.56-.68,10.46,10.46,0,0,0-1.9-.12h-4V26.21Zm3.41-14.4h7.33a11.09,11.09,0,0,0,3.66-.48,3.92,3.92,0,0,0,2-1.55A4.16,4.16,0,0,0,252,7.47a3.86,3.86,0,0,0-1.32-3,6.24,6.24,0,0,0-4.19-1.17h-8.16Z"/>
                                            <path class="st-logo-load-back" d="M260.89,26.21V.44h18.64v3H264.3v7.89h14.26v3H264.3v8.77h15.83v3Z"/>
                                            <path class="st-logo-load-back" d="M17.89,69.41V43.64H36.52v3H21.3v7.89H35.55v3H21.3v8.77H37.12v3Z"/>
                                            <path class="st-logo-load-back" d="M41.79,69.41V43.64h3.5L58.83,63.87V43.64h3.26V69.41H58.6L45.06,49.16V69.41Z"/>
                                            <path class="st-logo-load-back" d="M79.88,59.3v-3l10.92,0v9.56a19.31,19.31,0,0,1-5.19,3,15.45,15.45,0,0,1-5.48,1,14.58,14.58,0,0,1-6.9-1.63,10.68,10.68,0,0,1-4.68-4.7A14.73,14.73,0,0,1,67,56.65a15.91,15.91,0,0,1,1.58-7,10.46,10.46,0,0,1,4.52-4.85,14.26,14.26,0,0,1,6.81-1.58,13.36,13.36,0,0,1,5,.91,8.26,8.26,0,0,1,3.54,2.52,11,11,0,0,1,2,4.22l-3.07.84A9.68,9.68,0,0,0,85.9,48.6a6.05,6.05,0,0,0-2.47-1.81,9,9,0,0,0-3.55-.67,10.57,10.57,0,0,0-4,.71,7.52,7.52,0,0,0-2.75,1.87,9.13,9.13,0,0,0-1.63,2.55,13.59,13.59,0,0,0-1,5.19,12.57,12.57,0,0,0,1.19,5.76,7.58,7.58,0,0,0,3.45,3.45,10.7,10.7,0,0,0,4.82,1.12,11.43,11.43,0,0,0,4.32-.85,11.07,11.07,0,0,0,3.2-1.82V59.3Z"/>
                                            <path class="st-logo-load-back" d="M96.41,69.41V43.64h3.41V69.41Z"/>
                                            <path class="st-logo-load-back" d="M105.79,69.41V43.64h3.5l13.54,20.23V43.64h3.27V69.41h-3.5L109.06,49.16V69.41Z"/>
                                            <path class="st-logo-load-back" d="M131.9,69.41V43.64h18.63v3H135.31v7.89h14.25v3H135.31v8.77h15.82v3Z"/>
                                            <path class="st-logo-load-back" d="M155.91,69.41V43.64h18.63v3H159.32v7.89h14.26v3H159.32v8.77h15.82v3Z"/>
                                            <path class="st-logo-load-back" d="M179.9,69.41V43.64h11.43a15.31,15.31,0,0,1,5.24.69,5.73,5.73,0,0,1,2.86,2.46,7.24,7.24,0,0,1,1.07,3.88,6.47,6.47,0,0,1-1.77,4.62,8.94,8.94,0,0,1-5.48,2.39A9.14,9.14,0,0,1,195.3,59a17.2,17.2,0,0,1,2.83,3.43l4.48,7h-4.28l-3.41-5.36q-1.5-2.32-2.47-3.55a7.75,7.75,0,0,0-1.73-1.73,5.39,5.39,0,0,0-1.55-.68,10.54,10.54,0,0,0-1.9-.12h-4V69.41ZM183.31,55h7.33a11.09,11.09,0,0,0,3.66-.48,3.84,3.84,0,0,0,2-1.55,4.17,4.17,0,0,0,.69-2.31,3.8,3.8,0,0,0-1.33-3,6.17,6.17,0,0,0-4.19-1.18h-8.16Z"/>
                                            <path class="st-logo-load-back" d="M206.43,69.41V43.64h3.41V69.41Z"/>
                                            <path class="st-logo-load-back" d="M215.82,69.41V43.64h3.49l13.54,20.23V43.64h3.27V69.41h-3.5L219.08,49.16V69.41Z"/>
                                            <path class="st-logo-load-back" d="M253.91,59.3v-3l10.91,0v9.56a19.26,19.26,0,0,1-5.18,3,15.47,15.47,0,0,1-5.49,1,14.58,14.58,0,0,1-6.9-1.63,10.74,10.74,0,0,1-4.68-4.7A14.73,14.73,0,0,1,241,56.65a15.9,15.9,0,0,1,1.57-7,10.48,10.48,0,0,1,4.53-4.85,14.22,14.22,0,0,1,6.8-1.58,13.32,13.32,0,0,1,5.05.91,8.36,8.36,0,0,1,3.55,2.52,11.32,11.32,0,0,1,1.95,4.22l-3.08.84a9.68,9.68,0,0,0-1.44-3.09,6.08,6.08,0,0,0-2.46-1.81,9.06,9.06,0,0,0-3.55-.67,10.59,10.59,0,0,0-4,.71,7.6,7.6,0,0,0-2.75,1.87,9.1,9.1,0,0,0-1.62,2.55,13.4,13.4,0,0,0-1,5.19,12.57,12.57,0,0,0,1.19,5.76,7.58,7.58,0,0,0,3.45,3.45A10.73,10.73,0,0,0,254,66.77a11.35,11.35,0,0,0,4.32-.85,10.94,10.94,0,0,0,3.2-1.82V59.3Z"/>
                                            <path class="st-logo-load-back" d="M14.63,112.61l9.9-25.77H28.2l10.55,25.77H34.87l-3-7.81H21.08l-2.83,7.81ZM22.07,102h8.74l-2.69-7.14q-1.23-3.26-1.83-5.34a32.89,32.89,0,0,1-1.39,4.92Z"/>
                                            <path class="st-logo-load-back" d="M41.53,112.61V86.84H53a15.27,15.27,0,0,1,5.24.69A5.75,5.75,0,0,1,61.06,90a7.33,7.33,0,0,1,1.07,3.88,6.44,6.44,0,0,1-1.78,4.62,8.94,8.94,0,0,1-5.48,2.39,9.24,9.24,0,0,1,2.06,1.29,17.54,17.54,0,0,1,2.83,3.43l4.48,7H60l-3.41-5.36q-1.5-2.32-2.46-3.55A8,8,0,0,0,52.35,102a5.33,5.33,0,0,0-1.56-.68,10.46,10.46,0,0,0-1.9-.12h-4v11.44Zm3.41-14.4h7.33a11,11,0,0,0,3.65-.48,3.9,3.9,0,0,0,2-1.55,4.16,4.16,0,0,0,.68-2.31,3.83,3.83,0,0,0-1.32-3,6.22,6.22,0,0,0-4.2-1.18H44.94Z"/>
                                            <path class="st-logo-load-back" d="M73.38,112.61V89.88H64.89v-3H85.32v3H76.79v22.73Z"/>
                                            <path class="st-logo-load-back" d="M112.49,109.57a10.77,10.77,0,0,1-3.41,2.61,9.24,9.24,0,0,1-4,.87,7.86,7.86,0,0,1-6.27-2.67,7.27,7.27,0,0,1-1.89-4.87,6.78,6.78,0,0,1,1.54-4.32,12.88,12.88,0,0,1,4.6-3.38,15.73,15.73,0,0,1-2.32-3.25,5.7,5.7,0,0,1-.58-2.41,5.4,5.4,0,0,1,1.82-4,6.42,6.42,0,0,1,4.58-1.71A5.94,5.94,0,0,1,110.88,88a5.2,5.2,0,0,1,1.68,3.88q0,3.67-4.87,6.28l4.63,5.89a15.26,15.26,0,0,0,1.23-3.59l3.28.7a17.9,17.9,0,0,1-2.28,5.56,18.11,18.11,0,0,0,4,4l-2.12,2.52A18.52,18.52,0,0,1,112.49,109.57Zm-2-2.5-5.8-7.19a11.18,11.18,0,0,0-3.46,2.84,4.56,4.56,0,0,0-.9,2.59,5.55,5.55,0,0,0,1.25,3.26,4.14,4.14,0,0,0,3.54,1.68,5.81,5.81,0,0,0,2.94-.88A7.15,7.15,0,0,0,110.5,107.07Zm-4.44-10.93A8.37,8.37,0,0,0,108.72,94a3.53,3.53,0,0,0,.61-2,2.89,2.89,0,0,0-.84-2.15,2.8,2.8,0,0,0-2.08-.84,3,3,0,0,0-2.14.83,2.73,2.73,0,0,0-.85,2,2.92,2.92,0,0,0,.31,1.26,6.27,6.27,0,0,0,.92,1.39Z"/>
                                            <path class="st-logo-load-back" d="M132.18,112.61V86.84h8.88a21.18,21.18,0,0,1,4.58.37,8.7,8.7,0,0,1,3.78,1.84,10.46,10.46,0,0,1,3.05,4.41,17.15,17.15,0,0,1,1,6.12,18.28,18.28,0,0,1-.68,5.21,12.82,12.82,0,0,1-1.76,3.75,9.3,9.3,0,0,1-2.35,2.34,9.44,9.44,0,0,1-3.07,1.29,17.7,17.7,0,0,1-4.14.44Zm3.41-3h5.5a13.23,13.23,0,0,0,4-.48,5.63,5.63,0,0,0,2.31-1.33,8.14,8.14,0,0,0,1.89-3.26,16,16,0,0,0,.68-5,11.92,11.92,0,0,0-1.33-6.21,6.65,6.65,0,0,0-3.22-2.91,13.43,13.43,0,0,0-4.42-.53h-5.41Z"/>
                                            <path class="st-logo-load-back" d="M158.25,112.61V86.84h18.63v3H161.66v7.89h14.25v3H161.66v8.77h15.82v3Z"/>
                                            <path class="st-logo-load-back" d="M181,104.33l3.22-.28a7,7,0,0,0,1.06,3.17,5.81,5.81,0,0,0,2.59,2,9.81,9.81,0,0,0,4,.76,9.36,9.36,0,0,0,3.44-.58,4.85,4.85,0,0,0,2.23-1.59,3.72,3.72,0,0,0,.72-2.21,3.31,3.31,0,0,0-.7-2.11,5.16,5.16,0,0,0-2.32-1.53c-.69-.26-2.22-.68-4.59-1.25a23.85,23.85,0,0,1-5-1.61,7,7,0,0,1-2.75-2.4A5.83,5.83,0,0,1,182,93.5a6.57,6.57,0,0,1,1.11-3.65,6.91,6.91,0,0,1,3.23-2.57,12.23,12.23,0,0,1,4.73-.88,13.05,13.05,0,0,1,5.06.92A7.25,7.25,0,0,1,199.5,90a7.76,7.76,0,0,1,1.27,4.06l-3.27.25a5.31,5.31,0,0,0-1.79-3.7,7,7,0,0,0-4.49-1.24,7.2,7.2,0,0,0-4.51,1.13,3.41,3.41,0,0,0-1.41,2.73,2.93,2.93,0,0,0,1,2.29q1,.9,5.14,1.84A33.43,33.43,0,0,1,197.15,99a7.83,7.83,0,0,1,3.32,2.63,6.43,6.43,0,0,1,1.07,3.66,7,7,0,0,1-1.18,3.88A7.78,7.78,0,0,1,197,112a11.86,11.86,0,0,1-5,1,14.83,14.83,0,0,1-5.86-1,8.24,8.24,0,0,1-3.71-3.07A8.76,8.76,0,0,1,181,104.33Z"/>
                                            <path class="st-logo-load-back" d="M206.78,112.61V86.84h3.41v25.77Z"/>
                                            <path class="st-logo-load-back" d="M228.26,102.5v-3l10.92,0V109a19.46,19.46,0,0,1-5.19,3,15.45,15.45,0,0,1-5.48,1,14.58,14.58,0,0,1-6.9-1.63,10.76,10.76,0,0,1-4.69-4.7,14.85,14.85,0,0,1-1.58-6.87,16,16,0,0,1,1.57-7A10.48,10.48,0,0,1,221.44,88a14.25,14.25,0,0,1,6.8-1.58,13.37,13.37,0,0,1,5.06.91,8.39,8.39,0,0,1,3.54,2.52,11.32,11.32,0,0,1,1.95,4.22l-3.08.84a9.27,9.27,0,0,0-1.44-3.09,5.85,5.85,0,0,0-2.46-1.8,8.85,8.85,0,0,0-3.55-.68,10.5,10.5,0,0,0-4,.71,7.44,7.44,0,0,0-2.75,1.87,9.13,9.13,0,0,0-1.63,2.55,13.4,13.4,0,0,0-1,5.19A12.57,12.57,0,0,0,220,105.4a7.6,7.6,0,0,0,3.46,3.45,10.66,10.66,0,0,0,4.81,1.12,11.44,11.44,0,0,0,4.33-.85,11.21,11.21,0,0,0,3.2-1.82v-4.8Z"/>
                                            <path class="st-logo-load-back" d="M244.17,112.61V86.84h3.5l13.53,20.23V86.84h3.27v25.77H261L247.44,92.36v20.25Z"/>
                                        </g>
                                    </g>

                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="p-alert js-target--height__screenFix--mobile">
            <p class="p-alert__text b-fonts__medium">Roate your device.</p>
        </div>

   </div>

</template>


<script>
//   import('../../../public/js/vendor.bundle.js');
//   import('../../../public/js/app.bundle.js');
export default {
    created() {



    },
     methods:{
        home(){
               window.location.href = "/";
        },
        limooproject(){
             window.location.href = "/limoo-project";
        },
        jabanproject(){
              window.location.href = "/jaban-project";
        },
        yasproject(){
              window.location.href = "/yas-project";
        },
        about(){
              window.location.href = "/about";
        },

    }
}
</script>
