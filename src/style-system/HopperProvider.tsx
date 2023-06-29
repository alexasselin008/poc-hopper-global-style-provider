import { ReactNode, useState } from "react";
import packageJson from "../../package.json" assert { type: "json" };
import { ColorSchemeContext } from "./ColorSchemeContext";
import { GlobalStyleProvider } from "./GlobalStyleProvider";
import { TokensProvider } from "./TokensProvider";
import { ColorScheme, ColorSchemeOrSystem, useColorScheme } from "./useColorScheme";

export interface HopperProviderProps {
    children: ReactNode;
    withGlobalStyles?: boolean;
    withTokens?: boolean;
    scope?: string
    /**
     * The color scheme to use.
     */
    colorScheme: ColorSchemeOrSystem;
    /**
     * Default color scheme to use when a user preferred color scheme (system) is not available.
     */
    defaultColorScheme?: ColorScheme;
}

// TODO: use the major version only to determine if we should duplicate tokens or not.
const DefaultScope = `o-ui-${packageJson.version.replaceAll(".", "-")}`


export function HopperProvider({ children, withGlobalStyles = false, withTokens = false, colorScheme, defaultColorScheme, scope = DefaultScope }: HopperProviderProps) {
    const [remoteColorScheme, setRemoteColorScheme] = useState<ColorScheme>();
    const computedColorScheme = useColorScheme(remoteColorScheme ?? colorScheme, defaultColorScheme);

    return (
        <ColorSchemeContext.Provider
            value={{
                colorScheme: computedColorScheme,
                setColorScheme: setRemoteColorScheme
            }}
        >
            <BreakpointProvider>
                <div className={`o-ui o-ui-${computedColorScheme} ${scope} ${scope}-${computedColorScheme}`}>
                    {withGlobalStyles && <GlobalStyleProvider scope={scope}/>}
                    {withTokens && <TokensProvider scope={scope}/>}

                    {children}
                </div>
            </BreakpointProvider>
        </ColorSchemeContext.Provider>
    );
}

function BreakpointProvider({ children} : {children: ReactNode}) {
    return (
        <>
            {children}
        </>
    );
}