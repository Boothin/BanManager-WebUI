import React from 'react'
import withData from 'lib/withData'
import DefaultLayout from 'components/DefaultLayout'
import {
  Container
} from 'semantic-ui-react'
import { Router } from 'routes'
import PlayerNoteForm from 'components/PlayerNoteForm'
import PlayerNoteQuery from 'components/queries/PlayerNoteQuery'

export class PlayerNotePage extends React.Component {
  static async getInitialProps({ query }) {
    return {
      data: { id: query.id, server: query.server }
    }
  }

  onUpdate = (playerId) => {
    return Router.pushRoute('player', { id: playerId })
  }

  render() {
    const { data: { id, server } } = this.props
    const title = 'Edit Player Note'

    return (
      <DefaultLayout title={title} displayNavTitle>
        <Container style={{ marginTop: '2em' }}>
          <PlayerNoteQuery id={id} server={server} onUpdate={this.onUpdate}>
            {({ playerNote }, { handleUpdate }) => (
              <PlayerNoteForm data={playerNote} onSubmit={handleUpdate} />
            )}
          </PlayerNoteQuery>
        </Container>

      </DefaultLayout>
    )
  }
}

export default withData(PlayerNotePage)
