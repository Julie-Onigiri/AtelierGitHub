import React from 'react';
import { Message as SemanticMessage } from 'semantic-ui-react';

type Props = {
  content: string;
};

function Message({ content }: Props) {
  return <SemanticMessage negative>{content}</SemanticMessage>;
}

export default Message;
