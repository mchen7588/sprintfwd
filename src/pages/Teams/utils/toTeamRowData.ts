import { ITeam } from '../../../mocks/teams'

export function toTeamRowData(teamMock: ITeam) {
  return [
    teamMock.name,
    teamMock.member_count.toString(),
  ]
}
