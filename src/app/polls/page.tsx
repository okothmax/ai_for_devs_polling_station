import { PollCard } from "@/components/poll-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data - replace with real data from your API
type Poll = {
  id: string
  title: string
  description: string
  totalVotes: number
  endsAt: string
}

const mockPolls: Poll[] = [
  {
    id: "1",
    title: "Favorite Programming Language 2025",
    description: "Which programming language do you enjoy using the most in 2025?",
    totalVotes: 1243,
    endsAt: "2025-12-31T23:59:59Z"
  },
  {
    id: "2",
    title: "Best Frontend Framework",
    description: "What's your go-to frontend framework in 2025?",
    totalVotes: 876,
    endsAt: "2025-11-30T23:59:59Z"
  }
]

export default function PollsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text3xl font-bold tracking-tight">Latest Polls</h1>
        <Button asChild>
          <Link href="/polls/new">Create New Poll</Link>
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockPolls.map((poll) => (
          <PollCard
            key={poll.id}
            id={poll.id}
            title={poll.title}
            description={poll.description}
            totalVotes={poll.totalVotes}
            endsAt={new Date(poll.endsAt)}
          />
        ))}
      </div>
    </div>
  )
}
