// /types/repo.ts
export interface Repository {
  id: number
  name: string
  description: string | null // 깃허브에 설명이 없는 경우도 있음
  stargazers_count: number
  forks_count: number
  watchers_count: number
  visibility: 'public' | 'private'
  owner: {
    login: string
    id: number
    avatar_url: string
  }
}
