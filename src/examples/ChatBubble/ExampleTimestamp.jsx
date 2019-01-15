import React from 'react';
import ChatBubble from 'alys/ChatBubble';

/** Default chat bubble with timestamp */
export default function ExampleTimestamp() {
  return (
    <ChatBubble timestamp={new Date()}>
      Great catching up today Aaron. I’ve got our next mentoring session
      schedule for next Tuesday 6th November if this still works for you? How do
      you feel about tackling some more advanced photography techniques?
    </ChatBubble>
  );
}
