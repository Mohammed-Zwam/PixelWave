import React from 'react';
import styled from 'styled-components';

const Switch = () => {
    return (
        <StyledWrapper>
            <div id="menuToggle">
                <input id="checkbox" type="checkbox" onChange={(e) => {
                    let menuList = document.querySelector('main.home-page header nav');
                    let pageContainer = document.querySelector('main.home-page .overlay');
                    if (e.target.checked) {
                        pageContainer.style.opacity = '.3';
                        menuList.style.right = 0;
                        pageContainer.style.display = 'block';
                    } else {
                        menuList.style.right = `-${menuList.clientWidth + 50}px`;
                        pageContainer.style.opacity = '0';
                        pageContainer.style.display = 'none';
                    }
                }} />
                <label className="toggle" htmlFor="checkbox">
                    <div className="bar bar--top" />
                    <div className="bar bar--middle" />
                    <div className="bar bar--bottom" />
                </label>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
#checkbox {
    display: none;
}

.toggle {
    position: relative;
    width: 37px;
    cursor: pointer;
    margin: auto;
    display: block;
    height: calc(4px * 3 + 11px * 2);
    transform: scale(.6);
    z-index: 6;
}

.bar {
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: calc(4px / 2);
    color: inherit;
    opacity: 1;
    transition: none 0.35s cubic-bezier(.5,-0.35,.35,1.5) 0s;
    background:  var(--font-hover-col);

}

/***** Collapse Animation *****/

.bar--top {
    bottom: calc(50% + 8px + 0px/ 2);
    transition-property: bottom,margin,transform;
    transition-delay: calc(0s + 0.35s),0s,0s;
}

.bar--middle {
    top: calc(50% - 0px/ 2);
    transition-property: top,opacity;
    transition-duration: 0.35s,0s;
    transition-delay: calc(0s + 0.35s * 1.3),calc(0s + 0.35s * 1.3);
}

.bar--bottom {
    top: calc(50% + 8px + 4px/ 2);
    transition-property: top,transform;
    transition-delay: 0s;
}

#checkbox:checked + .toggle .bar--top {
    bottom: calc(50% - 11px - 4px);
    margin-bottom: calc(11px + 4px/ 2);
    transform: rotate(45deg);
    transition-delay: calc(0s + 0.35s * .3),calc(0s + 0.35s * 1.3),calc(0s + 0.35s * 1.3);
}

#checkbox:checked + .toggle .bar--middle {
    top: calc(50% + 11px);
    opacity: 0;
    transition-duration: 0.35s,0s;
    transition-delay: 0s,calc(0s + 0.35s);
}

#checkbox:checked + .toggle .bar--bottom {
    top: calc(50% - 4px/ 2);
    transform: rotate(-45deg);
    transition-delay: calc(0s + 0.35s * 1.3),calc(0s + 0.35s * 1.3);
}`;

export default Switch;
