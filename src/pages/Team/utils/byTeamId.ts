import { IMember } from '../../../mocks/members'

export function byTeamId(targetId: string) {
  return function(member: IMember) {
    return member.team.id.toString() === targetId
  }
}
