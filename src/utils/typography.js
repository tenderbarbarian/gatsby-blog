import Typography from 'typography';
import myTheme from 'typography-theme-noriega'; //lato font
// import myTheme from 'typography-theme-kirkham'; //pretty but too ornate for a coder

const typography = new Typography(myTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') typography.injectStyles();

export default typography;
