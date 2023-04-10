import ajax from '@/utils/ajax';

export function getUrl(url) {
  return ajax(`/upload/getURL?pathName=${url}`, {
    method: 'POST',
  });
}

const dufaultOssParams = { contextPath: 'allowance/files/', type: 2 };
export function getOssConfig(params = dufaultOssParams) {
  return ajax.get(`/upload/getUploadAuth`, { params });
}

