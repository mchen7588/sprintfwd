import { ITeam } from '../../../mocks/teams'

export function toTeamRowData(teamMock: ITeam) {
  return [
    {
      text: teamMock.name
    },
    {
      text: teamMock.member_count.toString()
    },
  ]
}
