import {MERCHANTS} from '../../constants/actions/merchants';

export const fetchMerchants = params => ({
  type: MERCHANTS.FETCH_MERCHANTS,
  params
});

export const fetchMerchant = params => ({
  type: MERCHANTS.FETCH_MERCHANT,
  params
});

export const updateMerchant = params => ({
  type: MERCHANTS.UPDATE_MERCHANT,
  params
});

export const deleteMerchant = params => ({
  type: MERCHANTS.DELETE_MERCHANT,
  params
});

export const addMerchant = params => ({
  type: MERCHANTS.ADD_MERCHANT,
  params
});