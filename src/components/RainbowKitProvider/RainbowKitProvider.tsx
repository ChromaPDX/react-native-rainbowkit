import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { cssStringFromTheme } from '../../css/cssStringFromTheme';
import { ThemeVars } from '../../css/sprinkles.css';
import { lightTheme } from '../../themes/lightTheme';
import { TransactionStoreProvider } from '../../transactions/TransactionStoreContext';
import { AppContext, defaultAppInfo, DisclaimerComponent } from './AppContext';
import { AvatarComponent, AvatarContext, defaultAvatar } from './AvatarContext';
import { CoolModeContext } from './CoolModeContext';
import {
  RainbowKitChain,
  RainbowKitChainContext,
} from './RainbowKitChainContext';
import { ShowRecentTransactionsContext } from './ShowRecentTransactionsContext';
import { provideRainbowKitChains } from './provideRainbowKitChains';
import { useOnDisconnected } from './useOnDisconnected';
import { clearWalletConnectDeepLink } from './walletConnectDeepLink';
const ThemeIdContext = createContext<string | undefined>(undefined);

const attr = 'data-rk';

const createThemeRootProps = (id: string | undefined) => ({ [attr]: id || '' });

const createThemeRootSelector = (id: string | undefined) => {
  if (id && !/^[a-zA-Z0-9_]+$/.test(id)) {
    throw new Error(`Invalid ID: ${id}`);
  }

  return id ? `[${attr}="${id}"]` : `[${attr}]`;
};

export const useThemeRootProps = () => {
  const id = useContext(ThemeIdContext);
  return createThemeRootProps(id);
};

export type Theme =
  | ThemeVars
  | {
      lightMode: ThemeVars;
      darkMode: ThemeVars;
    };

export interface RainbowKitProviderProps {
  chains: RainbowKitChain[];
  id?: string;
  children: ReactNode;
  theme?: Theme | null;
  showRecentTransactions?: boolean;
  appInfo?: {
    appName?: string;
    learnMoreUrl?: string;
    disclaimer?: DisclaimerComponent;
  };
  coolMode?: boolean;
  avatar?: AvatarComponent;
}

const defaultTheme = lightTheme();

export function RainbowKitProvider({
  chains,
  id,
  theme = defaultTheme,
  children,
  appInfo,
  showRecentTransactions = false,
  coolMode = false,
  avatar,
}: RainbowKitProviderProps) {
  const rainbowkitChains = useMemo(
    () => provideRainbowKitChains(chains),
    [chains]
  );

  useOnDisconnected(clearWalletConnectDeepLink);

  if (typeof theme === 'function') {
    throw new Error(
      'A theme function was provided to the "theme" prop instead of a theme object. You must execute this function to get the resulting theme object.'
    );
  }

  const selector = createThemeRootSelector(id);

  const appContext = {
    ...defaultAppInfo,
    ...appInfo,
  };

  const avatarContext = avatar ?? defaultAvatar;

  return (
    <RainbowKitChainContext.Provider value={rainbowkitChains}>
      <CoolModeContext.Provider value={coolMode}>
        <ShowRecentTransactionsContext.Provider value={showRecentTransactions}>
          <TransactionStoreProvider>
            <AvatarContext.Provider value={avatarContext}>
              <AppContext.Provider value={appContext}>
                <ThemeIdContext.Provider value={id}>
                  {theme ? (
                    <div {...createThemeRootProps(id)}>
                      <style
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                          // Selectors are sanitized to only contain alphanumeric
                          // and underscore characters. Theme values generated by
                          // cssStringFromTheme are sanitized, removing
                          // characters that terminate values / HTML tags.
                          __html: [
                            `${selector}{${cssStringFromTheme(
                              'lightMode' in theme ? theme.lightMode : theme
                            )}}`,

                            'darkMode' in theme
                              ? `@media(prefers-color-scheme:dark){${selector}{${cssStringFromTheme(
                                  theme.darkMode,
                                  { extends: theme.lightMode }
                                )}}}`
                              : null,
                          ].join(''),
                        }}
                      />
                      {children}
                    </div>
                  ) : (
                    children
                  )}
                </ThemeIdContext.Provider>
              </AppContext.Provider>
            </AvatarContext.Provider>
          </TransactionStoreProvider>
        </ShowRecentTransactionsContext.Provider>
      </CoolModeContext.Provider>
    </RainbowKitChainContext.Provider>
  );
}
