import { useEffect, useInsertionEffect } from "react";
import { isNil } from "../utils/assertions";

// TODO name isomorphic here also?
const useInsertionEffectWithFallback = typeof window !== 'undefined' ? useInsertionEffect : useEffect;

export function useInjectGlobalStyles(elementId: string, cssContent: string) {
    useInsertionEffectWithFallback(() => {
            // TODO: is there something to do with document.styleSheets?
            // TODO use a better id?
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


    }, [elementId, cssContent])
}