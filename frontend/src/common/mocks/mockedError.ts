import { HttpError } from 'common/models/httpErrorModels';

export const mockedError = new HttpError('Error message', {}, 500);
