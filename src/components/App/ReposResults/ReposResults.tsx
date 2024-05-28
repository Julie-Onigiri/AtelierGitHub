import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './index.scss';

type Owner = {
  login: string;
  avatar_url: string;
};

type Repo = {
  id: number;
  name: string;
  owner: Owner;
  description: string;
};

type Props = {
  repos: Repo[];
};

function ReposResults({ repos }: Props) {
  return (
    <Card.Group itemsPerRow={3} stackable>
      {repos.map((repo) => (
        <Card key={repo.id}>
          <Card.Content>
            <Image floated="right" size="mini" src={repo.owner.avatar_url} />
            <Card.Header>{repo.name}</Card.Header>
            <Card.Meta>{repo.owner.login}</Card.Meta>
            <Card.Description>{repo.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

export default ReposResults;
