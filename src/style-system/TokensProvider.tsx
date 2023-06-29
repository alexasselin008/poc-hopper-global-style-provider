import { useMemo } from "react";
import { useInjectGlobalStyles } from "./useInjectGlobalStyles";

export interface TokensProviderProps {
    scope: string;
}
// TODO: explain why this is a component. The reason is we want it to be a children of the root element of the hopper provider
export function TokensProvider({scope}: TokensProviderProps) {
    const tokens = useMemo(() => {
        return {
            core: coreTokens(scope),
            // fake different theme based on scope
            lightSemantic: scope === "o-ui-0-0-0" ? lightSemanticTokens(scope): alternativeLightSemanticTokens(scope),
            darkSemantic: scope === "o-ui-0-0-0" ? darkSemanticTokens(scope): alternativeDarkSemanticTokens(scope)
        }
    }, [scope])


    useInjectGlobalStyles(`hop-tokens-${scope}`, tokens.core)
    useInjectGlobalStyles(`hop-tokens-light-${scope}`, tokens.lightSemantic)
    useInjectGlobalStyles(`hop-tokens-dark-${scope}`, tokens.darkSemantic)

    return null;
}




const coreTokens  = (scope: string) => `
.o-ui.${scope} {
     --o-ui-sp-1: .25rem;
     --o-ui-sp-2: .5rem;
     --o-ui-sp-3: .75rem;
     --o-ui-sp-4: 1rem;
     --o-ui-sp-5: 1.25rem;
     --o-ui-sp-6: 1.5rem;
     --o-ui-sp-7: 2rem;
     --o-ui-sp-8: 2.5rem;
     --o-ui-sp-9: 3rem;
     --o-ui-sp-10: 3.5rem;
     --o-ui-sp-11: 4rem;
     --o-ui-sp-12: 4.5rem;
     --o-ui-sp-13: 5rem;
     --o-ui-sz-1: .75rem;
     --o-ui-sz-2: 1rem;
     --o-ui-sz-3: 1.25rem;
     --o-ui-sz-4: 1.5rem;
     --o-ui-sz-5: 2rem;
     --o-ui-sz-6: 2.5rem;
     --o-ui-sz-7: 3rem;
     --o-ui-sz-8: 3.5rem;
     --o-ui-sz-9: 4rem;
     --o-ui-sz-10: 4.5rem;
     --o-ui-sz-11: 5rem;
     --o-ui-sz-12: 6rem;
     --o-ui-sz-13: 8rem;
     --o-ui-sz-14: 12rem;
     --o-ui-sz-15: 16rem;
     --o-ui-sz-16: 20rem;
     --o-ui-sz-17: 24rem;
     --o-ui-sz-18: 30rem;
     --o-ui-fs-1: .625rem;
     --o-ui-fs-2: .75rem;
     --o-ui-fs-3: .875rem;
     --o-ui-fs-4: 1rem;
     --o-ui-fs-5: 1.125rem;
     --o-ui-fs-6: 1.375rem;
     --o-ui-fs-7: 1.75rem;
     --o-ui-fs-8: 2rem;
     --o-ui-fs-9: 2.5rem;
     --o-ui-fs-10: 3.75rem;
     --o-ui-fs-11: 5rem;
     --o-ui-fw-1: 400;
     --o-ui-fw-2: 500;
     --o-ui-fw-3: 600;
     --o-ui-lh-1: 1;
     --o-ui-lh-2: 1.2;
     --o-ui-lh-3: 1.25;
     --o-ui-lh-4: 1.3333333;
     --o-ui-lh-5: 1.454595;
     --o-ui-lh-6: 1.5;
     --o-ui-br-1: .125rem;
     --o-ui-br-2: .25rem;
     --o-ui-br-3: .5rem;
     --o-ui-br-4: 1rem;
     --o-ui-br-pill: 999px;
     --o-ui-br-circular: 100%;
     --o-ui-bs-alias-lifted: var(--o-ui-bs-1);
     --o-ui-bs-alias-floating: var(--o-ui-bs-2);
     --o-ui-neutral-1: #f4f4f4;
     --o-ui-neutral-2: #e5e5e5;
     --o-ui-neutral-3: #c4c3c3;
     --o-ui-neutral-4: #adacac;
     --o-ui-neutral-5: #929292;
     --o-ui-neutral-6: #777676;
     --o-ui-neutral-7: #555454;
     --o-ui-neutral-8: #434342;
     --o-ui-neutral-9: #272626;
     --o-ui-neutral-10: #111010;
     --o-ui-green-1: #dbfbea;
     --o-ui-green-2: #cbeedb;
     --o-ui-green-3: #a5cdb8;
     --o-ui-green-4: #78ba9b;
     --o-ui-green-5: #27a57a;
     --o-ui-green-6: #268563;
     --o-ui-green-7: #2b5e48;
     --o-ui-green-8: #27493a;
     --o-ui-green-9: #1a2a23;
     --o-ui-green-10: #0c110e;
     --o-ui-orange-1: #fcf2e3;
     --o-ui-orange-2: #fee2bb;
     --o-ui-orange-3: #ffb470;
     --o-ui-orange-4: #ff9048;
     --o-ui-orange-5: #ff5c00;
     --o-ui-orange-6: #c7521a;
     --o-ui-orange-7: #874020;
     --o-ui-orange-8: #66351e;
     --o-ui-orange-9: #392015;
     --o-ui-orange-10: #170e09;
     --o-ui-purple-1: #eef3fd;
     --o-ui-purple-2: #dbe6fd;
     --o-ui-purple-3: #b6c2ef;
     --o-ui-purple-4: #95a9f5;
     --o-ui-purple-5: #7689fd;
     --o-ui-purple-6: #5d65f6;
     --o-ui-purple-7: #4b11fd;
     --o-ui-purple-8: #362aae;
     --o-ui-purple-9: #1f2151;
     --o-ui-purple-10: #0d0f1f;
     --o-ui-success-1: #e3f8ec;
     --o-ui-success-2: #ceedd7;
     --o-ui-success-3: #93d39b;
     --o-ui-success-4: #61c06d;
     --o-ui-success-5: #17a93c;
     --o-ui-success-6: #2d8739;
     --o-ui-success-7: #2e5f30;
     --o-ui-success-8: #284929;
     --o-ui-success-9: #1b2a1a;
     --o-ui-success-10: #0c110b;
     --o-ui-warning-1: #fcf3df;
     --o-ui-warning-2: #fbe3b5;
     --o-ui-warning-3: #f6ba42;
     --o-ui-warning-4: #d7a541;
     --o-ui-warning-5: #b48c3f;
     --o-ui-warning-6: #907239;
     --o-ui-warning-7: #65522f;
     --o-ui-warning-8: #4e4027;
     --o-ui-warning-9: #2c2619;
     --o-ui-warning-10: #12100b;
     --o-ui-alert-1: #fbf1f1;
     --o-ui-alert-2: #fadfdf;
     --o-ui-alert-3: #fdb0af;
     --o-ui-alert-4: #f88f8d;
     --o-ui-alert-5: #eb6a64;
     --o-ui-alert-6: #d93c37;
     --o-ui-alert-7: #a91414;
     --o-ui-alert-8: #811b15;
     --o-ui-alert-9: #461812;
     --o-ui-alert-10: #1d0b09;
     --o-ui-black: #000;
     --o-ui-gray: #f9f9f9;
     --o-ui-white: #fff;
     --o-ui-accent-1: #eef3fd;
     --o-ui-accent-2: #dbe6fd;
     --o-ui-accent-3: #b6c2ef;
     --o-ui-accent-4: #95a9f5;
     --o-ui-accent-5: #7689fd;
     --o-ui-accent-6: #5D65f6;
     --o-ui-accent-7: #4B11fd;
     --o-ui-accent-8: #362aae;
     --o-ui-accent-9: #1f2151;
     --o-ui-accent-10: #0d0f1f;
}
`.replace(/(\r\n|\n|\r|\s\s)/gm, "") // remove all line breaks, extra spaces and tabs

const lightSemanticTokens = (scope:string) => `
.o-ui.${scope}-light {
    --o-ui-bs-1: 0 0 0 1px rgba(93, 101, 246, 0.05), 0px 5px 10px rgba(93, 101, 246, 0.1); --o-ui-bs-2: 0 0 0 1px rgba(93, 101, 246, 0.05), 0px 0.1px 0.3px rgba(93, 101, 246, 0.022), 0px 0.3px 0.7px rgba(93, 101, 246, 0.032), 0px 0.6px 1.3px rgba(93, 101, 246, 0.04), 0px 1.1px 2.2px rgba(93, 101, 246, 0.048), 0px 2.1px 4.2px rgba(93, 101, 246, 0.058), 0px 5px 10px rgba(93, 101, 246, 0.08);; --o-ui-bg-alias-body: var(--o-ui-gray); --o-ui-bg-alias-surface: var(--o-ui-white); --o-ui-bg-alias-soft-break: var(--o-ui-gray); --o-ui-bg-alias-mid-break: var(--o-ui-neutral-1); --o-ui-bg-alias-hard-break: var(--o-ui-neutral-3); --o-ui-bg-alias-basic: var(--o-ui-neutral-8); --o-ui-bg-alias-basic-hover: var(--o-ui-neutral-9); --o-ui-bg-alias-basic-active: var(--o-ui-neutral-10); --o-ui-bg-alias-basic-transparent: var(--o-ui-transparent); --o-ui-bg-alias-basic-transparent-hover: var(--o-ui-neutral-2); --o-ui-bg-alias-basic-transparent-active: var(--o-ui-neutral-3); --o-ui-bg-alias-static-white: var(--o-ui-white); --o-ui-bg-alias-grey-hover: var(--o-ui-neutral-1); --o-ui-bg-alias-grey-active: var(--o-ui-neutral-3); --o-ui-bg-alias-accent: var(--o-ui-purple-6); --o-ui-bg-alias-accent-hover: var(--o-ui-purple-8); --o-ui-bg-alias-accent-active: var(--o-ui-purple-9); --o-ui-bg-alias-accent-faint: var(--o-ui-purple-1); --o-ui-bg-alias-accent-light: var(--o-ui-purple-2); --o-ui-bg-alias-accent-transparent: var(--o-ui-transparent); --o-ui-bg-alias-accent-transparent-hover: var(--o-ui-purple-1); --o-ui-bg-alias-accent-transparent-active: var(--o-ui-purple-2); --o-ui-bg-alias-alert: var(--o-ui-alert-6); --o-ui-bg-alias-alert-hover: var(--o-ui-alert-8); --o-ui-bg-alias-alert-active: var(--o-ui-alert-9); --o-ui-bg-alias-alert-faint: var(--o-ui-alert-1); --o-ui-bg-alias-alert-light: var(--o-ui-alert-2); --o-ui-bg-alias-alert-transparent: var(--o-ui-transparent); --o-ui-bg-alias-alert-transparent-hover: var(--o-ui-alert-1); --o-ui-bg-alias-alert-transparent-active: var(--o-ui-alert-2); --o-ui-bg-alias-warning: var(--o-ui-warning-3); --o-ui-bg-alias-warning-hover: var(--o-ui-warning-8); --o-ui-bg-alias-warning-active: var(--o-ui-warning-9); --o-ui-bg-alias-warning-faint: var(--o-ui-warning-1); --o-ui-bg-alias-warning-light: var(--o-ui-warning-2); --o-ui-bg-alias-success: var(--o-ui-success-6); --o-ui-bg-alias-success-hover: var(--o-ui-success-8); --o-ui-bg-alias-success-active: var(--o-ui-success-9); --o-ui-bg-alias-success-faint: var(--o-ui-success-1); --o-ui-bg-alias-success-light: var(--o-ui-success-2); --o-ui-bg-alias-transparent: transparent; --o-ui-bg-alias-input-selection: var(--o-ui-accent-3); --o-ui-bg-alias-underlay: rgba(31, 33, 81, 0.5); --o-ui-b-alias-low-break: var(--o-ui-neutral-2); --o-ui-b-alias-mid-break: var(--o-ui-neutral-4); --o-ui-b-alias-high-break: var(--o-ui-neutral-6); --o-ui-b-alias-accent-active: var(--o-ui-purple-6); --o-ui-b-alias-alert: var(--o-ui-alert-6); --o-ui-b-alias-alert-hover: var(--o-ui-alert-7); --o-ui-b-alias-alert-active: var(--o-ui-alert-8); --o-ui-b-alias-warning: var(--o-ui-warning-4); --o-ui-b-alias-warning-hover: var(--o-ui-warning-8); --o-ui-b-alias-warning-active: var(--o-ui-warning-9); --o-ui-b-alias-success: var(--o-ui-success-4); --o-ui-b-alias-success-hover: var(--o-ui-success-8); --o-ui-b-alias-success-active: var(--o-ui-success-9); --o-ui-icon-alias-primary: var(--o-ui-neutral-10); --o-ui-icon-alias-primary-hover: var(--o-ui-black); --o-ui-icon-alias-secondary: var(--o-ui-neutral-8); --o-ui-icon-alias-tertiary: var(--o-ui-neutral-6); --o-ui-icon-alias-faint: var(--o-ui-neutral-5); --o-ui-icon-alias-accent: var(--o-ui-purple-6); --o-ui-icon-alias-accent-hover: var(--o-ui-purple-8); --o-ui-icon-alias-accent-active: var(--o-ui-purple-8); --o-ui-icon-alias-alert: var(--o-ui-alert-6); --o-ui-icon-alias-alert-hover: var(--o-ui-alert-8); --o-ui-icon-alias-warning: var(--o-ui-warning-5); --o-ui-icon-alias-success: var(--o-ui-success-6); --o-ui-icon-alias-static-white: var(--o-ui-white); --o-ui-icon-alias-input-placeholder: var(--o-ui-neutral-4); --o-ui-text-alias-primary: var(--o-ui-neutral-10); --o-ui-text-alias-primary-hover: var(--o-ui-black); --o-ui-text-alias-secondary: var(--o-ui-neutral-8); --o-ui-text-alias-tertiary: var(--o-ui-neutral-6); --o-ui-text-alias-faint: var(--o-ui-neutral-5); --o-ui-text-alias-accent: var(--o-ui-purple-6); --o-ui-text-alias-accent-hover: var(--o-ui-purple-8); --o-ui-text-alias-accent-active: var(--o-ui-purple-8); --o-ui-text-alias-alert: var(--o-ui-alert-7); --o-ui-text-alias-warning: var(--o-ui-warning-5); --o-ui-text-alias-success: var(--o-ui-success-6); --o-ui-text-alias-static-white: var(--o-ui-white); --o-ui-text-alias-input-placeholder: var(--o-ui-neutral-4); --o-ui-focus-ring-color-alias-default: rgba(31, 115, 183, .35);
}
`.replace(/(\r\n|\n|\r|\s\s)/gm, "") // remove all line breaks, extra spaces and tabs

const darkSemanticTokens = (scope:string) => `
.o-ui.${scope}-dark {
    --o-ui-bs-1: 0 0 0 1px rgba(93, 101, 246, 0.15), 0px 5px 10px rgba(93, 101, 246, 0.1); --o-ui-bs-2: 0 0 0 1px rgba(93, 101, 246, 0.15), 0px 0.1px 0.3px rgba(93, 101, 246, 0.022), 0px 0.3px 0.7px rgba(93, 101, 246, 0.032), 0px 0.6px 1.3px rgba(93, 101, 246, 0.04), 0px 1.1px 2.2px rgba(93, 101, 246, 0.048), 0px 2.1px 4.2px rgba(93, 101, 246, 0.058), 0px 5px 10px rgba(93, 101, 246, 0.08);; --o-ui-bg-alias-body: var(--o-ui-neutral-10); --o-ui-bg-alias-surface: var(--o-ui-neutral-9); --o-ui-bg-alias-soft-break: var(--o-ui-neutral-10); --o-ui-bg-alias-mid-break: var(--o-ui-neutral-8); --o-ui-bg-alias-hard-break: var(--o-ui-neutral-6); --o-ui-bg-alias-basic: var(--o-ui-neutral-5); --o-ui-bg-alias-basic-hover: var(--o-ui-neutral-6); --o-ui-bg-alias-basic-active: var(--o-ui-neutral-7); --o-ui-bg-alias-basic-transparent: var(--o-ui-transparent); --o-ui-bg-alias-basic-transparent-hover: var(--o-ui-neutral-7); --o-ui-bg-alias-basic-transparent-active: var(--o-ui-neutral-8); --o-ui-bg-alias-static-white: var(--o-ui-white); --o-ui-bg-alias-grey-hover: var(--o-ui-neutral-6); --o-ui-bg-alias-grey-active: var(--o-ui-neutral-7); --o-ui-bg-alias-accent: var(--o-ui-purple-6); --o-ui-bg-alias-accent-hover: var(--o-ui-purple-8); --o-ui-bg-alias-accent-active: var(--o-ui-purple-9); --o-ui-bg-alias-accent-faint: var(--o-ui-purple-9); --o-ui-bg-alias-accent-transparent: var(--o-ui-transparent); --o-ui-bg-alias-accent-transparent-hover: var(--o-ui-purple-9); --o-ui-bg-alias-accent-transparent-active: var(--o-ui-purple-9); --o-ui-bg-alias-accent-light: var(--o-ui-purple-8); --o-ui-bg-alias-alert: var(--o-ui-alert-6); --o-ui-bg-alias-alert-hover: var(--o-ui-alert-8); --o-ui-bg-alias-alert-active: var(--o-ui-alert-9); --o-ui-bg-alias-alert-faint: var(--o-ui-alert-9); --o-ui-bg-alias-alert-light: var(--o-ui-alert-8); --o-ui-bg-alias-alert-transparent: var(--o-ui-transparent); --o-ui-bg-alias-alert-transparent-hover: var(--o-ui-alert-8); --o-ui-bg-alias-alert-transparent-active: var(--o-ui-alert-9); --o-ui-bg-alias-warning: var(--o-ui-warning-3); --o-ui-bg-alias-warning-hover: var(--o-ui-warning-8); --o-ui-bg-alias-warning-active: var(--o-ui-warning-9); --o-ui-bg-alias-warning-faint: var(--o-ui-warning-8); --o-ui-bg-alias-warning-light: var(--o-ui-warning-7); --o-ui-bg-alias-success: var(--o-ui-success-6); --o-ui-bg-alias-success-hover: var(--o-ui-success-8); --o-ui-bg-alias-success-active: var(--o-ui-success-9); --o-ui-bg-alias-success-faint: var(--o-ui-success-9); --o-ui-bg-alias-success-light: var(--o-ui-success-8); --o-ui-bg-alias-transparent: transparent; --o-ui-bg-alias-input-selection: var(--o-ui-accent-5); --o-ui-bg-alias-underlay: rgba(31, 33, 81, 0.5); --o-ui-b-alias-low-break: var(--o-ui-neutral-8); --o-ui-b-alias-mid-break: var(--o-ui-neutral-7); --o-ui-b-alias-high-break: var(--o-ui-neutral-5); --o-ui-b-alias-accent-active: var(--o-ui-purple-8); --o-ui-b-alias-alert: var(--o-ui-alert-6); --o-ui-b-alias-alert-hover: var(--o-ui-alert-7); --o-ui-b-alias-alert-active: var(--o-ui-alert-8); --o-ui-b-alias-warning: var(--o-ui-warning-5); --o-ui-b-alias-warning-hover: var(--o-ui-warning-7); --o-ui-b-alias-warning-active: var(--o-ui-warning-8); --o-ui-b-alias-success: var(--o-ui-success-6); --o-ui-b-alias-success-hover: var(--o-ui-success-7); --o-ui-b-alias-success-active: var(--o-ui-success-8); --o-ui-icon-alias-primary: var(--o-ui-white); --o-ui-icon-alias-primary-hover: var(--o-ui-white); --o-ui-icon-alias-secondary: var(--o-ui-neutral-1); --o-ui-icon-alias-tertiary: var(--o-ui-neutral-2); --o-ui-icon-alias-faint: var(--o-ui-neutral-3); --o-ui-icon-alias-accent: var(--o-ui-purple-6); --o-ui-icon-alias-accent-hover: var(--o-ui-purple-2); --o-ui-icon-alias-accent-active: var(--o-ui-purple-2); --o-ui-icon-alias-alert: var(--o-ui-alert-4); --o-ui-icon-alias-alert-hover: var(--o-ui-alert-8); --o-ui-icon-alias-warning: var(--o-ui-warning-3); --o-ui-icon-alias-success: var(--o-ui-success-5); --o-ui-icon-alias-static-white: var(--o-ui-white); --o-ui-icon-alias-input-placeholder: var(--o-ui-neutral-3); --o-ui-text-alias-primary: var(--o-ui-white); --o-ui-text-alias-primary-hover: var(--o-ui-white); --o-ui-text-alias-secondary: var(--o-ui-neutral-1); --o-ui-text-alias-tertiary: var(--o-ui-neutral-2); --o-ui-text-alias-faint: var(--o-ui-neutral-3); --o-ui-text-alias-accent: var(--o-ui-purple-6); --o-ui-text-alias-accent-hover: var(--o-ui-purple-2); --o-ui-text-alias-accent-active: var(--o-ui-purple-2); --o-ui-text-alias-alert: var(--o-ui-alert-6); --o-ui-text-alias-warning: var(--o-ui-warning-3); --o-ui-text-alias-success: var(--o-ui-success-5); --o-ui-text-alias-static-white: var(--o-ui-white); --o-ui-text-alias-input-placeholder: var(--o-ui-neutral-3); --o-ui-focus-ring-color-alias-default: rgba(53, 144, 221, .35);
}
`.replace(/(\r\n|\n|\r|\s\s)/gm, "") // remove all line breaks, extra spaces and tabs

const alternativeLightSemanticTokens = (scope:string) => `
.o-ui.${scope}-light {
    --o-ui-bs-1: 0 0 0 1px rgba(93, 101, 246, 0.05), 0px 5px 10px rgba(93, 101, 246, 0.1); --o-ui-bs-2: 0 0 0 1px rgba(93, 101, 246, 0.05), 0px 0.1px 0.3px rgba(93, 101, 246, 0.022), 0px 0.3px 0.7px rgba(93, 101, 246, 0.032), 0px 0.6px 1.3px rgba(93, 101, 246, 0.04), 0px 1.1px 2.2px rgba(93, 101, 246, 0.048), 0px 2.1px 4.2px rgba(93, 101, 246, 0.058), 0px 5px 10px rgba(93, 101, 246, 0.08);; --o-ui-bg-alias-body: var(--o-ui-gray); --o-ui-bg-alias-surface: var(--o-ui-white); --o-ui-bg-alias-soft-break: var(--o-ui-gray); --o-ui-bg-alias-mid-break: var(--o-ui-neutral-1); --o-ui-bg-alias-hard-break: var(--o-ui-neutral-3); --o-ui-bg-alias-basic: var(--o-ui-neutral-8); --o-ui-bg-alias-basic-hover: var(--o-ui-neutral-9); --o-ui-bg-alias-basic-active: var(--o-ui-neutral-10); --o-ui-bg-alias-basic-transparent: var(--o-ui-transparent); --o-ui-bg-alias-basic-transparent-hover: var(--o-ui-neutral-2); --o-ui-bg-alias-basic-transparent-active: var(--o-ui-neutral-3); --o-ui-bg-alias-static-white: var(--o-ui-white); --o-ui-bg-alias-grey-hover: var(--o-ui-neutral-1); --o-ui-bg-alias-grey-active: var(--o-ui-neutral-3); --o-ui-bg-alias-accent: var(--o-ui-orange-6); --o-ui-bg-alias-accent-hover: var(--o-ui-orange-8); --o-ui-bg-alias-accent-active: var(--o-ui-orange-9); --o-ui-bg-alias-accent-faint: var(--o-ui-orange-1); --o-ui-bg-alias-accent-light: var(--o-ui-orange-2); --o-ui-bg-alias-accent-transparent: var(--o-ui-transparent); --o-ui-bg-alias-accent-transparent-hover: var(--o-ui-orange-1); --o-ui-bg-alias-accent-transparent-active: var(--o-ui-orange-2); --o-ui-bg-alias-alert: var(--o-ui-alert-6); --o-ui-bg-alias-alert-hover: var(--o-ui-alert-8); --o-ui-bg-alias-alert-active: var(--o-ui-alert-9); --o-ui-bg-alias-alert-faint: var(--o-ui-alert-1); --o-ui-bg-alias-alert-light: var(--o-ui-alert-2); --o-ui-bg-alias-alert-transparent: var(--o-ui-transparent); --o-ui-bg-alias-alert-transparent-hover: var(--o-ui-alert-1); --o-ui-bg-alias-alert-transparent-active: var(--o-ui-alert-2); --o-ui-bg-alias-warning: var(--o-ui-warning-3); --o-ui-bg-alias-warning-hover: var(--o-ui-warning-8); --o-ui-bg-alias-warning-active: var(--o-ui-warning-9); --o-ui-bg-alias-warning-faint: var(--o-ui-warning-1); --o-ui-bg-alias-warning-light: var(--o-ui-warning-2); --o-ui-bg-alias-success: var(--o-ui-success-6); --o-ui-bg-alias-success-hover: var(--o-ui-success-8); --o-ui-bg-alias-success-active: var(--o-ui-success-9); --o-ui-bg-alias-success-faint: var(--o-ui-success-1); --o-ui-bg-alias-success-light: var(--o-ui-success-2); --o-ui-bg-alias-transparent: transparent; --o-ui-bg-alias-input-selection: var(--o-ui-accent-3); --o-ui-bg-alias-underlay: rgba(31, 33, 81, 0.5); --o-ui-b-alias-low-break: var(--o-ui-neutral-2); --o-ui-b-alias-mid-break: var(--o-ui-neutral-4); --o-ui-b-alias-high-break: var(--o-ui-neutral-6); --o-ui-b-alias-accent-active: var(--o-ui-orange-6); --o-ui-b-alias-alert: var(--o-ui-alert-6); --o-ui-b-alias-alert-hover: var(--o-ui-alert-7); --o-ui-b-alias-alert-active: var(--o-ui-alert-8); --o-ui-b-alias-warning: var(--o-ui-warning-4); --o-ui-b-alias-warning-hover: var(--o-ui-warning-8); --o-ui-b-alias-warning-active: var(--o-ui-warning-9); --o-ui-b-alias-success: var(--o-ui-success-4); --o-ui-b-alias-success-hover: var(--o-ui-success-8); --o-ui-b-alias-success-active: var(--o-ui-success-9); --o-ui-icon-alias-primary: var(--o-ui-neutral-10); --o-ui-icon-alias-primary-hover: var(--o-ui-black); --o-ui-icon-alias-secondary: var(--o-ui-neutral-8); --o-ui-icon-alias-tertiary: var(--o-ui-neutral-6); --o-ui-icon-alias-faint: var(--o-ui-neutral-5); --o-ui-icon-alias-accent: var(--o-ui-orange-6); --o-ui-icon-alias-accent-hover: var(--o-ui-orange-8); --o-ui-icon-alias-accent-active: var(--o-ui-orange-8); --o-ui-icon-alias-alert: var(--o-ui-alert-6); --o-ui-icon-alias-alert-hover: var(--o-ui-alert-8); --o-ui-icon-alias-warning: var(--o-ui-warning-5); --o-ui-icon-alias-success: var(--o-ui-success-6); --o-ui-icon-alias-static-white: var(--o-ui-white); --o-ui-icon-alias-input-placeholder: var(--o-ui-neutral-4); --o-ui-text-alias-primary: var(--o-ui-neutral-10); --o-ui-text-alias-primary-hover: var(--o-ui-black); --o-ui-text-alias-secondary: var(--o-ui-neutral-8); --o-ui-text-alias-tertiary: var(--o-ui-neutral-6); --o-ui-text-alias-faint: var(--o-ui-neutral-5); --o-ui-text-alias-accent: var(--o-ui-orange-6); --o-ui-text-alias-accent-hover: var(--o-ui-orange-8); --o-ui-text-alias-accent-active: var(--o-ui-orange-8); --o-ui-text-alias-alert: var(--o-ui-alert-7); --o-ui-text-alias-warning: var(--o-ui-warning-5); --o-ui-text-alias-success: var(--o-ui-success-6); --o-ui-text-alias-static-white: var(--o-ui-white); --o-ui-text-alias-input-placeholder: var(--o-ui-neutral-4); --o-ui-focus-ring-color-alias-default: rgba(31, 115, 183, .35);
}
`.replace(/(\r\n|\n|\r|\s\s)/gm, "") // remove all line breaks, extra spaces and tabs

const alternativeDarkSemanticTokens = (scope:string) => `
.o-ui.${scope}-dark {
    --o-ui-bs-1: 0 0 0 1px rgba(93, 101, 246, 0.15), 0px 5px 10px rgba(93, 101, 246, 0.1); --o-ui-bs-2: 0 0 0 1px rgba(93, 101, 246, 0.15), 0px 0.1px 0.3px rgba(93, 101, 246, 0.022), 0px 0.3px 0.7px rgba(93, 101, 246, 0.032), 0px 0.6px 1.3px rgba(93, 101, 246, 0.04), 0px 1.1px 2.2px rgba(93, 101, 246, 0.048), 0px 2.1px 4.2px rgba(93, 101, 246, 0.058), 0px 5px 10px rgba(93, 101, 246, 0.08);; --o-ui-bg-alias-body: var(--o-ui-neutral-10); --o-ui-bg-alias-surface: var(--o-ui-neutral-9); --o-ui-bg-alias-soft-break: var(--o-ui-neutral-10); --o-ui-bg-alias-mid-break: var(--o-ui-neutral-8); --o-ui-bg-alias-hard-break: var(--o-ui-neutral-6); --o-ui-bg-alias-basic: var(--o-ui-neutral-5); --o-ui-bg-alias-basic-hover: var(--o-ui-neutral-6); --o-ui-bg-alias-basic-active: var(--o-ui-neutral-7); --o-ui-bg-alias-basic-transparent: var(--o-ui-transparent); --o-ui-bg-alias-basic-transparent-hover: var(--o-ui-neutral-7); --o-ui-bg-alias-basic-transparent-active: var(--o-ui-neutral-8); --o-ui-bg-alias-static-white: var(--o-ui-white); --o-ui-bg-alias-grey-hover: var(--o-ui-neutral-6); --o-ui-bg-alias-grey-active: var(--o-ui-neutral-7); --o-ui-bg-alias-accent: var(--o-ui-orange-6); --o-ui-bg-alias-accent-hover: var(--o-ui-orange-8); --o-ui-bg-alias-accent-active: var(--o-ui-orange-9); --o-ui-bg-alias-accent-faint: var(--o-ui-orange-9); --o-ui-bg-alias-accent-transparent: var(--o-ui-transparent); --o-ui-bg-alias-accent-transparent-hover: var(--o-ui-orange-9); --o-ui-bg-alias-accent-transparent-active: var(--o-ui-orange-9); --o-ui-bg-alias-accent-light: var(--o-ui-orange-8); --o-ui-bg-alias-alert: var(--o-ui-alert-6); --o-ui-bg-alias-alert-hover: var(--o-ui-alert-8); --o-ui-bg-alias-alert-active: var(--o-ui-alert-9); --o-ui-bg-alias-alert-faint: var(--o-ui-alert-9); --o-ui-bg-alias-alert-light: var(--o-ui-alert-8); --o-ui-bg-alias-alert-transparent: var(--o-ui-transparent); --o-ui-bg-alias-alert-transparent-hover: var(--o-ui-alert-8); --o-ui-bg-alias-alert-transparent-active: var(--o-ui-alert-9); --o-ui-bg-alias-warning: var(--o-ui-warning-3); --o-ui-bg-alias-warning-hover: var(--o-ui-warning-8); --o-ui-bg-alias-warning-active: var(--o-ui-warning-9); --o-ui-bg-alias-warning-faint: var(--o-ui-warning-8); --o-ui-bg-alias-warning-light: var(--o-ui-warning-7); --o-ui-bg-alias-success: var(--o-ui-success-6); --o-ui-bg-alias-success-hover: var(--o-ui-success-8); --o-ui-bg-alias-success-active: var(--o-ui-success-9); --o-ui-bg-alias-success-faint: var(--o-ui-success-9); --o-ui-bg-alias-success-light: var(--o-ui-success-8); --o-ui-bg-alias-transparent: transparent; --o-ui-bg-alias-input-selection: var(--o-ui-accent-5); --o-ui-bg-alias-underlay: rgba(31, 33, 81, 0.5); --o-ui-b-alias-low-break: var(--o-ui-neutral-8); --o-ui-b-alias-mid-break: var(--o-ui-neutral-7); --o-ui-b-alias-high-break: var(--o-ui-neutral-5); --o-ui-b-alias-accent-active: var(--o-ui-orange-8); --o-ui-b-alias-alert: var(--o-ui-alert-6); --o-ui-b-alias-alert-hover: var(--o-ui-alert-7); --o-ui-b-alias-alert-active: var(--o-ui-alert-8); --o-ui-b-alias-warning: var(--o-ui-warning-5); --o-ui-b-alias-warning-hover: var(--o-ui-warning-7); --o-ui-b-alias-warning-active: var(--o-ui-warning-8); --o-ui-b-alias-success: var(--o-ui-success-6); --o-ui-b-alias-success-hover: var(--o-ui-success-7); --o-ui-b-alias-success-active: var(--o-ui-success-8); --o-ui-icon-alias-primary: var(--o-ui-white); --o-ui-icon-alias-primary-hover: var(--o-ui-white); --o-ui-icon-alias-secondary: var(--o-ui-neutral-1); --o-ui-icon-alias-tertiary: var(--o-ui-neutral-2); --o-ui-icon-alias-faint: var(--o-ui-neutral-3); --o-ui-icon-alias-accent: var(--o-ui-orange-6); --o-ui-icon-alias-accent-hover: var(--o-ui-orange-2); --o-ui-icon-alias-accent-active: var(--o-ui-orange-2); --o-ui-icon-alias-alert: var(--o-ui-alert-4); --o-ui-icon-alias-alert-hover: var(--o-ui-alert-8); --o-ui-icon-alias-warning: var(--o-ui-warning-3); --o-ui-icon-alias-success: var(--o-ui-success-5); --o-ui-icon-alias-static-white: var(--o-ui-white); --o-ui-icon-alias-input-placeholder: var(--o-ui-neutral-3); --o-ui-text-alias-primary: var(--o-ui-white); --o-ui-text-alias-primary-hover: var(--o-ui-white); --o-ui-text-alias-secondary: var(--o-ui-neutral-1); --o-ui-text-alias-tertiary: var(--o-ui-neutral-2); --o-ui-text-alias-faint: var(--o-ui-neutral-3); --o-ui-text-alias-accent: var(--o-ui-orange-6); --o-ui-text-alias-accent-hover: var(--o-ui-orange-2); --o-ui-text-alias-accent-active: var(--o-ui-orange-2); --o-ui-text-alias-alert: var(--o-ui-alert-6); --o-ui-text-alias-warning: var(--o-ui-warning-3); --o-ui-text-alias-success: var(--o-ui-success-5); --o-ui-text-alias-static-white: var(--o-ui-white); --o-ui-text-alias-input-placeholder: var(--o-ui-neutral-3); --o-ui-focus-ring-color-alias-default: rgba(53, 144, 221, .35);
}
`.replace(/(\r\n|\n|\r|\s\s)/gm, "") // remove all line breaks, extra spaces and tabs