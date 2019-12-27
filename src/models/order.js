// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getData, delOne } from '@/services/order';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OrderModel = {
  namespace: 'order',
  state: [
  ],

  effects: {
    *getData(_, { call, put }) {
      console.log("这是model的getData方法");
      const response = yield call(getData);
      // eslint-disable-next-line no-console
      yield put({ 
        type: 'getDataReduce',
        payload: response,
      });
    },
    *delOne(param, { call, put }) {
      const response = yield call(delOne,param.payload);
      // eslint-disable-next-line no-console
      console.log("这11是",response.data);
      yield put({
        type: 'delOneReduce',
        payload: response.data,
      });
    },
  },

  reducers: {
    getDataReduce(state, action) {
      return action.payload;
    },
    delOneReduce(_, action){
      return action.payload
    }

  },
};

export default  OrderModel;
