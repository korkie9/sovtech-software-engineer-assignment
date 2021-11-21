module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['hover', 'group-hover'],
      fontWeight: ['group-hover', 'active'],
      translate: ['group-hover'],
      padding: ['group-hover'],
      borderRadius: ['group-hover']

    },
  },
  plugins: [],
}

