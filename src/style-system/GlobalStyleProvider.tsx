import { useEffect, useLayoutEffect, useRef } from "react";
import { isNil } from "../utils/assertions";
import { useColorSchemeContext } from "./ColorSchemeContext";
import { useInjectGlobalStyles } from "./useInjectGlobalStyles";
import { ThemeComputedStyle } from "./useThemeComputedStyle";

const GlobalStyles = `
    @font-face {
        src: url("https://assets.sharegate.com/shared/brand/fonts/interphases/TT-Interphases-Var-Roman.woff2") format("woff2-variations");
        font-family: "TT Interphases Variable";
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        src: url("https://assets.sharegate.com/shared/brand/fonts/interphases/TT-Interphases-Var-Italic.woff2") format("woff2-variations");
        font-family: "TT Interphases Variable";
        font-style: italic;
        font-display: swap;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;

        font-family: "TT Interphases Variable", Arial, Helvetica, sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }

    @media not (prefers-reduced-motion) {
        body {
            scroll-behavior: smooth;
        }
    }
    `.replace(/(\r\n|\n|\r|\s\s)/gm, "") // remove all line breaks, extra spaces and tabs

export interface GlobalStyleProviderProps {
    scope: string;
}

// TODO utils method for this
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// TODO: explain why this is a component. The reason is we want it to be a children of the root element of the hopper provider
export function GlobalStyleProvider({scope}: GlobalStyleProviderProps) {
    const ref = useRef<HTMLDivElement>(null);
    const colorScheme = useColorSchemeContext();

    useInjectGlobalStyles(`hop-global-styles-${scope}`, GlobalStyles)

    useIsomorphicLayoutEffect(() => {
        const computedStyle = new ThemeComputedStyle(ref, `.${scope}`);
        const color = computedStyle.getPropertyValue("--o-ui-text-alias-primary");
        const backgroundColor = computedStyle.getPropertyValue("--o-ui-bg-alias-body");

        const cssContent= `
        body {
            color: ${color};
            background-color: ${backgroundColor};
        }
        `.replace(/(\r\n|\n|\r|\s\s)/gm, "")
        const elementId = `hop-global-cosmetic-styles-${scope}`;
        let element = document.getElementById(elementId);
            if(isNil(element)) {
                element = document.createElement("style");
                element.id = elementId;
                document.head.appendChild(element);
                element.innerText = cssContent;
                return () => {
                    element?.remove();
                }
            } else {
                element.innerText = cssContent;
            }

            // we re-run this hook if colorScheme changes
    }, [ref, scope, colorScheme])

    return (
        <div ref={ref}></div>
    );
}

