import { Publisher, Subjects, TicketCreatedEvent } from '@jrstickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
