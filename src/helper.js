const [themeDark, themeLight] = ['dark-theme', 'light-theme'];
const THEME_KEY = 'theme';

export function getTheme() {
    return localStorage.getItem(THEME_KEY) || themeDark;
}
export function getInitialTheme() {
    const initialTheme = getTheme();
    localStorage.setItem(THEME_KEY, initialTheme);
    document.documentElement.classList = initialTheme;
}

export function toggleTheme() {
    const theme =
        localStorage.getItem(THEME_KEY) === themeDark ? themeLight : themeDark;
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList = theme;
    return theme;
}
