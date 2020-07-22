import { Publisher, Subjects, TicketUpdatedEvent } from '@jrstickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
