import { Subjects, Publisher, PaymentCreatedEvent } from '@jrstickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
