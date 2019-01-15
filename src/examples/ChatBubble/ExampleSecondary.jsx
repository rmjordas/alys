import React from 'react';
import ChatBubble from 'alys/ChatBubble';

/** Secondary chat bubble */
export default function ExampleSecondary() {
  return (
    <ChatBubble arrowSide="left" variant="secondary">
      Hey Aaron, thanks for the call yesterday. So pleased that you found the
      topics we covered useful, and looking forward to seeing what you create.
      Definitely check out Photoshop too, some great tools for editing photos.
    </ChatBubble>
  );
}
