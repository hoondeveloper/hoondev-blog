import Typography from 'typography';
import GitHubTheme from 'typography-theme-github';

GitHubTheme.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: `none`,
      textDecoration: `none`,
      color: `#0687f0`,
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
      textDecoration: `none`,
    },

    'a:hover': {
      textDecoration: `none`,
    },

    h1: {
      fontWeight: 600,
      lineHeight: 1.2,
      paddingBottom: '0.6rem',
      marginTop: '2.4rem',
      marginBottom: '0.8rem',
    },

    h2: {
      fontWeight: 500,
      lineHeight: 1.2,
      paddingBottom: '0.6rem',
      marginTop: '2.2rem',
      marginBottom: '0.8rem',
    },

    li: {
      marginBottom: '6px',
    },
  };
};

const typography = new Typography(GitHubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
