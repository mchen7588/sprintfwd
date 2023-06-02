import { IMember } from '../../../mocks/members'

export function toTeamDetail(member: IMember) {
  return [
    {
      text: `${member.first_name} ${member.last_name}`},
    {
      text: member.email,
    }
  ]
}
