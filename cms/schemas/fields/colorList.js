export default {
  title: 'Color List',
  description: 'Choose a color',
  name: 'colorList',
  type: 'colors', // required
  options: {
    borderradius: {
      outer: '100%',
      inner: '100%',
    },
    list: [
      { title: 'Chalk', value: '#fafaf6' },
      { title: 'Lilac Lighter', value: '#dce1fb' },
      { title: 'Lilac', value: '#cdd4fd' },
      { title: 'Lilac Darkest', value: '#0055DD' },
      { title: 'Mulberry', value: '#fdfc71' },
      { title: 'Nutella', value: '#E74640' },
      { title: 'Charcoal', value: '#242424' },
    ],
  },
};
