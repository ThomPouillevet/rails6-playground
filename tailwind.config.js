module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // default is small (max 499px)
        'medium': '500px', // => @media (min-width: 500px)
        'large': '800px', // => @media (min-width: 800px)
        'xlarge': '1140px', // => @media (min-width: 1140px)
        'xxlarge': '1800px', // => @media (min-width: 1800px)
      },
      colors: {
        white: '#ffffff',
        bo: {
          // Uncommented colors are those in the formulaire adobe mockup.
          activeBlueOrLinkPrimary: '#0473c7',
          background: '#f7f9fa',
          buttonBg: '#dee6f2',
          buttonBgHover: '#b4c4dd',
          buttonDangerBg: '#ffd0d0',
          buttonDangerBgActive: '#e57272',
          buttonDangerBgHover: '#ff9595',
          darkBlue: '#071f32',
          errorBoxBg: '#fff5f5',
          errorTextOrLinkDanger: '#c70404',
          formBg: '#fafcff',
          formBorder: '#b4cbe8',
          linkDangerHover: '#ff0000',
          linkPrimaryActive: '#008CD6',
          linkPrimaryHover: '#00a7ff',
          linkWarningHover: '#F4A11C',
          placeholdersGrey: '#5c7181',
          secondaryActiveBlue: '#7692BF',
          secondaryText: '#86939d',
          successBoxBg: '#f5fff7',
          successBoxText: '#116029',
          successBoxTextHover: '#029d31',
          textSecondary: '#777777',
          toggleOff: '#CCD9ED',
          toggleOn: '#4C97CC',
          //Commented colors are the remaining ones from paris-fr
          // boxesBorder: '#dce7f2',
          // errorBoxBorder: '#ff9090',
          // errorTextOrLinkDangerHover: '#ff2a2a',
          // fileInputBg: '#cce3ff',
          // fileInputStroke: '#9cc1ef',
          // linkLogout: '#ea104b',
          // linkSecondary: '#767676',
          // listingAltBg: '#f9f9f9',
          // listingBorder: '#e2eaf4',
          // menuCurrent: '#f2f6fa',
          // quotes: '#5b7a91',
          // smallI: '#8291a7',
          // successBoxBorder: '#67d184',
          // validationBoxText: '#073214',
          // validationBoxTextHover: '#19d853',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
