import { MERCHANTS } from '../../constants/actions/merchants';

const initialState = {
  merchants: [
    {
      id: 1,
      name:'Merchant One',
      shipping_fee:
        {
          metro_manila: {
            box: '50.00',
            oversized: '100.00',
            big_pouch: '80.00',
            small_pouch: '30.00'
          },
          provincial: {
            box: '50.00',
            oversized: '100.00',
            big_pouch: '80.00',
            small_pouch: '30.00'
          },
          intra_provincial: {
            box: '50.00',
            oversized: '100.00',
            big_pouch: '80.00',
            small_pouch: '30.00'
          }
        }
    },
    {
      id: 2,
      name:'Merchant Two',
      shipping_fee:
        {
          metro_manila: {
            box: '50.00',
            oversized: '100.00',
            big_pouch: '80.00',
            small_pouch: '30.00'
          },
          provincial: {
            box: '50.00',
            oversized: '100.00',
            big_pouch: '80.00',
            small_pouch: '30.00'
          },
          intra_provincial: {
            box: '50.00',
            oversized: '100.00',
            big_pouch: '80.00',
            small_pouch: '30.00'
          }
        }
    }
   ],
  merchant: {},
  isLoading: false
};

export default function merchantsReducer(state = initialState, action) {
  switch (action.type) {
    case MERCHANTS.ADD_MERCHANT:
      return {
        ...state,
        merchants: [...state.merchants, action.params],
        isLoading: false
      };
    case MERCHANTS.FETCH_MERCHANTS:
      return {
        ...state,
        merchants: [...state.merchants],
        isLoading: false
      };
    case MERCHANTS.FETCH_MERCHANT:
      return {
        ...state,
        merchant: state.merchants.find(x => x.id == action.params),
        isLoading: false
      };
    case MERCHANTS.UPDATE_MERCHANT:
        return {
          ...state,
          merchants: state.merchants.map(merchant => {
            if (merchant.id !== action.params.id) {
              return merchant;
            } else {
              return { ...merchant, ...action.params };
            }
          }),
          isLoading: false
      };
    case MERCHANTS.DELETE_MERCHANT:
        return {
          ...state,
          merchants: state.merchants.filter(i => i.id !== action.params),
          isLoading: false
      };
    default:
      return state;
  }
}