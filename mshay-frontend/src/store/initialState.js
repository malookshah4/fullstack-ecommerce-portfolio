export const initialState = {
  productList: {
    items: [], // This is the only line you need to change
    status: 'idle',
    error: null,
  },

  // The details page starts empty, which is already correct
  productDetails: {
    id: null,
    name: null,
    price: {},
    primaryImage: null,
    galleryImages: [],
    shortDescription: null,
    features: [],
    rating: {},
    stock: {},
    specifications: [],
    status: 'idle',
    error: null,
  },
};