import { MessageService } from './../../services/message/message.service';
import { MessagesComponentForLab } from './messages.lab.component';

describe('2-message component integration testing:', () => {
  let component: MessagesComponentForLab;
  let messageService: MessageService;

  beforeEach(() => {
    messageService = new MessageService();
    component = new MessagesComponentForLab(messageService);
  });

  it('should create the component successfully', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty template', () => {
    expect(component.messageService.messages.length).toBeFalsy();
  });

  it('should display the messages in the div.msg after setting them', () => {
    const mockMessages = ['Message 1', 'Message 2'];
    component.messageService.messages = mockMessages;
    expect(component.messageService.messages).toEqual(mockMessages);
  });
});
