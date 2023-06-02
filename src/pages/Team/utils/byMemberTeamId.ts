import { IMember } from '../../../mocks/members'

export function byMemberTeamId(targetId: string) {
  return function(member: IMember) {
    return member.team.id.toString() === targetId
  }
}
