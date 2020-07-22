import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@jrstickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
