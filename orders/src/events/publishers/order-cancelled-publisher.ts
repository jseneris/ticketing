import { Publisher, OrderCancelledEvent, Subjects } from '@jrstickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
