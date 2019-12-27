// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getData, delOne} from '@/services/order';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserinfoModel = {
  namespace: 'userinfo',
  state: [
    
    // eslint-disable-next-line no-undef
    {
      name:'aa',
      phone:'15731138341',
      email:'2082391675@qq.com'
    },

  ],

  // 用来处理异步的逻辑
  effects: {
    *getData(_, { call, put }) {
      // eslint-disable-next-line no-console
      console.log("这是model的getData方法aa");
      const response = yield call(getData);
      // 为了触发reducers中的方法
      yield put({
        type: 'getDataReduce',
        // eslint-disable-next-line no-undef
        payload: response,
      });
    },
    *delOne(param, { call, put }) {
      const response = yield call(delOne,param.payload);
      // eslint-disable-next-line no-console
      console.log("这是aa",response.data);
      yield put({
        type: 'delOneReduce',
        payload: response.data,
      });
    },

    // 修改个人信息
    *modyfiInfo(param, { call, put }) {
      // eslint-disable-next-line no-console
      console.log(put);
      // eslint-disable-next-line no-console
      console.log('CCCC');
      // eslint-disable-next-line no-undef
      // const response = yield call(modifyInfo,param.payload);
      // console.log("这是",response.data);
      yield put({
        type: 'modifyOneReduce',
        // payload: response.data,
        payload: 'aaaaa',
      });
    },


  },

  // 功能和setState 很像
  reducers: {
    getDataReduce(state, action) {
      return action.payload;
    },
    delOneReduce(_, action){
      return action.payload
    },
    modyfiInfoReduce(_, action){
      return action.payload
    }

  },
};

export default  UserinfoModel;
