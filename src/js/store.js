import { createStore } from 'framework7';

const initialProducts = [
  {
    id: '1',
    title: 'Apple iPhone 8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem co[...]',
  },
  {
    id: '2',
    title: 'Apple iPhone 8 Plus',
    description:
      'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveni[...]',
  },
  {
    id: '3',
    title: 'Apple iPhone X',
    description:
      'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earu[...]',
  },
];

const store = createStore({
  state: {
    products: [...initialProducts],
  },
  getters: {
    products: ({ state }) => state.products,
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
});

export default store;