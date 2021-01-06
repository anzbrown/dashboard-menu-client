const [themeDark, themeLight] = ['dark-theme', 'light-theme'];
const THEME_KEY = 'theme';

export function getInitialTheme() {
    const initialTheme = localStorage.getItem(THEME_KEY) || themeDark;
    localStorage.setItem(THEME_KEY, initialTheme);
    document.documentElement.classList = initialTheme;
}

export function toggleTheme() {
    const theme =
        localStorage.getItem(THEME_KEY) === themeDark ? themeLight : themeDark;
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList = theme;
}
