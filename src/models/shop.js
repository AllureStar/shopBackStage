// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getData, delOne } from '@/services/shop';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ShopModel = {
  namespace: 'shop',
  //发送的数据
  state: [
    {
      key:1,
      name: 'Edward King 1',
      age: 32,
      address: 'London, Park Lane no. 1',
      Action:'删除---修改'
    },
    {
      key:2,
      name: 'Edward King 2',
      age: 32,
      address: 'London, Park Lane no. 2',
      Action:'删除---修改'
    },
    {
      key:3,
      name: 'Edward King 3',
      age: 32,
      address: 'London, Park Lane no. 3',
      Action:'删除---修改'
    }
  ],

  //
  effects: {
    *getData(_, { call, put }) {
      console.log("这是Shop的model的getData方法");
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
      // console.log("这是",response.data);
      yield put({
        type: 'delOneReduce',
        payload: response.data,
      });
    },

  },

  /* reducers   Dva model 中可以定义一个叫reducers 相应action 并修改state
  *  connect  改变之后会被connect 注入到组件中，触发视图层改变
  *
  *
  *
  *
  * */
  reducers: {
    getDataReduce(state, action) {
      return action.payload;
      // return  'shopData';
    },
    delOneReduce(_, action){
      return action.payload
    }

  },
};

export default  ShopModel;
