import request from '@/utils/request';

export async function getData() {
  // eslint-disable-next-line no-console
  return request('/api/getData');
}

export async function delOne(id) {
  // eslint-disable-next-line no-console
  return request('/api/delOne',{
    method:"POST",
    data:{id}
  });
}

