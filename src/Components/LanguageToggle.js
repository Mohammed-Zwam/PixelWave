import React, { useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../Contexts/LangContext";

const Switch = () => {
    let language = useContext(LangContext);

    return (
        <div>
            <StyledWrapper>
                <label htmlFor="filter" className="switch hover-element" aria-label="Toggle Filter">
                    <input
                        checked={language.lang === "en" ? false : true}
                        type="checkbox"
                        id="filter"
                        onChange={() => {
                            language.setLang(language.lang === "en" ? "ar" : "en");
                        }} />
                    <span>EN</span>
                    <span>AR</span>
                </label>
            </StyledWrapper>
        </div>
    );
};

const StyledWrapper = styled.div`
    .switch {
        --_switch-bg-clr: #70a9c5;
        --_switch-padding: 4px; /* padding around button*/
        --_slider-bg-clr: rgba(12, 74, 110, 0.65); /* slider color unchecked */
        --_slider-bg-clr-on: rgba(12, 74, 110, 1); /* slider color checked */
        --_slider-txt-clr: #ffffff;
        --_label-padding: 6px 10px; /* padding around the labels -  this gives the switch it's global width and height */
        --_switch-easing: cubic-bezier(
        0.47,
        1.64,
        0.41,
        0.8
        ); /* easing on toggle switch */
        color: white;
        width: fit-content;
        display: flex;
        justify-content: center;
        position: relative;
        border-radius: 9999px;
        cursor: pointer;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        position: relative;
        isolation: isolate;
        }

        .switch input[type="checkbox"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    .switch > span {
        display: grid;
        place-content: center;
        transition: opacity 300ms ease-in-out 150ms;
        padding: var(--_label-padding);
        font-size: 12px;
        font-weight: 500;
    }
    .switch::before,
    .switch::after {
        content: "";
        position: absolute;
        border-radius: inherit;
        transition: inset 150ms ease-in-out;
    }
    /* switch slider */
    .switch::before {
        background-color: var(--_slider-bg-clr);
        inset: var(--_switch-padding) 58% var(--_switch-padding)
        var(--_switch-padding);
        transition: inset 500ms var(--_switch-easing),
        background-color 500ms ease-in-out;
        z-index: -1;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.3),
        0 1px rgba(255, 255, 255, 0.3);
    }
    /* switch bg color */
    .switch::after {
        background-color: var(--_switch-bg-clr);
        inset: 0;
        z-index: -2;
    }
    /* switch hover & focus */
    //   .switch:focus-within::after {
    //     inset: -0.25rem;
    //   }
    .switch:has(input:checked):hover > span:first-of-type,
    .switch:has(input:not(:checked)):hover > span:last-of-type {
        opacity: 1;
        transition-delay: 0ms;
        transition-duration: 100ms;
    }
    /* switch hover */
    //   .switch:has(input:checked):hover::before {
    //     inset: var(--_switch-padding) var(--_switch-padding) var(--_switch-padding)
    //       45%;
    //   }
    //   .switch:has(input:not(:checked)):hover::before {
    //     inset: var(--_switch-padding) 60% var(--_switch-padding)
    //       var(--_switch-padding);
    //   }
    /* checked - move slider to right */
    .switch:has(input:checked)::before {
        background-color: var(--_slider-bg-clr-on);
        inset: var(--_switch-padding) var(--_switch-padding) var(--_switch-padding)
        56%;
    }
    /* checked - set opacity */
    .switch > span:last-of-type,
    .switch > input:checked + span:first-of-type {
        opacity: 0.75;
    }
    .switch > input:checked ~ span:last-of-type {
        opacity: 1;
    }
`;

export default Switch;