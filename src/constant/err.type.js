const errType = {
  userFormatError: {
    code: 10001,
    msg: '用户名或密码格式错误',
    data: {},
  },
  //用户已经存在错误码
  userAlreadyExist: {
    code: 10002,
    msg: '用户名已存在',
    data: {},
  },
  //注册失败错误码
  registerFail: {
    code: 10003,
    msg: '注册失败',
    data: {},
  },
};
export default errType;
