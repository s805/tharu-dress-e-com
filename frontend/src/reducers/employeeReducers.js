import {
  EMPLOYEE_CUSTOMERS_DETAILS_FAIL,
  EMPLOYEE_CUSTOMERS_DETAILS_REQUEST,
  EMPLOYEE_CUSTOMERS_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_LOGIN_FAIL,
  EMPLOYEE_LOGIN_REQUEST,
  EMPLOYEE_LOGIN_SUCCESS,
  EMPLOYEE_LOGOUT,
  EMPLOYEE_PRODUCT_ORDERS_DETAILS_FAIL,
  EMPLOYEE_PRODUCT_ORDERS_DETAILS_REQUEST,
  EMPLOYEE_PRODUCT_ORDERS_DETAILS_SUCCESS,
  EMPLOYEE_REGISTER_FAIL,
  EMPLOYEE_REGISTER_REQUEST,
  EMPLOYEE_REGISTER_SUCCESS,
  EMPLOYEE_UPDATE_PROFILE_FAIL,
  EMPLOYEE_UPDATE_PROFILE_REQUEST,
  EMPLOYEE_UPDATE_PROFILE_SUCCESS,
} from "../constants/employeeConstants";

export const employeeLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_LOGIN_REQUEST:
      return { loading: true };
    case EMPLOYEE_LOGIN_SUCCESS:
      return { loading: false, employeeInfo: action.payload };
    case EMPLOYEE_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case EMPLOYEE_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const employeeRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_REGISTER_REQUEST:
      return { loading: true };
    case EMPLOYEE_REGISTER_SUCCESS:
      return { loading: false, employeeInfo: action.payload };
    case EMPLOYEE_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeProductOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_PRODUCT_ORDERS_DETAILS_REQUEST:
      return { loading: true };
    case EMPLOYEE_PRODUCT_ORDERS_DETAILS_SUCCESS:
      return { loading: false, employeeProductOrdersInfo: action.payload };
    case EMPLOYEE_PRODUCT_ORDERS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeCustomersReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_CUSTOMERS_DETAILS_REQUEST:
      return { loading: true };
    case EMPLOYEE_CUSTOMERS_DETAILS_SUCCESS:
      return { loading: false, employeeCustomersInfo: action.payload };
    case EMPLOYEE_CUSTOMERS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeDetailsReducer = (state = { employee: {} }, action) => {
  switch (action.type) {
    case EMPLOYEE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case EMPLOYEE_DETAILS_SUCCESS:
      return { loading: false, employee: action.payload };
    case EMPLOYEE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case EMPLOYEE_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, employeeInfo: action.payload };
    case EMPLOYEE_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};