module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        bo: {
          // Uncommented colors are those in the formulaire adobe mockup.
          //Commented colors are the remaining ones from paris-fr
          // linkSecondary: '#767676',
          textSecondary: '#777777',
          darkBlue: '#071f32',
          // menuCurrent: '#f2f6fa',
          // smallI: '#8291a7',
          // quotes: '#5b7a91',
          successBoxBg: '#f5fff7',
          background: '#f7f9fa',
          // listingAltBg: '#f9f9f9',
          formBg: '#fafcff',
          // listingBorder: '#e2eaf4',
          // boxesBorder: '#dce7f2',
          toggleOff: '#CCD9ED',
          toggleOn: '#4C97CC',
          buttonBg: '#dee6f2',
          buttonBgHover: '#b4c4dd',
          formBorder: '#b4cbe8',
          placeholdersGrey: '#5c7181',
          secondaryText: '#86939d',
          secondaryActiveBlue: '#7692BF',
          // fileInputBg: '#cce3ff',
          // fileInputStroke: '#9cc1ef',
          linkPrimaryHover: '#00a7ff',
          linkPrimaryActive: '#008CD6',
          activeBlueOrLinkPrimary: '#0473c7',
          errorBoxBg: '#fff5f5',
          buttonDangerBg: '#ffd0d0',
          buttonDangerBgHover: '#ff9595',
          buttonDangerBgActive: '#e57272',
          // errorBoxBorder: '#ff9090',
          linkDangerHover: '#ff0000',
          // errorTextOrLinkDangerHover: '#ff2a2a',
          // linkLogout: '#ea104b',
          errorTextOrLinkDanger: '#c70404',
          // successBoxBorder: '#67d184',
          // validationBoxTextHover: '#19d853',
          successBoxTextHover: '#029d31',
          successBoxText: '#116029',
          linkWarningHover: '#F4A11C',
          // validationBoxText: '#073214',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
