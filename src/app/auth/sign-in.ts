export class SignInSuccess {
  'created': number;
  'device_description': string;
  'expires': number;
  'id': string;
  'login': string;
  'name': string;
  'offer_url': string;
  'token': string;
  'user_eid': number;
  'userid': number;
}

export class SignInError {
  'headers': object;
  'status': number;
  'statusText': string;
  'url': string;
  'ok': boolean;
  'name': string;
  'message': string;
  error: {
    'code': string;
    'description': string;
    'detail': object;
  };
}
