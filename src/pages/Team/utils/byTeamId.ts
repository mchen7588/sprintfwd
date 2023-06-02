import { ITeam } from '../../../mocks/teams'

export function byTeamId(targetId: string) {
  return function(team: ITeam) {
    return team.id.toString() === targetId
  }
}
