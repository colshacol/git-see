import { getRepo } from '../../api/getRepo'

const addRepo = async (repoStr: string) => {
  const repo = await getRepo(repoStr.split('/'))
  return {
    type: 'add_repo',
    data: repo,
  }
}
