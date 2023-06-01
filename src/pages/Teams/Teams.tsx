import LayoutProvider from '../../components/LayoutProvider'
import { teamsMock, ITeams, ITeam } from '../../mocks/teams';

type TeamRowProps = {
  name: string;
  memberCount: number;
}

function TeamRow(props: TeamRowProps) {
  return (
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        {props.memberCount}
      </td>
    </tr>
  )
}

function toTeam(teamMock: ITeam) {
  return {
    name: teamMock.name,
    memberCount: teamMock.member_count,
  }
}

type useTeamsProps = {
  teamsMock: ITeams;
}

function useTeams(props: useTeamsProps) {
  return {
    teams: props.teamsMock.teams.map(toTeam),
  }
}

function Teams() {
  const teamsController = useTeams({
    teamsMock,
  })

  return (
    <LayoutProvider>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {
              teamsController.teams.map(TeamRow)
            }
          </tbody>
        </table>
      </div>
    </LayoutProvider>
  )
}

export default Teams
